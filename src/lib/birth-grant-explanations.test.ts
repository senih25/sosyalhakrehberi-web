import assert from "node:assert/strict";
import test from "node:test";
import { buildBirthGrantDecisionViewModel } from "./birth-grant-explanations.ts";

test("birth grant decision view keeps backend message as summary when provided", () => {
  const view = buildBirthGrantDecisionViewModel({
    status: "ELIGIBLE",
    reasons: [
      {
        code: "LIVE_BIRTH_REQUIRED",
        message: "Canlı doğum bilgisi olumlu görünüyor.",
        severity: "INFO",
      },
    ],
    missingFacts: [],
    userMessage: "Backend yönlendirmesi gösteriliyor.",
    benefitDetails: {
      child_order: 1,
      payment_type: "ONE_TIME",
      payment_amount: 5000,
    },
  });

  assert.equal(view.summary, "Backend yönlendirmesi gösteriliyor.");
  assert.equal(view.paymentSummary, "5.000 TL tek sefer");
});

test("birth grant decision view maps missing facts into guidance items", () => {
  const view = buildBirthGrantDecisionViewModel({
    status: "NEEDS_INFO",
    reasons: [],
    missingFacts: [
      {
        key: "child_birth_date",
        message: "Doğum tarihi eksik.",
      },
    ],
  });

  assert.equal(view.missingInformation.length, 1);
  assert.match(view.missingInformation[0].title, /Doğum tarihini ekleyin/i);
});

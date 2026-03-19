import test from "node:test";
import assert from "node:assert/strict";
import {
  buildEligibilityPayload,
  initialEligibilityFormState,
  type EligibilityFormState,
} from "./eligibility-form.ts";

function makeFormState(
  overrides: Partial<EligibilityFormState> = {},
): EligibilityFormState {
  return {
    ...initialEligibilityFormState,
    disabilityRate: "80",
    householdIncome: "10000",
    householdSize: "4",
    ...overrides,
  };
}

test("maps yes attestations to true without changing the canonical request shape", () => {
  const payload = buildEligibilityPayload(
    makeFormState({
      isTurkishCitizen: true,
      isResidentInTr: true,
    }),
    "req-yes",
  );

  assert.deepEqual(payload, {
    benefit_code: "TR_HOME_CARE_ALLOWANCE",
    facts: {
      disability_rate: 80,
      household_income: 10000,
      household_size: 4,
      is_turkish_citizen: true,
      is_resident_in_tr: true,
    },
    context: {
      jurisdiction: "TR",
      request_id: "req-yes",
    },
  });
});

test("maps no attestations to false", () => {
  const payload = buildEligibilityPayload(
    makeFormState({
      isTurkishCitizen: false,
      isResidentInTr: false,
    }),
    "req-no",
  );

  assert.equal(payload.facts.is_turkish_citizen, false);
  assert.equal(payload.facts.is_resident_in_tr, false);
});

test("omits unknown attestations so backend can treat them as missing facts", () => {
  const payload = buildEligibilityPayload(
    makeFormState({
      isTurkishCitizen: null,
      isResidentInTr: null,
    }),
    "req-unknown",
  );

  assert.equal("is_turkish_citizen" in payload.facts, false);
  assert.equal("is_resident_in_tr" in payload.facts, false);
});

test("keeps explicit false attestations while blank numeric fields remain nullable", () => {
  const payload = buildEligibilityPayload(
    makeFormState({
      disabilityRate: "",
      householdIncome: "",
      householdSize: "",
      isTurkishCitizen: false,
      isResidentInTr: true,
    }),
    "req-blank",
  );

  assert.deepEqual(payload.facts, {
    disability_rate: null,
    household_income: null,
    household_size: null,
    is_turkish_citizen: false,
    is_resident_in_tr: true,
  });
});

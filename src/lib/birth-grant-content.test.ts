import assert from "node:assert/strict";
import test from "node:test";
import {
  birthGrantFaqItems,
  birthGrantGuideIntro,
  birthGrantGuideSections,
} from "./birth-grant-content.ts";

test("birth grant guide content stays guidance-oriented", () => {
  assert.match(birthGrantGuideIntro.title, /Doğum yardımı rehberi/i);
  assert.ok(birthGrantGuideSections.length >= 3);
  assert.ok(
    birthGrantGuideIntro.summary.includes("Resmî karar vermez"),
  );
});

test("birth grant faq content does not promise official approval", () => {
  assert.ok(birthGrantFaqItems.length >= 3);
  assert.ok(
    birthGrantFaqItems.some((item) =>
      item.answer.includes("ön değerlendirme") ||
      item.answer.includes("Resmî başvuru"),
    ),
  );
});

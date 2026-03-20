import test from "node:test";
import assert from "node:assert/strict";
import { getToolGuidanceModel } from "./tool-guidance.ts";

test("returns existing Home Care guides and other tool links", () => {
  const model = getToolGuidanceModel("home-care");

  assert.equal(model.relatedGuides[0]?.href, "/evde-bakim-maasi");
  assert.equal(model.otherTests[0]?.href, "/gss-gelir-testi");
});

test("returns a dedicated GSS companion guide", () => {
  const model = getToolGuidanceModel("gss");

  assert.equal(model.relatedGuides[0]?.href, "/gss-gelir-testi/rehber");
});

test("returns a dedicated old-age companion guide", () => {
  const model = getToolGuidanceModel("old-age");

  assert.equal(model.relatedGuides[0]?.href, "/65-yas-ayligi-uygunluk-testi/rehber");
});

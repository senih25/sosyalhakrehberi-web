import type { EligibilityCheckRequest } from "@/lib/types";

export type TriStateAttestation = true | false | null;

export type EligibilityFormState = {
  disabilityRate: string;
  householdIncome: string;
  householdSize: string;
  isTurkishCitizen: TriStateAttestation;
  isResidentInTr: TriStateAttestation;
};

export const initialEligibilityFormState: EligibilityFormState = {
  disabilityRate: "",
  householdIncome: "",
  householdSize: "",
  isTurkishCitizen: null,
  isResidentInTr: null,
};

function toNumber(value: string): number | null {
  if (!value.trim()) {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function buildEligibilityPayload(
  form: EligibilityFormState,
  requestId: string,
): EligibilityCheckRequest {
  const facts: EligibilityCheckRequest["facts"] = {
    disability_rate: toNumber(form.disabilityRate),
    household_income: toNumber(form.householdIncome),
    household_size: toNumber(form.householdSize),
  };

  if (form.isTurkishCitizen !== null) {
    facts.is_turkish_citizen = form.isTurkishCitizen;
  }

  if (form.isResidentInTr !== null) {
    facts.is_resident_in_tr = form.isResidentInTr;
  }

  return {
    benefit_code: "TR_HOME_CARE_ALLOWANCE",
    facts,
    context: {
      jurisdiction: "TR",
      request_id: requestId,
    },
  };
}

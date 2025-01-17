export enum BloodGlucoseUnit {
  mgdl = "mg/dl",
  mmol = "mmol/L",
}

export enum NightscoutBloodGlucoseUnit {
  mgdl = "mg/dl",
  mmol = "mmol",
}

// @TODO: once this repo is properly part of the workspace,
// pull this in from gluco-check-core instead
// These are mapped to translations directly by case name,
// additions or changes here need to be reflected there
export enum DiabetesMetric {
  Everything = "everything",
  BloodSugar = "blood sugar",
  InsulinOnBoard = "insulin on board",
  CarbsOnBoard = "carbs on board",
  SensorAge = "sensor age",
  CannulaAge = "cannula age",
  PumpBattery = "pump battery",
  PumpReservoir = "pump reservoir",
}

export enum AvailableLanguage {
  English = "en",
  Dutch = "nl",
  Spanish = "es",
  Swedish = "sv",
  German = "de",
}

// These languages are being tested.
// We'll show a message informing users they have to sign up to get access.
export enum BetaLanguage {
  Spanish = AvailableLanguage.Spanish,
  Swedish = AvailableLanguage.Swedish,
  German = AvailableLanguage.German,
}

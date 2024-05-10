export interface DogImage {
  readonly _tag: "DogImage";
  readonly message: string;
  readonly status: string;
}

export class FetchFailedError {
  readonly _tag = "Failed to get data!";
}

export class NoImageError {
  readonly _tag = "No image found";
}

export interface PublicHoliday {
  readonly _tag: "PublicHoliday";
  readonly date: string;
  readonly localName: string;
  readonly name: string;
  readonly countryCode: string;
  readonly fixed: boolean;
  readonly global: boolean;
  readonly counties: string[] | null;
  readonly launchYear: null;
  readonly types: string[];
}

export class PublicHolidayNotFoundError {
  readonly _tag = "No public holidays found!";
}

export class NoPublicHolidaysGiven {
  readonly _tag = "No public holidays given!";
}

export class NoCountryCodeGiven {
  readonly _tag = "No country code given!";
}

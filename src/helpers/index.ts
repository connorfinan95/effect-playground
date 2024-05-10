import { Effect } from "effect";
import * as Queries from "../queries";
import {
  NoCountryCodeGiven,
  NoPublicHolidaysGiven,
  PublicHoliday,
  PublicHolidayNotFoundError
} from "../models";

export const getDogImage = async () => {
  const program = Effect.gen(function* () {
    const dogImage = yield* Queries.getDogImage;

    return yield* Effect.succeed(dogImage);
  });

  return Effect.runPromise(program);
};

// Public holiday example
const getHolidayByCountryCode = (
  holidays: Array<PublicHoliday>,
  countryCode: string
): Effect.Effect<
  PublicHoliday,
  PublicHolidayNotFoundError | NoPublicHolidaysGiven | NoCountryCodeGiven
> => {
  if (!holidays || holidays.length < 1)
    return Effect.fail(new NoPublicHolidaysGiven());

  if (!countryCode) return Effect.fail(new NoCountryCodeGiven());

  const foundHoliday = holidays.find(h => h.countryCode === countryCode);

  if (!foundHoliday) return Effect.fail(new PublicHolidayNotFoundError());

  return Effect.succeed(foundHoliday);
};

const convertCountryCodeToFullName = (
  holiday: PublicHoliday
): Effect.Effect<PublicHoliday, PublicHolidayNotFoundError> => {
  if (!holiday) return Effect.fail(new PublicHolidayNotFoundError());

  const updatedHoliday = { ...holiday, countryCode: "Columbia" };
  return Effect.succeed(updatedHoliday);
};

export const getNextPublicHolidays = async (countryCode: string) => {
  const program = Effect.gen(function* () {
    const holidays = yield* Queries.getNextWorldwidePublicHoliday;
    const holidayByCountry = yield* getHolidayByCountryCode(
      holidays,
      countryCode
    );
    const holidayWithFullCountryName = yield* convertCountryCodeToFullName(
      holidayByCountry
    );

    return yield* Effect.succeed(holidayWithFullCountryName);
  });

  return Effect.runPromise(program);
};

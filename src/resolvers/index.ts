import { Effect, RequestResolver } from "effect";
import * as Model from "../models";
import * as RequestModel from "../models/requestModel";
import * as API from "../api";

// we assume we cannot batch GetDogImages, we create a normal resolver
export const GetDogImageResolver = RequestResolver.fromEffect(
  (request: RequestModel.IGetDogImage) =>
    Effect.tryPromise({
      try: () =>
        API.simulatedValidation<Model.DogImage>(
          fetch("https://dog.ceo/api/breeds/image/random")
        ),
      catch: err => {
        // more errors can be added here
        return new Model.FetchFailedError();
      }
    })
);

export const GetNextPublicHolidaysResolver = RequestResolver.fromEffect(
  (request: RequestModel.IGetNextPublicHolidays) =>
    Effect.tryPromise({
      try: () =>
        API.simulatedValidation<Array<Model.PublicHoliday>>(
          fetch("https://date.nager.at/api/v3/NextPublicHolidaysWorldwide")
        ),
      catch: err => {
        // more errors can be added here
        return new Model.FetchFailedError();
      }
    })
);

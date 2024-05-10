import { Effect } from "effect";
import * as Model from "../models";
import * as RequestModel from "../models/requestModel";
import * as Resolvers from "../resolvers";

export const getDogImage: Effect.Effect<
  Model.DogImage,
  Model.FetchFailedError
> = Effect.request(RequestModel.getDogImage({}), Resolvers.GetDogImageResolver);

export const getNextWorldwidePublicHoliday: Effect.Effect<
  Array<Model.PublicHoliday>,
  Model.FetchFailedError
> = Effect.request(
  RequestModel.getNextPublicHolidays({}),
  Resolvers.GetNextPublicHolidaysResolver
);

import { Request } from "effect";
import * as Model from "../models";

export interface IGetDogImage
  extends Request.Request<Model.DogImage, Model.FetchFailedError> {
  readonly _tag: "GetDogImage";
}

export const getDogImage = Request.tagged<IGetDogImage>("GetDogImage");

export interface IGetNextPublicHolidays
  extends Request.Request<Array<Model.PublicHoliday>, Model.FetchFailedError> {
  readonly _tag: "GetNextPublicHolidays";
}

export const getNextPublicHolidays = Request.tagged<IGetNextPublicHolidays>(
  "GetNextPublicHolidays"
);

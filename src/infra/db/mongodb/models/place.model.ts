import mongoose from "mongoose";
import { placeTypes } from "../const/placeTypes";
import { PlaceProps } from "@domain/entities/Place";

const { Schema } = mongoose;

const placeSchema = new Schema<PlaceProps>({

  type: {
    type: String,
    required: true,
    enum: [
      placeTypes.cafe,
      placeTypes.cafeRestaurant,
      placeTypes.restaurant,
      placeTypes.adventure,
      placeTypes.hotel,
    ],
    default: placeTypes.restaurant,
  },

  name: {
    type: String,
    required: true,
  },
  user_id:{
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
});

const placeModel = mongoose.model("place", placeSchema);

export default placeModel;

import { PlacesObject } from "@/types/DataProps";

export const setTripRange = (range: number) => {
  const newSelectedPlaces: PlacesObject = {};

  for (let date = 1; date <= range; date++) {
    newSelectedPlaces[date] = [];
  }

  return newSelectedPlaces;
};

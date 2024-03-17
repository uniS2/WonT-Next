import { useTripPlanArray } from "@/store/useTripPlanArrayStore";
import { PlaceDataType } from "@/types/DataProps";

export function getSelectedArray(arr: PlaceDataType[][]) {
  // const { placeArray, setPlaceArray } = useTripPlanArray();
  const placeArray = [];

  for (let i = 0; i < arr.length; i++) {
    const innerArr = arr[i];

    for (let j = 0; j < innerArr.length; j++) {
      // let placeArray = [];
      const place = innerArr[j];
      // placeArray.push((prevArray: any) => [...prevArray, place]);
      placeArray.push(place);
    }
  }
  return placeArray;
}

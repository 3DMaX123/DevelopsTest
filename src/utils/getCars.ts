import {ICars, ICertainCar} from "@/types/constant/cars";

const parseString = require("xml2js").parseString;


export const getAllCars = async () => {
  try {
    const cars = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car");

    const test = await cars.text();
    let carsResult: ICars[] = [];
    parseString(test, function(err: any, result : any) {
      carsResult = result["Response"]["Results"][0]["VehicleTypesMakes"];
    });

    return carsResult;
  } catch (err: any) {
    return [];
  }
};


export const getCertainCar = async (makeId: string, year: string) => {
  try {
    const cars = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}`);

    const test = await cars.text();
    let carsResult: ICertainCar[] = [];
    parseString(test, function(err: any, result : any) {
      carsResult = result["Response"]["Results"][0]["MakeModels"];
    });

    return carsResult;
  } catch (err: any) {
    return [];
  }
};

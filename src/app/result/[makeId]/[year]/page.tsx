import {listOfYears} from "@/utils/year";
import {ICars} from "@/types/constant/cars";
import {getAllCars, getCertainCar} from "@ut/getCars";
import React from "react";


/**
 * Will static generate all possible variants of this page
 * @return {Array}
 */
export async function generateStaticParams() {
  const products = await getAllCars();

  return products.flatMap((car: ICars) =>
    listOfYears.map((year) => ({
      makeId: car.MakeId.toString(),
      year: year,
    }))
  );
}

const Page = async ({params}: { params: { makeId: string, year: string } }) => {
  const {makeId, year} = await params;
  const certainCar = await getCertainCar(makeId, year);

  return (
    <div className="flex gap-4 flex-col mt-8">
      {certainCar ?
       (await certainCar).map((prod, _) => (
         <div key={_} className="mr-8 flex gap-8 border-2 border-red-600 border-solid p-5">
           <p>Make_ID: <b>{prod.Make_ID}</b></p>
           <p>Make_Name: <b>{prod.Make_Name}</b></p>
           <p>Model_ID: <b>{prod.Model_ID}</b></p>
           <p>Model_Name: <b>{prod.Model_Name}</b></p>
         </div>
       )) :
      <p>No data was found</p>
      }
    </div>
  );
};

export default Page;

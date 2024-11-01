"use client";

import React, {Suspense, useEffect, useState} from "react";
import DropDownMenu from "@/ui/DropDownMenu";
import {getAllCars} from "@ut/getCars";
import {listOfYears} from "@/utils/year";
import {CAR_PARAM, YEAR_PARAM} from "@c/params";
import {useRouter, useSearchParams} from "next/navigation";
import {convertToParams} from "@ut/param";
import {ICars} from "@/types/constant/cars";
import {findCar} from "@ut/findCar";


const Menus = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [carsArray, setCarsArray] = useState<ICars[]>([]);
  const currentCar = findCar<ICars>(carsArray, "MakeId", searchParam.get(CAR_PARAM) || "", "", "MakeName");
  const currentYear = searchParam.get(YEAR_PARAM);


  useEffect(() => {
    const fetchData = async () => {
      const cars = await getAllCars();

      setCarsArray(cars);
    };

    fetchData();
  }, []);

  const changeCar = (car: string) => {
    const getCarParams = convertToParams(
        CAR_PARAM,
        findCar<ICars>(carsArray, "MakeName", car, car, "MakeId"),
        searchParam
    );

    router.push(`?${getCarParams}`, {scroll: false});
  };

  const changeYear = (year: string) => {
    const getYearParams = convertToParams(YEAR_PARAM, year, searchParam);

    router.push(`?${getYearParams}`, {scroll: false});
  };


  return (
    <div className="flex gap-20 ml-4 mt-4">
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <DropDownMenu
          current={currentCar.toString()}
          defaultValue={"Choose a car"}
          action={changeCar}
          list={carsArray?.map((v: ICars) => v.MakeName) || [""]}
          uniqueClassName="max-h-96 overflow-auto bg-gray-300 flex gap-3 flex-col items-center"
        />
      </Suspense>
      <DropDownMenu
        current={currentYear}
        defaultValue={"Choose a year"}
        action={changeYear}
        list={listOfYears}
        uniqueClassName="max-h-96 min-w-24 overflow-auto bg-gray-300 flex gap-3 flex-col items-center"
      />
    </div>
  );
};

export default Menus;

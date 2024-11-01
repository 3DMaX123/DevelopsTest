"use client";

import Menus from "@/components/Menus";
import React from "react";
import {useSearchParams} from "next/navigation";
import {CAR_PARAM, YEAR_PARAM} from "@c/params";

/**
 * Main componet
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  const searchParam = useSearchParams();
  const currentCar = searchParam.get(CAR_PARAM);
  const currentYear = searchParam.get(YEAR_PARAM);

  return (
    <>
      <Menus />

      <a
        className={`block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mt-9 ${!currentCar && !currentYear ? "pointer-events-none" : "pointer-events-auto"}`}
        href={`/result/${currentCar}/${currentYear}`}>Go to car page</a>
    </>
  );
}

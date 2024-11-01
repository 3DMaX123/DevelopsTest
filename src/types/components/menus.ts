import {Dispatch, SetStateAction} from "react";

export interface IMenus{
    carModel: string;
    yearProd: string;
    setCarModel: Dispatch<SetStateAction<string>>;
    setyearProd: Dispatch<SetStateAction<string>>;
}

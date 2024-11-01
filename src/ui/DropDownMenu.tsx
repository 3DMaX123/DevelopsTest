"use client";

import {IDropDownMenu} from "@t/drop-down-menu";
import React, {useState} from "react";

/**
 * Return drop down menu for choosing an option
 * @param {current} current is a current text, that will be displayed
 * when drow down menu is closed
 * @param {defaultValue} defaultValue value that would be displayed if {current}
 * is equal to null or undefined
 * @param {action} action is the function that will triggers after user
 * will choose value in list
 * @param {list} list that will be displayed in drop down menu
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const Menu = ({current, defaultValue, action, list, uniqueClassName}
    : IDropDownMenu<string>): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sendVariant = (text: string) => {
    action(text);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}>
        <span>{current ? current : defaultValue}</span>
      </div>
      {isOpen &&
              <div>
                <ul className={uniqueClassName}>
                  {list.map((car, _) => {
                    if (current !== car) {
                      return (
                        <li key={_}>
                          <span
                            onClick={() => sendVariant(car)}>
                            {car}
                          </span>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
      }
    </>
  );
};

export default Menu;

import {ReadonlyURLSearchParams} from "next/navigation";

/**
 * Converts name and value to params syntax
 * @param {name} name is the key of its param
 * @param {value} value is the value of param
 * @param {searchParams} searchParams is a Client Component hook that
 *  lets you read the current URL's query string.
 * @return {string} that converted to param
 */
export const convertToParams = (name: string, value: number | string,
    searchParams: ReadonlyURLSearchParams): string => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value.toString());
  return params.toString();
};

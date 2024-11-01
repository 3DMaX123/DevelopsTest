const currenYear = new Date().getFullYear();
const startYear= 2015;

/**
 * Automatically generated list of years from 2015 to current year
 */
export const listOfYears =Array.from(
    {length: currenYear - startYear + 1},
    (_, i) => (i + startYear).toString()
);

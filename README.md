This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## EXPLENATION:
- Some why env doesn't work and I decided not to waste time on it
- There is `Hydration failed` error, i know what this is and i know why it could be BUT, again, i do not know why this error keep appearing, bucause even when i clean all project and leave naked(hah, i know) `body` without anything in it this error still keeps appearing so as with the previous one I decided not to waste time on it
- I did not always follow the rules of writing the code, because it would only take time, BUT to show that I understand how it should work, you can find variants of the correct writing, for example: in most elements, the types are allocated in a separate file, but sometimes, I defined the types at once, so my code may be inconsistent and i know that and this was done specifically to save time

## Description of the program

The Car Dealer application is designed to filter and view cars by make and model. The application was created using Next.js. The user interface has a home page that serves as a filter page, styled using Tailwind CSS. On this page, users can interact with two drop-down selectors, one for vehicle makes and one for model years from 2015 to the current year.

The Next button takes the user to the results page with the structure result/[makeId]/[year]. The results page uses the generateStaticParams function to pre-render the paths based on the selected brand and year, ensuring fast and efficient loading.

To enhance usability, the app includes React's Suspense component to efficiently manage download states, keeping users informed during data retrieval processes. The application also includes error handling mechanisms to provide feedback when data cannot be retrieved or if no results are found.

The program uses ESLint and Prettier to maintain code quality and consistency. A comprehensive README file is included to help users build, run, and navigate the program, along with documentation on its features.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

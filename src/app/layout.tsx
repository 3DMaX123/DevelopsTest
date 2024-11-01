import "./globals.css";

/**
 *  A root layout that will handle whole website
  * @param {children} children will be current page
  * that with component value
 * @return {JSX.Element}
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

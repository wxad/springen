// @ts-ignore
import { getPageMap } from 'nextra/page-map';
import './globals.css';
import PageWrapper from './PageWrapper';

export const metadata = {
  title: {
    absolute: "Springen - Tabs and toggles that ‘jump’ between content sections",
    template: '%s - Springen',
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="icon"
          href="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/rytl8d2o_8f354f8f.png"
          type="image/x-icon"
        />
        <meta name="description" content="Springen - Tabs and toggles that ‘jump’ between content sections" />
      </head>
      <body>
        <PageWrapper pageMap={pageMap} children={children} />
      </body>
    </html>
  );
}

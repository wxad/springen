import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Installation from '../components/Installation/index';
import Footer from '../components/Footer';

const components = [
  {
    name: 'Tabs',
    image: (
      <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-40">
        <path
          fill="currentColor"
          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-7H5zm0-9h14V5H5zm7-2h6V6h-6zm-7 2V5z"
        />
      </svg>
    ),
    href: '/tabs',
  },
  {
    name: 'ButtonGroup',
    image: (
      <svg width="22" height="22" viewBox="0 0 1024 1024" fill="none" className="opacity-40">
        <path
          d="M32 352V672C32 692.347 35.744 711.979 43.232 730.896C51.3653 751.435 63.2427 769.515 78.864 785.136C94.4853 800.763 112.565 812.64 133.104 820.768C152.021 828.256 171.653 832 192 832H616C636.347 832 655.979 828.256 674.896 820.768C695.435 812.635 713.515 800.757 729.136 785.136C744.763 769.515 756.64 751.435 764.768 730.896C772.256 711.979 776 692.347 776 672V352C776 331.653 772.256 312.021 764.768 293.104C756.635 272.565 744.757 254.485 729.136 238.864C713.515 223.237 695.435 211.36 674.896 203.232C655.979 195.744 636.347 192 616 192H192C171.653 192 152.021 195.744 133.104 203.232C112.565 211.365 94.4853 223.243 78.864 238.864C63.2373 254.485 51.36 272.565 43.232 293.104C35.744 312.021 32 331.653 32 352ZM748.944 832H832C852.347 832 871.979 828.256 890.896 820.768C911.435 812.635 929.515 800.757 945.136 785.136C960.757 769.515 972.635 751.435 980.768 730.896C988.256 711.979 992 692.347 992 672V352C992 331.653 988.256 312.021 980.768 293.104C972.635 272.565 960.757 254.485 945.136 238.864C929.515 223.237 911.435 211.36 890.896 203.232C871.979 195.744 852.347 192 832 192H748.944C753.813 196.064 758.525 200.371 763.08 204.92C778.307 220.147 790.797 237.173 800.552 256H832C844.208 256 855.987 258.248 867.336 262.744C879.661 267.619 890.509 274.744 899.88 284.12C909.256 293.491 916.381 304.339 921.256 316.664C925.752 328.008 928 339.787 928 352V672C928 684.208 925.752 695.987 921.256 707.336C916.381 719.656 909.256 730.504 899.88 739.88C890.509 749.256 879.661 756.381 867.336 761.256C855.987 765.752 844.208 768 832 768H800.552C790.797 786.827 778.307 803.853 763.08 819.08C758.525 823.629 753.813 827.936 748.944 832ZM102.744 707.336C98.248 695.992 96 684.213 96 672V352C96 339.792 98.248 328.013 102.744 316.664C107.619 304.344 114.744 293.496 124.12 284.12C133.491 274.744 144.339 267.619 156.664 262.744C168.008 258.248 179.787 256 192 256H616C628.208 256 639.987 258.248 651.336 262.744C663.656 267.619 674.504 274.744 683.88 284.12C693.256 293.491 700.381 304.339 705.256 316.664C709.752 328.008 712 339.787 712 352V672C712 684.208 709.752 695.987 705.256 707.336C700.381 719.656 693.256 730.504 683.88 739.88C674.509 749.256 663.661 756.381 651.336 761.256C639.992 765.752 628.213 768 616 768H192C179.792 768 168.013 765.752 156.664 761.256C144.344 756.381 133.496 749.256 124.12 739.88C114.744 730.509 107.619 719.661 102.744 707.336Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: '/button-group',
  },
  {
    name: 'Vertical',
    image: (
      <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-40">
        <path
          fill="currentColor"
          d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
        />
      </svg>
    ),
    href: '/vertical',
  },
  {
    name: 'Divider',
    image: (
      <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-40">
        <path fill="currentColor" d="M13 2v20h-2V2zM2 5h7v14H2zm2 2v10h3V7zm11-2h7v14h-7zm2 2v10h3V7z" />
      </svg>
    ),
    href: '/divider',
  },
  {
    name: 'Tag',
    image: (
      <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-40">
        <path
          fill="currentColor"
          d="m21 12l-4.35 6.15q-.275.4-.712.625T15 19H5q-.825 0-1.413-.588T3 17V7q0-.825.588-1.413T5 5h10q.5 0 .938.225t.712.625L21 12Zm-2.45 0L15 7H5v10h10l3.55-5ZM5 12v5V7v5Zm5.525 4l1.25-2.75l2.75-1.25l-2.75-1.25L10.525 8l-1.25 2.75L6.525 12l2.75 1.25l1.25 2.75Z"
        />
      </svg>
    ),
    href: '/tag',
  },
  {
    name: 'Pagination',
    image: (
      <svg width="22" height="22" viewBox="0 0 25 24" className="opacity-40">
        <path
          fill="currentColor"
          d="M2.72 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L4.31 12l3.47-3.47a.75.75 0 1 0-1.06-1.06zm19.56 1.06a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L20.69 12l-3.47 3.47a.75.75 0 1 0 1.06 1.06z"
        />
        <path
          fill="currentColor"
          d="M8.5 11.1a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m3.1.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4 0a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0"
        />
      </svg>
    ),
    href: '/pagination',
  },
  {
    name: 'HoverFill',
    image: (
      <svg width="22" height="22" viewBox="0 0 20 20" className="opacity-40">
        <path
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          fill="currentColor"
          d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-1.164 1.818a1.5 1.5 0 0 0-.275-.379l-.446-.446A1 1 0 0 0 17 13V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5v1H4a2 2 0 0 1-2-2zm8.854 4.147A.5.5 0 0 0 10 10.5v7a.5.5 0 0 0 .91.287l1.571-2.245l2.943.452a.5.5 0 0 0 .43-.848zM11 15.914v-4.207l3.066 3.067l-1.74-.268a.5.5 0 0 0-.486.207z"
        />
      </svg>
    ),
    href: '/hover-fill',
  },
];

export default function Home() {
  return (
    <div className="relative h-screen overflow-auto scrollbar-custom bg-white">
      <Header />
      <div className="wrapper">
        <div className="container content">
          <div>
            <div>
              <h2 className="font-semibold">Springen - Tabs and toggles that ‘jump’ between content sections</h2>
              <p>
                A design system concept (from German 'springen' meaning 'jump') describing lightweight components that
                provide smooth navigation when transitioning.
              </p>
              <p>This family includes:</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {components.map((component) => (
                <Link
                  key={component.name}
                  href={component.href}
                  className="group relative rounded-md px-2 py-8 scrollbar-custom cursor-pointer bg-neutral-50 border border-solid border-neutral-100 hover:bg-neutral-100 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex flex-col items-center justify-center gap-2 group-hover:scale-105 transition-all duration-300">
                    <div className="grayscale">{component.image}</div>
                    <div className="text-sm font-medium">{component.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Installation />
        </div>
      </div>
      <Footer />
    </div>
  );
}

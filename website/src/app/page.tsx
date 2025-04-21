import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Installation from '../components/Installation/index';
import Footer from '../components/Footer';

const components = [
  {
    name: 'Vertical',
    image: (
      <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="opacity-40">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.64948 1.93313C1.49897 1.94885 1.35304 1.99407 1.22001 2.06621C1.08698 2.13836 0.969476 2.236 0.874197 2.35356C0.778918 2.47113 0.707735 2.60632 0.664716 2.7514C0.621698 2.89649 0.607685 3.04862 0.623479 3.19913L1.22548 8.92813C1.24126 9.07864 1.28655 9.22456 1.35875 9.35757C1.43095 9.49057 1.52864 9.60804 1.64626 9.70328C1.76387 9.79851 1.8991 9.86964 2.04421 9.91259C2.18932 9.95555 2.34148 9.96949 2.49198 9.95363L4.54298 9.73812L6.27498 11.1406C6.39848 11.2406 6.57998 11.2216 6.67998 11.0981L8.08248 9.36613L10.226 9.14113C10.3765 9.12534 10.5224 9.08006 10.6554 9.00786C10.7884 8.93566 10.9059 8.83796 11.0011 8.72035C11.0964 8.60273 11.1675 8.46751 11.2104 8.32239C11.2534 8.17728 11.2673 8.02513 11.2515 7.87463L10.65 2.14563C10.6343 1.99507 10.589 1.84909 10.5168 1.71603C10.4447 1.58297 10.347 1.46544 10.2294 1.37015C10.1117 1.27486 9.97649 1.20369 9.83135 1.16071C9.68621 1.11772 9.53402 1.10376 9.38348 1.11963L1.64948 1.93313Z"
          fill="#6A6F7F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.73137 4.28474C5.45487 4.31374 5.25487 4.56824 5.28487 4.85274C5.31487 5.13774 5.11487 5.39224 4.83737 5.42124C4.56087 5.45024 4.31237 5.24324 4.28237 4.95824C4.19237 4.10424 4.79237 3.34074 5.62337 3.25324C6.45387 3.16624 7.19987 3.78824 7.28987 4.64224C7.33587 5.07974 7.15737 5.43424 6.99787 5.66774C6.92493 5.77265 6.84544 5.87285 6.75987 5.96774L6.68237 6.05424C6.66128 6.0769 6.64094 6.10024 6.62137 6.12424L6.32337 6.50224C6.28254 6.55482 6.2315 6.59861 6.17333 6.631C6.11516 6.66338 6.05105 6.68368 5.98484 6.69068C5.91863 6.69768 5.85169 6.69125 5.78803 6.67175C5.72437 6.65226 5.66531 6.62011 5.61437 6.57724C5.5098 6.48911 5.44342 6.36391 5.42916 6.2279C5.4149 6.09189 5.45386 5.95564 5.53787 5.84774L5.83587 5.46924C5.87287 5.42224 5.92837 5.36074 5.97287 5.31124L6.01287 5.26624C6.07137 5.20074 6.12537 5.13574 6.17187 5.06824C6.26837 4.92724 6.29537 4.82574 6.28687 4.74774C6.25687 4.46274 6.00887 4.25574 5.73187 4.28474H5.73137Z"
          fill="white"
        />
        <path
          d="M6.08933 8.17563C6.41889 8.14099 6.65797 7.84576 6.62333 7.5162C6.58869 7.18665 6.29346 6.94757 5.9639 6.9822C5.63434 7.01684 5.39527 7.31208 5.4299 7.64163C5.46454 7.97119 5.75978 8.21027 6.08933 8.17563Z"
          fill="white"
        />
      </svg>
    ),
    href: '/vertical',
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
            <div className="grid grid-cols-2 gap-4">
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

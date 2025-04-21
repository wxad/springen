// @ts-nocheck

import { PageMapItem } from 'nextra';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = (props: { pageMap: PageMapItem[] }) => {
  const { pageMap } = props;
  const pathname = usePathname();

  const navs = pageMap.filter((item) => !!item.items);

  return (
    <nav className="pt-5 pb-4 dotted dotted-right bg-neutral-50 sticky top-0 h-screen hidden w-[240px] lg:flex flex-col">
      <div className="flex flex-col px-4">
        <div className="flex justify-between items-center pb-3.5 dotted-bottom">
          <Link className="flex items-center gap-2" href="/">
            <svg className="rotate-90" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.06 8.94L5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10"
              />
            </svg>
            <span className="font-medium inline-block text-primary">Springen</span>
          </Link>
          <span className="inline-block text-xs text-neutral-600 relative top-[1.5px]">
            <a href="https://wxad.design" target="_blank">
              wxad.design
            </a>
          </span>
        </div>
      </div>
      <div className="grow overflow-y-auto pt-5 px-5">
        {navs.map((item, i) => {
          return (
            <div key={item.name}>
              <div className="text-xs text-neutral-400 font-medium inline-block mb-2 not-first:mt-4">{item.title}</div>
              <ul className="space-y-1">
                {Object.entries(item.items).map(([key, value]) => {
                  return (
                    <li key={key}>
                      <Link
                        href={value.href}
                        className="h-7 flex items-center font-medium text-[13px] text-neutral-600 px-2 -ml-2 hover:bg-el-hover-bg rounded-md data-[active=true]:bg-neutral-200 data-[active=true]:text-neutral-900 w-[calc(100%+15px)]"
                        data-active={value.href === pathname}
                      >
                        {value.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {i !== navs.length - 1 && (
                <div aria-hidden="true" className="h-px w-[90%] mx-auto dotted-bottom pb-5 mb-5" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

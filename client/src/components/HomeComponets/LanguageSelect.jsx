import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import i18next from "i18next";
import { Fragment } from "react";
import {
    GrLanguage
  } from "react-icons/gr";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "hi",
    name: "Hindi",
    country_code: "hi",
  },
];

export default function LanguageSelect() {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md  text-base font-medium text-white hover:text-opacity-100
                 focus:outline-none focus-visible:ring-2  focus-visible:ring-opacity-75`}
            >
              <span><GrLanguage/></span>
             
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                
                    {languages.map(({ code, name, country_code }) => (
                      <a
                        key={country_code}
                        className="-m-3 flex items-center rounded-lg  transition duration-150 ease-in-out
                         focus:outline-none focus-visible:ring focus-visible:ring-orange-500
                          focus-visible:ring-opacity-50 hover:bg-amber-400"
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            i18next.changeLanguage(code);
                          }}
                        >
                          <p className="text-sm font-medium text-gray-900 ml-1 text-center">
                            {name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                  
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

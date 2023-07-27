import { Dialog, Transition } from "@headlessui/react";
import { ShareIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function ShareComp() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const shareUrls = "https://itsoffical.cyclic.app";

  return (
    <>
      <div className="flex items-center justify-center">
        <ShareIcon
          onClick={openModal}
          className="h-6 w-6 text-red-500 cursor-pointer z-10"
        />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Share
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex justify-start space-x-3">
                      <FacebookShareButton url={shareUrls}>
                        <FacebookIcon className=" rounded-full" />
                      </FacebookShareButton>
                      <TwitterShareButton url={shareUrls}>
                        <TwitterIcon className=" rounded-full" />
                      </TwitterShareButton>
                      <LinkedinShareButton url={shareUrls}>
                        <LinkedinIcon className=" rounded-full" />
                      </LinkedinShareButton>
                      <WhatsappShareButton url={shareUrls}>
                        <WhatsappIcon className=" rounded-full" />
                      </WhatsappShareButton>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-end">
                      <button
                        onClick={closeModal}
                        className="bg-red-400 w-32 text-white font-semibold 
                      rounded-3xl hover:bg-slate-300 hover:text-black"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

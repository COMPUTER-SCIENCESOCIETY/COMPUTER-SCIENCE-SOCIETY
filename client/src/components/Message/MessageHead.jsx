import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React, { Fragment, useState } from "react";

export default function MessageHead({ item }) {
  let [isOpen, setIsOpen] = useState(false);

  console.log(item);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  let Dateyear = new Date().toJSON().slice(0, 4);
  return (
    <>
      <div className="flex items-center justify-center">
        <div class="relative z-10">
          <EnvelopeIcon
            onClick={openModal}
            className="h-6 w-6  text-red-500 cursor-pointer"
          />
          <span class="top-0 left-4 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
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
                <Dialog.Panel className="w-full max-w-xl mb-20 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-3"
                  >
                    <div className="flex justify-between">
                      <div className=" underline underline-offset-2">Special Message From ITS Team</div>
                      <div className=" cursor-pointer" onClick={closeModal}>
                        ❌
                      </div>
                    </div>
                  </Dialog.Title>
                  <div>
                    <p>
                      Happy birthday, {item.NAME}! 🎉🎂🎈
                      <br />
                      <br />
                      Today, we celebrate another incredible year of your life
                      as you turn {Dateyear - item.dob?.slice(0, 4)} Years. It's a
                      special milestone that reminds us of the amazing person
                      you have become.
                      <br />
                      <br />
                      You are an extraordinary friend,
                      {Dateyear - item.dob?.slice(0, 4)} Years . Your friendship
                      has brought so much joy and meaning to my life. Through
                      the ups and downs, you have been there, offering support,
                      laughter, and genuine companionship. Your presence is a
                      true blessing.
                      <br />
                      As you embark on this new chapter, I wish you endless
                      happiness, good health, and success in all your endeavors.
                      May your dreams continue to unfold and lead you to new and
                      exciting opportunities. Have the courage to chase your
                      passions and the determination to overcome any obstacles
                      that may come your way.
                      <br />
                      <br />
                      On this special day, take a moment to reflect on all the
                      beautiful memories we've shared and the adventures that
                      lie ahead. Cherish the friendships and connections that
                      have shaped you, as we celebrate your unique journey and
                      the remarkable person you are.
                      <br />
                      <br />
                      Happy {Dateyear - item.dob?.slice(0, 4)} Year birthday,{" "}
                      {item.NAME}! 🎉🎁🎊 May this day be filled with love,
                      laughter, and wonderful surprises. Enjoy every moment,
                      surrounded by the warmth of family and friends.
                      <br />
                      <br />
                      With lots of love and warm wishes,
                      <br />
                      <br />
                      <p className=" font-semibold">ITS TEAM</p>
                    </p>
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

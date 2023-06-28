import { Dialog, Transition } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar-edit";
import React, { Fragment, useState } from "react";

export default function UpSportMember({ item, mutate }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [src, setSrc] = useState();
  const [preview, setPreview] = useState();

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const [datas, setDatas] = React.useState({
    NAME: item.NAME,
    POST: item.POST,
    YEAR: item.YEAR,
    image: item.image,
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setDatas((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const postUpdated = async (updateId) => {
    const { NAME, POST, YEAR, image } = datas;
    const res2 = await fetch(`/api/creativemember/sportup/${updateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NAME,
        POST,
        YEAR,
        image: preview,
      }),
    });
    const data2 = await res2.json();
    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("Data updated successfully");
    }
    mutate();
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <PencilSquareIcon
          onClick={openModal}
          className="h-6 w-6 text-blue-500 cursor-pointer"
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
                    Profile Update
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex justify-between">
                      <div>
                        {preview ? (
                          preview && (
                            <img
                              src={preview}
                              className="h-48 w-48 rounded-full"
                            />
                          )
                        ) : (
                          <img
                            src={item.image}
                            className="h-48 w-48 rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <Avatar
                          width={200}
                          height={200}
                          onCrop={onCrop}
                          onClose={onClose}
                          src={src}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Name{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          onChange={setdata}
                          name="NAME"
                          value={datas.NAME}
                        ></input>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Position{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          onChange={setdata}
                          name="POST"
                          value={datas.POST}
                        ></input>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Year{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="YEAR"
                          value={datas.YEAR}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => postUpdated(item._id)}
                    >
                      Submit
                    </button>
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

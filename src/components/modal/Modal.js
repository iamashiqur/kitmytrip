import Link from "next/link";
import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="absolute top-1/2 left-2/4 -translate-y-2/4 -translate-x-2/4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="h-20 w-20 bg-red-600 rounded-full flex justify-center items-center animation-pulse">
          <svg
            width="82"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="41" cy="41" r="41" fill="#DB105B" />
            <path
              d="M48.0894 42.6061C49.0911 41.8054 49.0911 40.2823 48.0894 39.4816L39.9056 32.94C38.596 31.8931 36.6569 32.8256 36.6569 34.5022V47.5855C36.6569 49.2621 38.596 50.1946 39.9056 49.1477L48.0894 42.6061Z"
              fill="white"
            />
          </svg>
        </div>
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font=semibold">Demo</h3>

                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <Link
                    href={
                      "https://youtube.com/watch?v=3SsK-cxlj_w&si=EnSIkaIECMiOmarE"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

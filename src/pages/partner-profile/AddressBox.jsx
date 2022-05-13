import React from "react";

const AddressBox = (Props) => {
  return (
    <>
      <div className="box-content  w-full p-2 bg-white rounded-lg mt-16">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 p-2 m-4">Address</h2>
        <div className="grid  md:grid-cols-4 gap-2 ">
          <div className="  h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              FirstLine{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              A-Block, Mahabalipuram
            </p>
          </div>
          {/* scondLine */}
          <div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              SecondLine{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            AeroCity
            </p>
          </div>
          <div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              city{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            New Delhi
            </p>
          </div>
          <div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              state{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Delhi
            </p>
          </div>
          <div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              pin{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            110048
            </p>
          </div><div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              country{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            India
            </p>
          </div><div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              railway{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Nizamuddin Railway Station
            </p>
          </div><div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              airport{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            IGI Airport
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressBox;

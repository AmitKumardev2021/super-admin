import React from "react";
import InfoCard from "../../components/Cards/InfoCard";

const OtherDetails = () => {
  return (
    <>
      <div className="box-content  w-full p-2 border-2 rounded-lg mt-3 bg-white">
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 p-2 ml-4">Location</h2>
      <div className="grid  md:grid-cols-4 gap-2 ">
      <div className=" border-2 h-14 w-fit rounded-md flex flex-col justify-center items-center text-center bg-white">
            <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
              {" "}
              Location{" "}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              blank
            </p>
          </div>
      </div>
      </div>
    </>
  );
};

export default OtherDetails;

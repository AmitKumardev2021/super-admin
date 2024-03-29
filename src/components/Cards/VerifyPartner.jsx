import React from "react";

const VerifyPartner = () => {
  return (
    <div className="flex justify-center m-4">
      <div className=" w-11/12 rounded-lg border-gray-400 border-2 lg:max-w-full lg:flex">
        <div
          className="m-1 w-11/12 h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cool-gray-900 text-white"
        >image</div>
        <div className=" w-5/6  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
          <div className="mb-2 flex justify-between">
            <div className="text-gray-900 font-bold text-3xl ml-8">
              Partner Name
            </div>
            <div>
              <button className="bg-red-700 p-2 w-24 border-3 border-black text-black mr-4 font-bold text-xl">
                Delete
              </button>{" "}
              <button className="bg-green-300 p-2 w-24 text-black text-xl font-bold">
                Verify
              </button>
            </div>
          </div>
          <div className="flex justify-around ">
            <div className="w-10/12">
            {/* textarea */}
              <textarea
                type="text"
                
                className=" h-32 w-5/6 ml-2 border-2 rounded-lg resize-none"
                placeholder="Addres or Location"
                
              />
            </div>
            <div className="mt-20">
              <button className="bg-blue-500 p-2 px-26 w-40 mr-4 text-black text-xl font-bold">
                View Profile
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-3 ml-3">
          <button className="bg-gray-400 p-2 px-4 w-38 mr-4 text-black text-xl font-bold">
                View Policy
              </button>  <button className="bg-gray-400 p-1 px-4 w-38 mr-4 text-black text-xl font-bold">
                View Pan Card
              </button>  <button className="bg-gray-400 p-1 px-4 w-38 mr-4 text-black text-xl font-bold">
                View GST No.
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPartner;

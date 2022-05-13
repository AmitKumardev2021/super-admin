import React from "react";

const ImageBox = () => {
  return (
    <>
      <div className="box-content h-full w-full p-2  mt-3 mb-8 bg-white">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 p-2 ml-4">
          Hotel Image
        </h2>
        <div className="grid  md:grid-cols-3 gap-2 mx-4">
          <div className="shadow-md w-full flex flex-col bg-gray-100">
            <img
            className="w-full"
              src="https://res.cloudinary.com/travel-ustad/image/upload/v1650628534/wukcgd2sicafoutktowf.webp"
              alt=""
              srcset=""
            />
            </div> <div className="shadow-md w-full flex flex-col bg-gray-100">
            <img
            className="w-full"
              src="https://res.cloudinary.com/travel-ustad/image/upload/v1650628534/wukcgd2sicafoutktowf.webp"
              alt=""
              srcset=""
            />
            </div> <div className="shadow-md w-full flex flex-col bg-gray-100">
            <img
            className="w-full"
              src="https://res.cloudinary.com/travel-ustad/image/upload/v1650628534/wukcgd2sicafoutktowf.webp"
              alt=""
              srcset=""
            />
            </div>
            
          </div>
        </div>
    
    </>
  );
};

export default ImageBox;

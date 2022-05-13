import React from "react";
import AddressBox from "./partner-profile/AddressBox";
import ImageBox from "./partner-profile/ImageBox";
import Navbar from "./partner-profile/NavBar";
import OtherDetails from "./partner-profile/OtherDetails";


//create an ckeditor instance
export default (props) => {
 
  return (
    <>
    <Navbar/>
    <ImageBox/>
    <AddressBox/>
    <OtherDetails/>
    </>
  );
};

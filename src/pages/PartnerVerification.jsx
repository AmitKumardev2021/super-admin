import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PageTitle from "../components/Typography/PageTitle";
import VerifyPartner from "../components/Cards/VerifyPartner";

//create an ckeditor instance
export default (props) => {
  return (
    <>
      <PageTitle>Partner Verification</PageTitle>
      <VerifyPartner/>
      <VerifyPartner/>
      <VerifyPartner/>
    </>
  );
};

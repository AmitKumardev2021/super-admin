import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PageTitle from "../components/Typography/PageTitle";

//create an ckeditor instance
export default (props) => {
  return (
    <>
      <PageTitle>Blogs</PageTitle>
      <div className="mt-5 w-full min-w-64 mx-auto">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            props.setArticle(data);
          }}
        />
      </div>
    </>
  );
};

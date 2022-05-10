import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//create an ckeditor instance
export default (props) => {
  return (
    <div className="">
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          props.setArticle(data);
        }}
      />
    </div>
  );
};

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//create an ckeditor instance
export default Heritage = (props: any) => {
  return (
    <div className="">
      <CKEditor
        editor={ClassicEditor}

        data="<p>Hello from CKEditor 5!</p>"
        onChange={(event: any, editor: { getData: () => any }) => {
          const data = editor.getData();
          props.setArticle(data);
        }}
      />
    </div>
  );
};

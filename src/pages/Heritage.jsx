import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PageTitle from "../components/Typography/PageTitle";
import { DropdownIcon } from "../icons";
import { Transition } from "@windmill/react-ui";
import { Link } from "react-router-dom";

//create an ckeditor instance
export default (props) => {
 
  return (
    <>
      <PageTitle>Heritage Add</PageTitle>
      {/* drop down menu start from here */}
      
      <li className="list-none">
        <button
          className="inline-flex items-center justify-between w-32 text-sm font-semibold box-border rounded-md transition-colors border-2 border-black  text-gray-700 dark:text-gray-200 text-white duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          // onClick={handleDropdownMenuClick}
          // aria-haspopup="true"
        >
          <span className="inline-flex items-center">
            {/* <Icon className="w-5 h-5" aria-hidden="true" icon={DropdownIcon} /> */}
            <span className="ml-1">{"Select city"}</span>
          </span>
          <DropdownIcon className="w-4 h-4" aria-hidden="true" />
        </button>

        <Transition
          // show={isDropdownMenuOpen}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-25 max-h-0"
          enterTo="opacity-100 max-h-xl"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="opacity-100 max-h-xl"
          leaveTo="opacity-0 max-h-0"
        >
          <ul
            className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium  text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
          >
            {/* {route.routes.map((r) => ( */}
            <li
              className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              // key={r.name}
            >
              {/* <Link className="w-full" to={r.path}>
                {r.name}
              </Link> */}
            </li>
            {/* ))} */}
          </ul>
        </Transition>
      </li>

      {/* ck Editor start from here */}
     <div className="min-w-48 mt-20 h-32">

      <div>
        <CKEditor
         editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            props.setArticle(data);
          }}
          
        />
      </div>
     </div>
     
   <button className="p-2 mt-2 space-y-2 w-32 mx-auto mt-10 border-2 border-black overflow-hidden text-sm font-medium text-black rounded-md shadow-inner dark:text-gray-300 dark:bg-gray-900">Create Heritage</button>

    </>
  );
};

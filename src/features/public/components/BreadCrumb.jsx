// import React from "react";
// import { HiChevronRight, HiHome, HiMiniHome } from "react-icons/hi2";
// import { LuChevronLeft, LuChevronRight, LuHome } from "react-icons/lu";
// import { Link, useNavigate } from "react-router-dom";
// import Container from "../../../components/Container";

// const BreadCrumb = ({ currentPageTitle, links }) => {

//   const navigate = useNavigate();

//   return (
//     <>
//     <Container>
//     <div className=" w-full flex items-center justify-between gap-3 mb-3 py-5">
//       <nav className="flex" aria-label="Breadcrumb">
//         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//           <li className="inline-flex  items-center">
//             <Link
//               to="/dashboard"
//               className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
//             >
//               <LuHome />
//               Home
//             </Link>
//           </li>

//           {/* {links &&
//             links.map((link, index) => (
//               <li key={index} className="inline-flex  items-center">
//                 <Link
//                   to={link.path}
//                   className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
//                 >
//                   <LuChevronRight />
//                   {link.title}
//                 </Link>
//               </li>
//             ))} */}

//           <li aria-current="page">
//             <div className="flex items-center">
//               <HiChevronRight />
//               <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
//                 {currentPageTitle}
//               </span>
//             </div>
//           </li>
//         </ol>
//       </nav>
//       {/* <div className=" flex items-center">
//       <button
//           type="button"
//           onClick={() => navigate(-1)}
//           className=" size-7 flex justify-center items-center text-sm font-medium bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
//         >
//           <LuChevronLeft />
//         </button>
//         <button
//           type="button"
//           onClick={() => navigate(1)}
//           className=" size-7 flex justify-center items-center text-sm font-medium bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
//         >
//           <LuChevronRight />
//         </button>
//       </div> */}
//     </div>
//     </Container>
//     </>
//   );
// };

// export default BreadCrumb;
import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className=" py-1 md:py-3 rounded-lg shadow-lg">
      <nav aria-label="Breadcrumb" className="">
        <ol className="flex flex-wrap  justify-center items-end space-x-1 md:space-x-4">
          <li>
            <Link
              to="/"
              className="text-xs md:text-xl font-emerald font-medium text-white transition-transform transform hover:scale-105 hover:text-indigo-100"
            >
              Home
            </Link>
          </li>
          <li className="">
          <HiChevronRight className="text-white text-md text-end md:text-xl mb-0.5" />

          </li>
          <li >
           <span className="text-xs md:text-xl font-emerald font-medium text-white transition-transform transform hover:scale-105 hover:text-indigo-100 ">{currentPageTitle}</span>
          </li>
        </ol> 
      </nav>
    </div>
  );
};

export default BreadCrumb;

import React, { useEffect, useState } from "react";
import { Link, Links, useLocation } from "react-router-dom";
import useHeaderNavStore from "../../../stores/useHeaderNavStore";
import { useHeaderLinkStore } from "../../../stores/useHeaderLinkStore";
import Container from "../../../components/Container";
import BreadCrumb from "./BreadCrumb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";



const Headers = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const { headercontact } = useHeaderLinkStore();
  const { navLinks, activeLink } = useHeaderNavStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle scroll logic
  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  const phoneToogleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenuIcon = () => {
    setIsMenuOpen(false);
  };

  // Function to update the active link based on path
  const updateActiveLink = () => {
    activeLink(location.pathname);
  };

  useEffect(() => {
    // Set up scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update active link when location changes
    updateActiveLink();
  }, [location.pathname]);

  // Find the current header content
  const currentHeaderContent = headercontact.find(
    (item) => item.path === location.pathname
  );

  // Render Navigation Links
  const renderNavLinks = () =>
    navLinks.map((link) => (
      <li key={link.label}>
        <Link
          to={link.path}
          className={`block py-2 pr-4 pl-3 nav-link text-primary-frame font-normal text-xl tracking-wider font-emerald border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
        >
          {link.label}
        </Link>
      </li>
    ));

  return (
    <>
      <div>
        {/* Sticky Header */}
        <nav
          className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 z-10 transition-all duration-500 ${
            sticky
              ? "bg-primary text-white shadow-lg"
              : "bg-transparent text-white"
          }`}
        >
          <Container className={"flex justify-between items-center"}>
            <div className="text-white font-bold italic tracking-wide">
              <Link to="/" className="flex items-center gap-2">
                <span className="font-heading text-4xl logo">Emerald</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className="hidden lg:flex space-x-6 text-lg font-medium">
              {renderNavLinks()}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/booking"
                className={`rounded-lg px-6 py-3 text-lg shadow-md  ${
                  sticky
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={phoneToogleMenu}
                className="text-white focus:ring-2 focus:ring-offset-2 focus:ring-primary menu-icon"
                aria-label="Toggle Navigation"
              >
                <RxHamburgerMenu className="size-8 bg-primary-frame text-primary" />
              </button>
            </div>
          </Container>
        </nav>

        {/* Mobile Navigation Links */}
        {/* {isMenuOpen && (
          <ul className="fixed top-0 right-0  bg-secondary-card text-primary z-10 w-52 pt-16 transition-transform duration-500">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="block text-lg font-medium py-4 px-6 hover:bg-gray-700 hover:text-white rounded transition duration-200"
              >
                <Link
                  className="text-primary"
                  to={link.path}
                  onClick={closeMenuIcon} // Close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )} */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
              onClick={closeMenuIcon}
            />

            {/* Mobile Menu */}
            <ul
              className={`fixed top-0 right-0 bg-secondary-card text-primary z-20 w-64 pt-16 h-full shadow-lg transform transition-transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={closeMenuIcon}
                className="absolute top-4 right-4 text-primary hover:text-red-500 focus:outline-none"
              >
                <IoMdClose className="text-2xl" />
              </button>

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="block text-lg font-medium py-4 px-6 hover:bg-gray-700 hover:text-white flex items-center gap-2 transition duration-200"
                >
                  <RiHotelLine className="text-xl size-6" />

                  
                  <Link
                    className="text-primary"
                    to={link.path}
                    onClick={closeMenuIcon}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Background Section */}
        {currentHeaderContent && currentHeaderContent.bgimage && (
          <div
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${currentHeaderContent.bgimage})`,
              height: "600px",
            }}
          >
            <div className="absolute "></div>
            <div className="absolute bottom-24 lg:bottom-36 text-center w-full flex flex-col items-center space-y-4 px-6">
              {currentHeaderContent.title && (
                <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading drop-shadow-md">
                  {currentHeaderContent.title}
                </h1>
              )}

              {/* Breadcrumb Section */}
              {location.pathname !== "/" && (
                <div className="mt-4">
                  <BreadCrumb
                    currentPageTitle={currentHeaderContent.title}
                    links={[{ path: "/", label: "Home" }]}
                    className="text-white font-normal font-heading text-xl"
                  />
                </div>
              )}

              {currentHeaderContent.header && (
                <h3 className="text-white text-3xl lg:text-4xl font-semibold">
                  {currentHeaderContent.header}
                </h3>
              )}

              {currentHeaderContent.paragraph && (
                <p className="text-white text-lg lg:text-xl max-w-3xl">
                  {currentHeaderContent.paragraph}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Headers;
// {
//   /* Breadcrumb Section */
// }
// {
//   location.pathname !== "/" && (
//     <div className="mt-4">
//       <BreadCrumb
//         currentPageTitle={currentHeaderContent.title}
//         links={getBreadcrumbLinks(
//           location.pathname,
//           currentHeaderContent.title
//         )}
//         className="text-white"
//       />
//     </div>
//   );
// }
// // Function to generate breadcrumb links based on the current path
// const getBreadcrumbLinks = (pathname, currentTitle) => {
//   const links = [{ path: "/", label: "Home" }];

//   if (pathname.includes("/room")) {
//     links.push({ path: "/room", label: "Room" });
//     if (currentTitle) {
//       links.push({ path: pathname, label: currentTitle });
//     }
//   } else if (pathname.includes("/blog")) {
//     links.push({ path: "/blog", label: "Blog" });
//     if (currentTitle) {
//       links.push({ path: pathname, label: currentTitle });
//     }
//   } else if (pathname.includes("/services")) {
//     links.push({ path: "/services", label: "Services" });
//     if (currentTitle) {
//       links.push({ path: pathname, label: currentTitle });
//     }
//   }

//   return links;
// };
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import useHeaderNavStore from "../../../stores/useHeaderNavStore";
// import { useHeaderLinkStore } from "../../../stores/useHeaderLinkStore";
// import Container from "../../../components/Container";
// import BreadCrumb from "./BreadCrumb";
// import { FiMenu } from "react-icons/fi";

// const Headers = () => {
//   const [sticky, setSticky] = useState(false);
//   const location = useLocation();
//   const { headercontact } = useHeaderLinkStore();
//   const { navLinks, activeLink } = useHeaderNavStore();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleScroll = () => {
//     setSticky(window.scrollY > 50);
//   };

//   const phoneToogleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const closeMenuIcon = () => {
//     setIsMenuOpen(false);
//   };

//   const updateActiveLink = () => {
//     activeLink(location.pathname);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     updateActiveLink();
//   }, [location.pathname]);

//   const currentHeaderContent = headercontact.find(
//     (item) => item.path === location.pathname
//   );

//   const renderNavLinks = () =>
//     navLinks.map((link) => (
//       <li key={link.label}>
//         <Link
//           to={link.path}
//           className={`block py-2 pr-4 pl-3 nav-link text-primary-frame font-normal text-xl tracking-wider font-emerald border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
//         >
//           {link.label}
//         </Link>
//       </li>
//     ));

//   // Function to generate breadcrumb links based on the current path
//   const getBreadcrumbLinks = (pathname, currentTitle) => {
//     const links = [{ path: "/", label: "Home" }];

//     if (pathname.includes("/room")) {
//       links.push({ path: "/room", label: "Room" });
//       if (currentTitle) {
//         links.push({ path: pathname, label: currentTitle });
//       }
//     } else if (pathname.includes("/blog")) {
//       links.push({ path: "/blog", label: "Blog" });
//       if (currentTitle) {
//         links.push({ path: pathname, label: currentTitle });
//       }
//     } else if (pathname.includes("/services")) {
//       links.push({ path: "/services", label: "Services" });
//       if (currentTitle) {
//         links.push({ path: pathname, label: currentTitle });
//       }
//     }

//     return links;
//   };

//   return (
//     <>
//       <div>
//         <nav
//           className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 z-10 transition-all duration-500 ${
//             sticky ? "bg-primary text-white shadow-lg" : "bg-transparent text-white"
//           }`}
//         >
//           <Container className={"flex justify-between items-center"}>
//             <div className="text-white font-bold italic tracking-wide">
//               <Link to="/" className="flex items-center gap-2">
//                 <span className="font-heading text-4xl logo">Emerald</span>
//               </Link>
//             </div>

//             <ul className="hidden lg:flex space-x-6 text-lg font-medium">
//               {renderNavLinks()}
//             </ul>

//             <div className="hidden lg:flex items-center">
//               <Link
//                 to="/booking"
//                 className={`rounded-lg px-6 py-3 text-lg shadow-md ${
//                   sticky ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white hover:bg-primary-dark"
//                 }`}
//               >
//                 Book Now
//               </Link>
//             </div>

//             <div className="lg:hidden">
//               <button
//                 onClick={phoneToogleMenu}
//                 className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary menu-icon"
//                 aria-label="Toggle Navigation"
//               >
//                 <FiMenu className="size-8 bg-primary-frame text-primary" />
//               </button>
//             </div>
//           </Container>
//         </nav>

//         {isMenuOpen && (
//           <ul
//             className={`fixed top-0 right-0 bottom-0 bg-secondary z-10 w-52 pt-16 transition-transform duration-500 ${
//               isMenuOpen ? "right-0" : "right-[-100px]"
//             }`}
//           >
//             {renderNavLinks().map((link) => (
//               <li
//                 key={link.props.to}
//                 className="block text-lg font-medium hover:bg-gray-700 rounded transition duration-200 py-4 px-6"
//               >
//                 <Link
//                   to={link.props.to}
//                   onClick={closeMenuIcon}
//                 >
//                   {link.props.children}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}

//         {currentHeaderContent && currentHeaderContent.bgimage && (
//           <div
//             className="relative bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${currentHeaderContent.bgimage})`,
//               height: "600px",
//             }}
//           >
//             <div className="absolute bottom-24 lg:bottom-36 text-center w-full flex flex-col items-center space-y-4 px-6">
//               {currentHeaderContent.title && (
//                 <h1 className="text-white text-2xl lg:text-3xl font-normal font-heading drop-shadow-md">
//                   {currentHeaderContent.title}
//                 </h1>
//               )}

//               {/* Breadcrumb Section */}
//               {location.pathname !== "/" && (
//                 <div className="mt-4">
//                   <BreadCrumb
//                     currentPageTitle={currentHeaderContent.title}
//                     links={getBreadcrumbLinks(location.pathname, currentHeaderContent.title)}
//                     className="text-white"
//                   />
//                 </div>
//               )}

//               {currentHeaderContent.header && (
//                 <h3 className="text-white text-3xl lg:text-4xl font-semibold">
//                   {currentHeaderContent.header}
//                 </h3>
//               )}

//               {currentHeaderContent.paragraph && (
//                 <p className="text-white text-lg lg:text-xl max-w-3xl">
//                   {currentHeaderContent.paragraph}
//                 </p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Headers;

import { create } from "zustand";

const useHeaderNavStore = create((set) => ({
  navLinks: [
    { path: "/", label: "Home", isActive: false},
    { path: "/rooms", label: "Rooms", isActive: false },
    { path: "/about-us", label: "About Us", isActive: false },
    { path: "/services", label: "Services", isActive: false },
    { path: "/blog", label: "Blog", isActive: false },
    { path: "/contact-us", label: "Contact Us", isActive: false },
  ],
  activeLink: (pathLink) =>
    set((state) => {
      const updatedLinks = state.navLinks.map((link) => ({
        ...link,
        isActive: link.path === pathLink,
      }));
      return { navLinks: updatedLinks };
    }),
   
}));

export default useHeaderNavStore;
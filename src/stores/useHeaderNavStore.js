import { create } from "zustand";

const useHeaderNavStore = create((set) => ({
  navLinks: [
    { path: "/", label: "Home", isActive: false},
    { path: "/rooms", label: "Rooms", isActive: false },
    { path: "/about-us", label: "About Us", isActive: false },
    { path: "/services", label: "Services", isActive: false },
    { path: "/contact-us", label: "Contact Us", isActive: false },
    { path: "/blog", label: "Blog", isActive: false },
  ],
  activeLink: (pathLink) =>
    set((state) => ({
      navLinks: state.navLinks.map((link) => ({
        ...link,
        isActive: link.path === pathLink,
      })),
    })),
}));

export default useHeaderNavStore;
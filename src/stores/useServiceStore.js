import { create } from "zustand";


export const useServiceStore = create((set) => ({
  services: [
    {
      id: 1,
      title: "Restaurant",
      isAvailable: true,
    },
    {
      id: 2,
      title: "Spa & Wellness",
      isAvailable: true,
    },
    {
      id: 3,
      title: "Pool Swimming",
      isAvailable: true,
    },
    {
      id: 4,
      title: "Fitness Center",
      isAvailable: true,
    },
  ],

  selectedServices:[1],
  isBookingModalOPen:false,
  toggleServiceAvality: (id) => set((state) => ({
      services: state.services.map((service) =>
        service.id===id?{
            ...service,
            isAvailable:!service.isAvailable
        }:service),
      })),
      selectService:(service)=>
        set(() => ({
          selectedService:service,
        })),

   toggleBookingModal: () => set((state) => ({
     isBookingModalOPen: !state.isBookingModalOPen
   }))
    }))

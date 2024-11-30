import { create } from 'zustand'
import React from 'react'
import offer1 from "../assets/home/offer 1.jpg"
import offer2 from "../assets/home/offer 2.jpg"
import offer3 from "../assets/home/offer 3.jpg"
import offer4 from "../assets/home/offer 4.jpg"

const useHomePageOfferStore = create((set)=>({

   offers: [{
    service: "Stay",
    specialOffer: "20% OFF",
    img: offer1
   },
   {
    service: "Dine",
    specialOffer: "",
    img: offer2
   },
   {
    service: "Relax",
    specialOffer: "30% OFF",
    img: offer3
   },
   {
    service: "Facility",
    specialOffer: "",
    img: offer4
   }
]

}))

export default useHomePageOfferStore
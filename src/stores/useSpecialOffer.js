import imgCard from '../assets/Room/offer 1.jpg'
import imgCard2 from '../assets/Room/offer 2.jpg'
import imgCard3 from '../assets/Room/offer 3.jpg'


import { create } from "zustand";


const useSpecialOffer=create((set)=>({
    specialOffer:
    [
        {
            id:1,
            title:"1 Week Package OFFer",
            offer:"30% off  1 week+stays",
            image:imgCard
        },
        {
            id:2,
            title:"Summer Couple Offer",
            offer:"30% off  August Booking for couples",
            image:imgCard2
        },
        {
            id:3,
            title:"20% off 3+Nights Booking",
            offer:"Offer valid for suites only",
            image:imgCard3
        }
    ]
}))

export default useSpecialOffer
import React from 'react'
import { create } from 'zustand'
import roomIntro1 from "../assets/home/room intro 1.jpg"
import roomIntro2 from "../assets/home/room intro 2.jpg"

import roomIntro3 from "../assets/home/room intro 3.jpg"

const useHomeRoomsIntroStore = create((set)=>({

    rooms: [{
    roomName: "Deluxe Double Room",
     roomFees: "80.00",
     roomImg: roomIntro1
    },
    {
    roomName: "Standard Room",
     roomFees: "50.00",
     roomImg: roomIntro2
    },
    {
    roomName: "King Bed Room",
     roomFees: "150.00",
     roomImg: roomIntro3
    }
 ]
 
 }))


export default useHomeRoomsIntroStore
import { create } from "zustand";
import img1 from '../assets/Room/R1.jpg';
import img2 from '../assets/Room/R2.jpg';
import img3 from '../assets/Room/R3.jpg';
import img4 from '../assets/Room/R4.jpg';
import img5 from '../assets/Room/R5.jpg';


const useRoomStore=create((set)=>({
    rooms:[
        {
            id:1,
            name:"Standard Room",
            size:30,
            bed:2,
            guest:4,
            description:"A luxury hotel room offers high-end amenities such as premium bedding, elegant furnishings, and spacious layouts. It often includes extras like a private balcony, personalized service, and exclusive access to facilities like spas or lounges.",
            price:"$50",
            image:img1
        },
        {
            id:2,
            name:"Deluxe Double Room",
            size:40,
            bed:2,
            guest:4,
            description:"The Deluxe Double Room offers a spacious, elegantly furnished retreat featuring a comfortable double bed, modern amenities, and stunning views, perfect for a relaxing stay.",
            price:"$80",
            image:img2
        },
        {
            id:3,
            name:"King Bed Room",
            size:30,
            bed:2,
            guest:4,
            description:"A King Bed Room offers spacious comfort with a luxurious king-sized bed, modern amenities, and a cozy atmosphere perfect for relaxation or a restful night's sleep.",
            price:"$150",
            image:img3
        },
        {
            id:4,
            name:"Alpine Single Room",
            size:30,
            bed:2,
            guest:4,
            description:"The Alpine Single Room offers a cozy, tranquil retreat with rustic charm, featuring a comfortable bed and stunning mountain views, perfect for solo travelers seeking relaxation.",
            price:"$60",
            image:img4
        },
        {
            id:5,
            name:"Superior Double Room",
            size:55,
            bed:2,
            guest:4,
            description:"The Superior Double Room offers a spacious and elegantly designed space with a comfortable double bed, modern amenities, and a serene atmosphere for a relaxing stay.",
            price:"$120",
            image:img5

        },
    ]
}))
export default useRoomStore;
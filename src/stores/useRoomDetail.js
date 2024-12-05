import { create } from "zustand"

const useRoomDetail=create((set)=>({
    roomDetailBtn:[
        {
            id:1,
            title:"ROOM AMENITIES",
            isActive:true
        },
        {
            id:2,
            title:"PRICE",
            isActive:false
        },
        {
            id:3,
            title:"ROOM RULES",
            isActive:false
        }
    ],
    ActiveBtn: (id)=>set((state) => ({roomDetailBtn: state.roomDetailBtn.map((btn) => btn.id === id ? { ...btn, isActive: !btn.isActive } : { ...btn, isActive: false })}))
}))


export default useRoomDetail
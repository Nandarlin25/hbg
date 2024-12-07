import React from 'react'
import useRoomDetail from '../../../stores/useRoomDetail'

const RoomDetailBtn = ({btn}) => {
    const {ActiveBtn}=useRoomDetail();
    const handleClick=()=>{
        ActiveBtn(btn.id);
    }
  return (
    <div onClick={handleClick}>
        <button className={` w-full lg:h-[56px]  border lg:text-[20px] md:text-[18px] text-nowrap text-[12px] leading-[26.06px] border-black ${btn.isActive === true && 'bg-primary text-white'}`} >
                {
                  btn.title
                }
        </button>
    </div>
  )
}

export default RoomDetailBtn
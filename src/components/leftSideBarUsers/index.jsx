import React,{useState, useEffect} from 'react'
import arrowSvg from "../../assets/svg/arrow.svg"
import activity from "../../assets/svg/activity.svg"
import settingsSvg from "../../assets/svg/settings.svg"
import trelloSvg from "../../assets/svg/trello.svg"

function LeftSideBarUsers() {

    const [isFocusingOnWorkspace, setIsFocusingOnWorkspace] = useState(true);

    const handleClick = () => {
        setIsFocusingOnWorkspace(!isFocusingOnWorkspace);
    };
    

  return (
    <div className=' flex flex-col gap-2'>
        <div className= {`h-[50px] flex w-full items-center justify-between hover:bg-[#333C44] hover:rounded-lg`} onClick={handleClick}>
            <div className='flex gap-2 items-center text-[#A8B5C4] font-[400]'>
                <div className='w-[35px] h-[35px] bg-red-500 rounded-sm ml-3'></div>
                <div>Povex</div>
            </div>

            <div>
                <img src={arrowSvg} className={`w-[12px] mr-3 transition-transform ${isFocusingOnWorkspace ? "rotate-90" : "-rotate-90"}`}/>
            </div>
        </div>

        <div className={`flex flex-col gap-[5px] text-[15px] text-[#A8B5C4] font-[400] ${isFocusingOnWorkspace ? "hidden" : ""}`}>
            <div className='flex items-center gap-3 h-[35px] hover:bg-[#333C44] hover:rounded-lg'>
                <img src={trelloSvg} alt="" className='w-[15px] h-[15px] ml-6'/>
                <div>Boards</div>
            </div>

            <div className=' flex items-center gap-3 h-[35px] hover:bg-[#333C44] hover:rounded-lg'>
                <img src={activity} alt="" className='w-[15px] h-[15px] ml-6'/>
                <div>Activity</div>
            </div>

            <div className=' flex items-center gap-3 h-[35px] hover:bg-[#333C44] hover:rounded-lg'>
                <img src={settingsSvg} className='w-[15px] h-[19px] ml-6'/>
                <div>Settings</div>
            </div>

        </div>
    </div>
  )
}

export default LeftSideBarUsers
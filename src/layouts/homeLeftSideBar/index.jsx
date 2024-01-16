import React from 'react'
import plusSignSvg from "../../assets/svg/plus-sign.svg"
import LeftSideBarUsers from '../../components/leftSideBarUsers'


function HomeLeftSideBar() {
  return (
    <>  
        <div className=' w-[300px] max-h-[90vh] sticky flex flex-col gap-4 mr-8'>
            <div className=' w-full justify-between  flex text-[#A8B5C4] font-[500]'>
                <div className=' ml-4 font-[600]'>Workspaces</div>

                <div>
                  <img src={plusSignSvg} className=' w-[12px] mt-[0.5rem]'></img>
                </div>
            </div>

          <LeftSideBarUsers></LeftSideBarUsers>
          <LeftSideBarUsers></LeftSideBarUsers>
        </div>
    </>
  )
}

export default HomeLeftSideBar
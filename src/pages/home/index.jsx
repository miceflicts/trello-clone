import React from 'react'
import HomeLeftSideBar from '../../layouts/homeLeftSideBar'
import HomeTodosBoard from '../../components/homeBoards'

function HomePage() {

  return (
    <>
      <div className=' w-screen flex justify-center pt-[54px]'>
        <div className='flex justify-center w-[60vw]'>
          <div className='w-full h-full flex mt-10'>

            <HomeLeftSideBar></HomeLeftSideBar>

            <div className=' w-full h-full'>
                <div className='flex gap-3'>
                  <div className=' w-[60px] h-[60px] bg-white dark:bg-red-400 rounded-md'></div>
                    <div className=' mt-1'>
                      <div className='text-[#B6C2CF] font-[600] text-[18px]'>Mice</div>
                      <div className='text-[#B6C2CF] font-[400] text-[14px]'>Gratuito</div>
                    </div>
                </div>

                <hr className="h-[1px] my-8 bg-[#333C44] border-0 "></hr>

                <div>
                  <div className=' text-[18px] text-[#B6C2CF] font-[700]'>Seus quadros</div>
                </div>
                
                <div className=' mt-4 flex gap-4'>
                  <HomeTodosBoard></HomeTodosBoard>
                  <HomeTodosBoard></HomeTodosBoard>
                  <HomeTodosBoard></HomeTodosBoard>
                  <HomeTodosBoard></HomeTodosBoard>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
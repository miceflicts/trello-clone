import React from 'react'

function AddATodo({ receivedAClick}) {

  const handleClick = () => {
    receivedAClick(true);
  }
  
  return (
    <div className=' mt-[30px] ml-[30px] w-[270px] h-[40px] items-center bg-[#ffffff3d] hover:bg-[#ffffff23] bg-opacity-10 rounded-lg cursor-pointer' onClick={handleClick}>
        <div className=' w-full h-full flex items-center'>
            <div className=' flex w-full h-[30px] items-center m-2 ml-4 mr-4 text-white/70 font-semibold gap-3'>
                <h5 className=' text-[20px] mb-[2px]'>+</h5>
                <h5 className=' text-[16px]'>Add a list</h5>
            </div>
        </div>
    </div>
  )
}

export default AddATodo
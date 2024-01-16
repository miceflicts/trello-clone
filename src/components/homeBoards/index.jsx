import React from 'react'
import { Link } from 'react-router-dom'

function HomeTodosBoard() {
  return (
    <>
        <Link to={`boards/1`}>
          <div className=' flex w-[196px] h-[100px] bg-red-500 rounded transition-colors hover:opacity-85'>
            <div className=' mt-1 ml-[10px] text-white font-[700]'>
              Povex
            </div>
          </div>
        </Link>
    </>
  )
}

export default HomeTodosBoard
import React, {useState, useEffect, useRef} from 'react'

function TodosCard({index, text, isBeingCreated, hasCreatedNewTodo, hasDeletedATodo, addACardRef}) {
  const [newTodoText, setNewTodoText] = useState("")

  const beingCreatedRef = useRef();

  const handleCreateTodoTextAreaChange = (event) => {
    setNewTodoText(event.target.value);
  }

  const handleAddTodoButtonClick = () => {
    newTodoText !== "" ? hasCreatedNewTodo({text: newTodoText, id: index}) : hasDeletedATodo(index);
  }

  const handleCancelCreateTodoClick = () => {
    hasDeletedATodo(index);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (beingCreatedRef.current && !beingCreatedRef.current.contains(event.target)) {
        if (!(addACardRef.current && addACardRef.current.contains(event.target))) {
          handleCancelCreateTodoClick();
        }
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  

  }, [beingCreatedRef])
  

  return (
    <>
      {isBeingCreated ? (
      <div className=' w-[93%] flex flex-col gap-2' ref={beingCreatedRef}>
        <div className={` w-full h-[75px] bg-white dark:bg-[#22272B] rounded-lg flex`}>
            <div className=' ml-4 mt-2 w-full h-full '>
                <textarea type="text" placeholder='Insira um título para esse cartão...' value={newTodoText} onChange={handleCreateTodoTextAreaChange} className='w-[95%] h-[70%] text-sm focus:border-teal-50 focus:outline-none focus:ring-0 resize-none dark:bg-[#22272B] dark:text-[#B6C2CF]'/>
            </div>
        </div>

        <div className=' flex items-center gap-1'>
          <button className="bg-[#73adff] hover:bg-[#85B8FF] text-[#282F28] py-1 px-3 text-[14px] rounded text-center" onClick={handleAddTodoButtonClick}>
            Adicionar cartão
          </button>

          <div className=' w-[28px] h-[28px] flex items-center justify-center hover:bg-gray-300/90 dark:hover:bg-gray-700/60 hover:cursor-pointer rounded-sm' onClick={handleCancelCreateTodoClick}>
            <svg className='w-[45%] opacity-75 fill-black dark:fill-white' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
            </svg>
          </div>
        </div>
      </div>
      ) : 
      <div className={` w-[93%] min-h-[40px] bg-white dark:bg-[#22272B] rounded-md flex items-center`}>
          <div className=' mt-2 mb-2 ml-4 w-[90%] dark:text-[#B6C2CF] text-sm'>
              <h5 className=' break-words'>{text}</h5>
          </div>
      </div>}
    </>
  )
}

export default TodosCard
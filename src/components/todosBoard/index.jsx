import React, {useState, useEffect} from 'react'
import TodosCard from '../todosCard'

function TodosBoard({ id, todoTitle, isBeingCreated, createdNewList, canceledCreatingNewList}) {
    const [todosListDict, setTodosListDict] = useState([]);
    const [isATodoBeingCreated, setIsATodoBeingCreated] = useState(false)
    const [newListTitle, setNewListTitle] = useState("")
    const [isClickingInListOptions, setIsClickingInListOptions] = useState(false)
    
    const handleAddACardClick = () => {
        setTodosListDict([...todosListDict, { TodoText: "Text", IsBeingCreated: true, id: todosListDict.length}])
        setIsATodoBeingCreated(true);
    }

    const handleListTitleChange = (text) => {
      setNewListTitle(text.target.value);
    }

    const handleSubmitNewListClick = () => {
      newListTitle !== "" ? createdNewList({title: newListTitle, id: id}) : canceledCreatingNewList(id);
    }

    const handleCancelCreatingListClick = () => {
      canceledCreatingNewList(id);
    }

    const handleListOptionsClick = () => {
      setIsClickingInListOptions(true);
    }

    const handleCreateNewTodo = (text) => {
        if (text.text) {
            setTodosListDict((prevTodos) => {
              return prevTodos.map(todo => {
                if (todo.id === text.id) {
                  setIsATodoBeingCreated(false);
                  return {
                    ...todo,
                    TodoText: text.text,
                    IsBeingCreated: false,
                  };
                }
                return todo;
              });
            });
          } else {
            // If text is empty, delete the todo with the specified ID
            setTodosListDict((prevTodos) => prevTodos.filter(todo => todo.id !== text.id));
            setIsATodoBeingCreated(false);
          }
    }

    const handleHasDeletedAtodo = (id) => {
        setTodosListDict((prevTodos) => prevTodos.filter(todo => todo.id !== id));
        setIsATodoBeingCreated(false);
    };

  return (
        <>
            {isBeingCreated ? (
              <div className='relative mt-[30px] ml-4 flex flex-col min-w-[270px] max-w-[270px] h-full gap-2 bg-[#f2f2f4fa] dark:bg-[#101204] rounded-lg'>
                
                <div className='w-full flex items-center'>
                  <div className='flex w-full justify-center items-center mt-2 ml-4 mr-4 text-black/80 dark:text-[#B6C2CF] font-semibold gap-3'>
                    <textarea
                      placeholder='Insira o título da lista...'
                      className='w-full h-[32px] max-h-[60px] focus:outline-none text-sm rounded-[4px] resize-none bg-[#f2f2f4fa] dark:bg-[#101204] dark:hover:bg-[#22272B] hover:bg-[#e8e8e9fa] focus:bg-[#e8e8e9fa] dark:focus:bg-[#22272B] dark:text-[#B6C2CF]'
                      style={{ paddingLeft: '10px', paddingTop: "5px" }}
                      value={newListTitle}
                      onChange={handleListTitleChange}
                    ></textarea>
                  </div>
                </div>
                
                <div className=' flex items-center gap-1 mb-2'>
                  <button className="bg-[#73adff] hover:bg-[#85B8FF] text-[#282F28] ml-4 py-[6px] px-3 max-w-[120px] text-[14px] rounded text-center" onClick={handleSubmitNewListClick}>
                    Adicionar Lista
                  </button>

                  <div className=' w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-300/90 dark:hover:bg-gray-700/60 hover:cursor-pointer rounded-sm' onClick={handleCancelCreatingListClick}>
                    <svg className='w-[35%] opacity-75 fill-black dark:fill-white' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve">
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
            ) : (
              <div className=' relative mt-[30px] ml-[30px] flex flex-col min-w-[270px] max-w-[270px] h-full items-center gap-[5px] bg-[#f2f2f4fa] dark:bg-[#101204] rounded-lg'>
                  <div className=' w-full flex items-center'>
                      <div className=' flex w-full justify-between m-1 ml-4 mr-4 break-words text-black/80 dark:text-[#B6C2CF] font-semibold gap-3 mb-2 '>
                          <h5 className=' text-[16px] break-words w-[200px] mt-[10px] ml-1'>{todoTitle}</h5>

                          <div className=' w-[28px] h-[28px] flex items-center justify-center hover:bg-gray-300/90 dark:hover:bg-gray-700/60 hover:cursor-pointer rounded-md mt-[6px]' onClick={handleListOptionsClick}>
                            <h5 className=' text-[20px] mb-2'>...</h5>
                          </div>

                          {/* Todo, make this functional, make it change its position when the width of the screen changes */}
                          {isClickingInListOptions ? (
                            <>
                              <div className=' absolute flex flex-col gap-5 w-[270px] h-[165px] border border-gray-200 dark:border-black/15 shadow-xl bg-white dark:bg-[#22272B] top-11 left-[232px] rounded-md z-50 items-center'>
                                <div className=' flex flex-row w-full justify-center'>
                                  <h5 className=' mt-2 dark:text-gray-300/85 text-gray-600/90'>Lista de ações</h5>

                                  <div className=' absolute top-2 right-4 w-[28px] h-[28px] flex items-center justify-center hover:bg-gray-300/90 dark:hover:bg-gray-700/60 hover:cursor-pointer rounded-sm'>
                                    <svg className='w-[40%] opacity-75 fill-gray-600/90 dark:fill-white' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve">
                                      <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                                    </svg>
                                  </div>

                                </div>

                                <div className=' flex flex-col w-full'>
                                  <div className=' flex flex-col dark:text-[#B6C2CF] text-sm font-[600] pl-5 w-full h-[35px] hover:bg-gray-500/20 dark:hover:bg-gray-700/30 justify-center'>Add card...</div>
                                  <div className=' flex flex-col dark:text-[#B6C2CF] text-sm font-[600] pl-5 w-full h-[35px] hover:bg-gray-500/20 dark:hover:bg-gray-700/30 justify-center'>Copy list...</div>

                                  <hr className="h-[1px] dark:bg-[#333C44] bg-gray-300/60 rounded-lg border-0 "></hr>

                                  <div className=' flex flex-col dark:text-[#B6C2CF] text-sm font-[600] pl-5 w-full h-[35px] hover:bg-gray-500/20 dark:hover:bg-gray-700/30 justify-center'>Delete this list</div>
                                </div>

                              </div>
                            </> 
                          ) : null}
                      </div>
                  </div>


                  {/* Cards */}
                  <div className='w-full flex flex-col items-center gap-[10px] mb-2'>
                      {todosListDict.map((todos, index) => (
                          <TodosCard key={index} index={index} text={todos.TodoText} isBeingCreated={todos.IsBeingCreated} hasCreatedNewTodo={handleCreateNewTodo} hasDeletedATodo={handleHasDeletedAtodo}></TodosCard>
                      ))}
                  </div>


                  {/* Add a card button */}
                  <div className={` w-[93%] items-center mb-4 hover:bg-gray-500/20 dark:hover:bg-gray-700/30 rounded-md cursor-pointer ${isATodoBeingCreated ? "hidden" : "flex"}`} onClick={handleAddACardClick}>
                      <div className=' ml-[10px] flex gap-2 text-gray-500/95 font-semibold items-center'>
                          <h5 className=' text-[20px] mb-[2px]'>+</h5>
                          <h5 className=' text-[16px]'>Adicionar um cartão</h5>
                      </div>
                  </div>
              </div>
            )}
        </>
  )
}

export default TodosBoard
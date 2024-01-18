import React,{useState, useEffect} from 'react'
import TodosBoard from '../../components/todosBoard'
import AddATodo from '../../components/addATodo'

function TrelloBoardsPage() {

  const [hasClickedToAddAList, setHasClickedToAddAList] = useState(false)
  const [todosListDict, setTodosListDict] = useState([])


  const handleAddATodoClick = () => {
    setHasClickedToAddAList(true);
  }

  const addNewTodoList = () => {
    hasClickedToAddAList ? setTodosListDict([...todosListDict, {todoTitle: "", id: todosListDict.length, isBeingCreated: true}]) : null;
    setHasClickedToAddAList(false);
  }

  const handleCreatedNewList = (text) => {

    setTodosListDict((prevList) => {
      return prevList.map(todo => {
        if (todo.id === text.id){
          return {
            ...todo,
            todoTitle: text.title,
            isBeingCreated: false,
          };
        }
        return todo;
      })
    })

  }

  const handleCanceledCreatingNewList = (id) => {
    setTodosListDict((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  const handleHasCopiedList = (id) => {

      todosListDict.map(todo => {
        if (todo.id === id) {
          let todoTitle = todo.todoTitle;
          
          setTodosListDict([...todosListDict, {todoTitle: todoTitle, id:todosListDict.length, isBeingCreated: false}])
        };
      })
  }

  useEffect(() => {
    addNewTodoList();
  
  }, [hasClickedToAddAList])
  

  return (
    <>
      <div className=' min-w-max min-h-screen bg-[#5B6165] pt-[54px]'>
        {/* Boards Header */}
        <div className='fixed flex w-full h-[56px]'>
            <div className=' h-full w-full flex items-center bg-black opacity-25'></div>

            <div className=' absolute w-full h-[56px] flex items-center z-10 text-white font-bold text-lg'>
              <h5 className=' ml-[2rem]'>My Board</h5> 
            </div>
        </div>

        
        {/* Todos Area */}
        <div className=' flex flex-row pt-[56px]'>

          {todosListDict.map((todosList, index) => {
            return <TodosBoard key={index} id={todosList.id} todoTitle={todosList.todoTitle} isBeingCreated={todosList.isBeingCreated} createdNewList={handleCreatedNewList} canceledCreatingNewList={handleCanceledCreatingNewList} hasDeletedList={handleCanceledCreatingNewList} hasCopiedList={handleHasCopiedList}></TodosBoard>
          })}

          <AddATodo receivedAClick={handleAddATodoClick}></AddATodo>
        </div>

      </div>
    </>
  )
}

export default TrelloBoardsPage
import React from 'react'
import './Todo.css'
import todosImage from '../../Assets/todo.jpg'


const Todo = () => {
  return (
    <div>
      <div className='todopage'>
                <div className='image-container4'>
                    {<img src={todosImage} alt='' className='image-container'/>}
                    <div className='text-container4'>

                        <h2>Set Your Todos for the Day</h2>

                        <p>Set clear Todos for the day in categories</p>
                            <p>Categorize the todos</p>
                             <p>Mark todos as done or undone,</p>
                            <p>Edit todos for thedayi</p>

                        

                    </div>
                </div>

            </div>
      


    </div>
  )
}

export default Todo

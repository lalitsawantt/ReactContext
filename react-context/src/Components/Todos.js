import React,{useContext} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {FaRegTimesCircle} from "react-icons/fa";
import { ToDoContext } from '../context/ToDoContext';
import { REMOVE_TODO } from '../context/action.types';

const Todos = () => {
  const {todos, dispatch} = useContext(ToDoContext);

  return (
    <ListGroup className="mt-50 mb-0 items listitems">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id} className="todo">
          {todo.todoString}
          <span className="float-right" onClick={() => dispatch({
            type:REMOVE_TODO,
            payload:todo.id
          })}><FaRegTimesCircle/></span>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}

export default Todos
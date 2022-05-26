import React, {useContext, useState} from 'react';
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import {v4} from "uuid";
import {ToDoContext} from "../context/ToDoContext";
import {ADD_TODO} from "../context/action.types";
import { FaPlus } from 'react-icons/fa';


const TodoForm = () => {

  const [todoString, setTodoString] = useState("");

  const {dispatch} = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoString === ""){
      return alert("Please enter a valid todo");
    }
    const todo = {
      todoString,
      id:v4()
    }
    dispatch({
      type:ADD_TODO,
      payload:todo
    })
    setTodoString("");
  }
  return(
    <Form onSubmit={handleSubmit}> 
      <FormGroup>

        <InputGroup>
        <Input 
          type="text"
          name="todo"
          id="todo"
          placeholder="Your next Todo"
          value={todoString}
          onChange={e => setTodoString(e.target.value)}

        />
        <InputGroupAddon addonType="prepend">
          <Button
          color="success"
          >
            <FaPlus/>
          </Button>
        </InputGroupAddon>
        </InputGroup>
        
      </FormGroup>
    </Form>
  )
}

export default TodoForm;

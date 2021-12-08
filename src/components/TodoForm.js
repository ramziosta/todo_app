import React from "react";
import { Button, Input, InputLabel, FormControl} from "@material-ui/core";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
      //prevents page refresh when button is submited and deletes the state memory
    e.preventDefault();
    //adds the input value to the todo list
    addTodo(value);
    //clears the input field
    setValue("");
  };

  const onChange = (e) => {
    console.log("onchange" + value);
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
   
      <form>
          <FormControl>
            <InputLabel>🔳 Add a Todo</InputLabel>
            <Input value={value} label="Outlined primary" onChange={onChange} />
          </FormControl>

          {/* disabled: disable adding null value */}
          <Button variant="contained" disabled={!value} color="primary" type="submit" onClick={handleSubmit} >Add Todos</Button>
      </form>

    </>
  );
};

export default TodoForm;

import React, { useState } from "react";
import Header from "./Header.js";

const Home = () => {

    //controla lo que se ingresa en el input
    const [todoInput, setTodoInput] = useState("");

    //controla los todos agregados
    const [todos, setTodos] = useState([]);

    //asigna el valor que fue ingresado en el input
    const onInputChage = (event) => {
        setTodoInput(event.target.value);
    };

    //agrega la tarea a la lista
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, todoInput]);
        setTodoInput("");
    };

    //elimina una tarea
    const handleDelete = (position) => {
        setTodos(todos.filter((value, index) => index !== position))

    };


    return (
        //genera estructura principal del programa
        <>
            <div className="container">
                <div className="container">
                    <div>
                        <Header />
                    </div>


                    <div>
                        <form onSubmit={onFormSubmit}>
                            <input className='form-control form-control-lg'
                                type='text'
                                placeholder='enter a todo...'
                                value={todoInput}
                                required
                                onChange={onInputChage}
                            ></input>
                            <div className="d-flex justify-content-end">
                                <button className='btn btn-success'><i className="fa fa-solid fa-check"></i></button>
                            </div>
                        </form>
                    </div>


                    <div>
                        <form>
                            {todos.map((todo, index) => (
                                <div className="mt-3">
                                    <input
                                        key={index}
                                        className="form-control"
                                        type="text"
                                        value={todo}
                                        readOnly>

                                    </input>

                                    <button className="btn btn-success d-flex justify-content-end"
                                        onClick={() => handleDelete(index)}> Done
                                        <i class="fa fa-solid fa-circle-check"></i>
                                    </button>
                                </div>
                            )
                            )}
                        </form>
                    </div>
                </div>


            </div>

        </>
    )

};

export default Home;
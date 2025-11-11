import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://todo-list-api-kflt.onrender.com/api/todos';

const TodoForm = ({onTodoAdded}) =>{
    const [title, setTitle] = useState('');
    const [description, setDescription]= useState('');

    const handleSubmit =async(e) =>{
        e.preventDefault(); 

        
        if (!title.trim()) {
            alert('Title cannot be empty!');
            return;
        }

        try{
            const response = await axios.post(API_URL, {title, description, completed: false});
            onTodoAdded(response.data);
            setTitle('');
            setDescription('');
        }catch(error){
            console.error('Error adding todo: ', error);
            alert('Failed to add todo. Please try again.'); 
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Title' required />
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default TodoForm;
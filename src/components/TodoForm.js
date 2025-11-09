import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos';

const TodoForm = ({onTodoAdded}) =>{
    const [title, setTitle] = useState('');
    const [description, setDescription]= useState('');

    const handleSubmit =async(e) =>{
        e.preventDefault(); // Yazım hatası düzeltildi: preventDefault

        // Başlığın boş olup olmadığını kontrol et
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
            alert('Failed to add todo. Please try again.'); // Kullanıcıya hata bildirimi
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
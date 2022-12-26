import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import cl from './recipeForm.module.css'

const RecipeForm = () => {

    const addRecipe = async (e) => {
        e.preventDefault()

        let isSuccess = true

        await axios.post("https://localhost:7211/api/Recipe/AddRecipe", {
            Name: name,
            Description: desc,
            Instruction: instr,
            Type: type,
            ImagePath: img
        }).catch(() => { isSuccess = false })

        if (isSuccess) {
            setMessage('Recipe success added')
        }
        else {
            setMessage('Some error')
        }
    }

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [instr, setInstr] = useState('')
    const [type, setType] = useState('Difficulty')
    const [img, setImg] = useState('')

    const [message, setMessage] = useState('')

    return (
        <div className={cl.container}>
            <form className={cl.form}>
                <span className={cl.title}>Add new recipe</span>
                <input className={cl.input} name="Name" type="text" required placeholder='*Name...' value={name} onChange={e => setName(e.target.value)} />
                <input className={cl.input} name="Description" type="text" placeholder='Description...' value={desc} onChange={e => setDesc(e.target.value)} />
                <input className={cl.input} name="Instruction" type="text" required placeholder='*Instruction...' value={instr} onChange={e => setInstr(e.target.value)} />
                <input className={cl.input} name="ImagePath" type="text" placeholder='Image path...' value={img} onChange={e => setImg(e.target.value)} />
                <select size="1" className={cl.input} value={type} onChange={e => { setType(e.target.value) }}>
                    <option disabled>Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <button className={cl.btn} onClick={addRecipe}>Create</button>
                <span className={cl.desc}>* - is required fields</span>
                <span className={cl.message}>{message}</span>
            </form>
        </div>
    );
};

export default RecipeForm;
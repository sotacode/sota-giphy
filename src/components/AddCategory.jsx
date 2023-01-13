import { useState } from "react"


export const AddCategory = ({onAddNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if(value.length<1) return;
        onAddNewCategory(value)
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}

import './Textarea.css'

const Textarea = (props) => {


    const placeholder = `${props.placeholder}👻`

    // Función para manejar cambios en el textarea
    const handleTextareaChange = (e) => {
        props.updateDescription(e.target.value); // Actualiza el estado con el nuevo valor del textarea
    };


    return (
        <div className='textarea'>
            <label>{props.title}</label>
            <textarea
                cols="30" rows="10"
                placeholder={placeholder}
                required={props.required} 
                value={props.value} // Utiliza la prop value para asignar el valor del textarea
                onChange={handleTextareaChange}
                onBlur={props.onBlur}
            >
            </textarea>
            {props.errorMessage && <p className='errorMessage'>{props.errorMessage}</p>}

        </div>
    )
}

export default Textarea

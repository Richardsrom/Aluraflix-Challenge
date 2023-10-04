import './Input.css'

const Input = (props) => {

    const placeholder = `${props.placeholder}👻 `

    const { type= 'text' } = props

    const manejarCambio = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className={`input input-${type}` }>
        <label>{props.title}</label>
        <input 
         placeholder={placeholder} 
         required={props.required}
         value={props.value}
         onChange={manejarCambio}
         type={type}
         onBlur={props.onBlur}
        />
        {props.errorMessage && <p className='errorMessage'>{props.errorMessage}</p>}

    </div>
} 

export default Input





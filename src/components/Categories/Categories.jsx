import './Categories.css'

const Categories = (props) => {

    const manejarCambio = (e) => {
        props.updateCategory(e.target.value)
    }

    return <div className='categories'>
        <label>{props.title}</label>
        <select 
            value={props.value} 
            onChange={manejarCambio} 
            required={props.required} 
        >
            <option value='' disabled defaultValue='' hidden > Selecionar categoria...👻 </option>
            {props.categories.map((category, index) => <option key={index} value={category} >{category}</option> ) }
        </select>
    </div>
}

export default Categories

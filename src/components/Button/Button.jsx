import './Button.css'

const Button = (props) => {

    const buttonClasses = ['button', props.primary ? 'primary' : props.secondary ? 'secondary' : ''];

    return  <div>
        <button type='' className={buttonClasses.join(' ')} onClick={props.onClick}> {props.children} </button>
    </div> 
}

export default Button






























/*
 const buttonClasses = ['button'];

    if (props.primary) {
        buttonClasses.push('primary'); // Agrega la clase 'primary' si se pasa la prop primary
      } else if (props.secondary) {
        buttonClasses.push('secondary'); // Agrega la clase 'secondary' si se pasa la prop secondary
      }
*/
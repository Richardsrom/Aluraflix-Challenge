import './Formulary.css'
import Input from '../Input/Input.jsx'
import Categories from '../Categories/Categories.jsx'
import Button from '../Button/Button'
import { useState } from 'react'
import Textarea from '../Textarea/Textarea.jsx'
import { Link, useNavigate } from 'react-router-dom';



const Formulary = (props) => {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    //useStates para manejar los errores de inputs.
    const [titleError, setTitleError] = useState('');
    const [linkError, setLinkError] = useState('');
    const [imgError, setImgError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [codeError, setCodeError] = useState('');


    const { registerVideoCard } = props

    const manejarEnvio = async (e) => {

        //Realizar la validacion y obtener los errores
        const errors = validation(title, link, img, description, code);

        //Verificar si hay errores
        if (Object.values(errors).some((error) => error !== '' )) {
            e.preventDefault();
            // Muestra los mensajes de error en lugar de enviar la información
            console.log('Existen errores, no se puede mandar el formulario');
            //Aqui podemos poner alerts o mensajes
            alert('Existen errores, no se puede mandar el formulario');

        } else {

            e.preventDefault()
            let sendInfo = {
                title,
                link, 
                img,
                category,
                description,
                code
            }
            // Llama a la función para registrar el video y espera a que se complete
            try {
                await registerVideoCard(sendInfo);
                // Una vez que se haya guardado con éxito, redirige a la página principal
                navigate('/');
    
            } catch (error) {
                // Maneja el error si ocurriera algún problema durante el registro del video
                console.error("Error al guardar el video:", error);
            }

        }

    }

    const cleanForm = (e) => {
        e.preventDefault();
        setTitle('');
        setLink('');
        setImg('');
        setCategory('');
        setDescription('');
        setCode('');
      };


    const validation = (title, link, img, description, code) => {

        const errors = {};
        
        errors.title = title.length === 0 ? 'El campo Título no puede estar vacio' : title.length < 3 ? 'El titulo debe contener más de 3 caracteres' : '';
        errors.link = link.length === 0 ? 'El campo Link no puede estar vacío' : link.length <= 10 ? 'El link debe ser más largo' :'';
        errors.img = img.length === 0 ? 'El campo Imagen no puede estar vacío' : img.length <= 10 ? 'El link imagen debe ser más largo' :'';
        errors.description = description.length === 0 ? 'El campo Descripción no puede estar vacío' : description.length <= 5 ? 'El campo Descripción debe ser más largo' : '';
        errors.code =
        code.length === 0
            ? 'El campo Código no puede estar vacío'
            : new Set(code.toString()).size !== code.toString().length
            ? 'El código no debe tener números repetidos'
            : '';

        return errors;
    };
   
    const handleBlur = () => {
        const errors = validation(title, link, img, description, code);
        setTitleError(errors.title || ''); // Si no hay error, establece el mensaje en una cadena vacía
        setLinkError(errors.link || '');
        setImgError(errors.img || '' );
        setDescriptionError(errors.description || '');
        setCodeError(errors.code || '');

        console.log('handleBlur ejecutado');
    };

    return <section className='formulary'>
        <form onSubmit={manejarEnvio}>
            <h2>Nuevo video</h2>
            <Input 
             title='Titulo' 
             placeholder='Ingresar titulo...' 
             required 
             value={title} 
             updateValue={setTitle}
             errorMessage={titleError}
             onBlur={handleBlur}
            />
            <Input 
             title='Link video' 
             placeholder='Ingresar video...' 
             required
             value={link} 
             updateValue={setLink}
             errorMessage={linkError}
             onBlur={handleBlur}
            /> 
            <Input 
             title='Link imagen video' 
             placeholder='Ingresar imagen...' 
             required
             value={img} 
             updateValue={setImg}
             errorMessage={imgError}
             onBlur={handleBlur}
            /> 
            <Categories 
             title='Categoría' 
             value={category}
             updateCategory={setCategory}
             required
             categories={props.categories}
            />
            <Textarea 
             title='Descripción'
             placeholder='Agrega una descripción...'
             required
             value={description}
             updateDescription={setDescription}
             errorMessage={descriptionError}
             onBlur={handleBlur}
            />
            <Input 
             title='Código' 
             placeholder='Ingresar codigo...' 
             required
             value={code} 
             updateValue={setCode}
             type='number'
             errorMessage={codeError}
             onBlur={handleBlur}
            /> 
            <div className='buttons'>
                <div className='buttons-1'>
                    <Button primary type='submit'>
                        Guardar
                    </Button>
                </div>
            </div>
        </form>
        <div className='buttons-options'>
            <Button onClick={cleanForm}  secondary>
                Limpiar
            </Button>
            <Link to="/addcategory">
                <Button primary>
                    Nueva Categoria
                </Button>
            </Link>
        </div>

    </section>
}

export default Formulary
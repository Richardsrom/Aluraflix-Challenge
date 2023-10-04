import './FormularyCategory.css'
import Input from '../Input/Input.jsx'
import Button from '../Button/Button'
import { useState } from 'react'
import Textarea from '../Textarea/Textarea.jsx'
import Table from '../Table/Table.jsx'

const FormularyCategory = (props) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [code, setCode] = useState('')
    const [ color, setColor] = useState('')

    // Nuevo estado para la categoría que se está editando
    const [editingCategory, setEditingCategory] = useState(null); 

    //useStates para manejar los errores de inputs.
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [codeError, setCodeError] = useState('');
    
    const { createCategory, categories, deleteCategory, setCategories  } = props

    //Editar categoria
    const editCategory = (category) => {
      
        // Asigna las propiedades específicas de la categoría a los estados correspondientes
        setTitle(category.title || ''); // Asegúrate de proporcionar un valor predeterminado si title es undefined
        setDescription(category.description || '');
        setColor(category.primaryColor || '#000000'); // Asegúrate de proporcionar un valor predeterminado para el color si es undefined
        setCode(category.code || '');
      
        // Establece la categoría en edición
        setEditingCategory(category);
      }
      

    const manejarNuevaCategoria = (e) => {

      e.preventDefault();

      //Realizar la validacion y obtener los errores
      const errors = validation(title, description, code);

      //Verificar si hay errores
      if (Object.values(errors).some((error) => error !== '' )) {

        e.preventDefault();
        // Muestra los mensajes de error en lugar de enviar la información
        console.log('Existen errores, no se puede mandar el formulario');
        //Aqui podemos poner alerts o mensajes
        alert('Existen errores, no se puede mandar el formulario');
 
      } else {

        if (editingCategory) {

          // Si hay una categoría en edición, actualiza sus datos
          const updatedCategory = {
            title,
            description,
            primaryColor: color,
            code,
          };
      
          // Encuentra la categoría correspondiente en el arreglo y actualízala
          const updatedCategories = categories.map((category) =>
            category.title === editingCategory.title ? updatedCategory : category
          );
      
          // Actualiza el estado de las categorías y restablece el estado de edición
          setCategories(updatedCategories);
          setEditingCategory(null);

        } else {

          // Si no hay una categoría en edición, crea una nueva
          const newCategory = {
            title,
            description,
            primaryColor: color,
            code,
          };
      
          // Agrega la nueva categoría al arreglo de categorías
          setCategories([...categories, newCategory]);
        }
      
        // Limpia los campos del formulario después de guardar
        setTitle('');
        setDescription('');
        setColor('');
        setCode('');

      }        
    };


    //Aqui vamos a mandar los mensaje de validacion 
    const validation = (title, description, code) => {

        const errors = {};
        
        errors.title = title.length === 0 ? 'El campo Categoría no puede estar vacío' : title.length < 3
            ? 'El campo Categoría debe contener más de 3 caracteres' : /\d/.test(title) ? 'El campo Categoría no puede contener números' : '';
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

      const errors = validation(title, description, code);
      setTitleError(errors.title || ''); // Si no hay error, establece el mensaje en una cadena vacía
      setDescriptionError(errors.description || '');
      setCodeError(errors.code || '');

      console.log('handleBlur ejecutado');
  };

      const cleanForm = (e) => {
        e.preventDefault();
        setTitle('');
        setDescription('');
        setColor('');
        setCode('');
      };

    return <section className='formularyCategory'>
        <form onSubmit={manejarNuevaCategoria}>
            <h2>Nueva Categoría</h2>
            <Input 
             title='Categoria' 
             placeholder='Ingresar nueva categoria...' 
             required 
             value={title} 
             updateValue={setTitle}             
             errorMessage={titleError}
             onBlur={handleBlur}
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
             title='Color' 
             placeholder='Ingresar color...' 
             required
             value={color} 
             updateValue={setColor}
             type='color'
            /> 
            <Input 
             title='Codigo' 
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
        <div className='buttons-2'>
        <Button 
            onClick={cleanForm}  
            secondary>
            Limpiar
        </Button>
        </div>

        <div className='tableInfo'>
            <Table
             categories={categories}
             deleteCategory={deleteCategory}
             editCategory={editCategory}
            />
        </div>
    </section>

    
}

export default FormularyCategory


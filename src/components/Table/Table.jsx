import './Table.css'
import TableCard from '../TableCard/TableCard.jsx'

const Table = (props) => {

    const { categories, deleteCategory, editCategory } = props

    return <table className='table'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
            <TableCard 
                categories={categories}
                deleteCategory={deleteCategory}
                editCategory={editCategory}
            />

    </table>
}

export default Table
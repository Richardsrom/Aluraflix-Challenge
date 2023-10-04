import './TableCard.css'
import { MdDelete } from 'react-icons/md'
import { HiMiniPencilSquare } from 'react-icons/hi2'

const TableCard = (props) => {
    const { categories, deleteCategory, editCategory } = props;

    return (
        <tbody>
            {categories.map((category, index) => (
                <tr key={index}>
                    <td>{category.title}</td>
                    <td>{category.description}</td>
                    <td className='edit'><HiMiniPencilSquare onClick={ () => editCategory(category) } /></td>
                    <td className='erase'><MdDelete onClick={ () => deleteCategory(category.title)} /></td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableCard;

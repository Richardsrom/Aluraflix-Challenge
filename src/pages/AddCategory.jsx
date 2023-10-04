import FormularyCategory from "../components/FormularyCategory/FormularyCategory"
import '../App.css'

const AddCategory = (props) => {

  const { createCategory,categories, deleteCategory, setCategories  } = props


    return (
        <main className="main-formulary">
            <FormularyCategory 
              createCategory={createCategory}
              categories={categories}
              deleteCategory={deleteCategory}
              setCategories={setCategories}
            />
        </main>
    )
}

export default AddCategory
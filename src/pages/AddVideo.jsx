import Formulary from "../components/Formulary/Formulary"
import '../App.css'



const AddVideo = (props) => {

  const {  categories, registerVideoCard } = props

    return (
        <main className="main-formulary">
            <Formulary 
                categories={categories.map( (category) => category.title )} 
                registerVideoCard={registerVideoCard}
            />
        </main>
    )
}

export default AddVideo
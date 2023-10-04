import './Header.css'
import Button from './../Button/Button.jsx'
import { Link } from 'react-router-dom';


const Header = () => {

    return <header className='header'>
        <Link to="/">
            <img src="https://aluraflix-apfjunior.vercel.app/static/media/Logo.4c087e0c.png" alt='Logo company' />
        </Link>
        <Link to="/addvideo">
            <Button >
                Nuevo video
            </Button>
        </Link>
       

    </header>
}

export default Header 


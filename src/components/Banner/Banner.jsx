import './Banner.css'
import Title from '../Title/Title.jsx'

const Banner = () => {
    return <div className='banner'>
        <div className='banner-info'>
            <Title title='Front End' />
            <div>
                <h3>Challenge React</h3>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
        </div>
            <div className='banner-video'>
                <a href="https://www.youtube.com/watch?v=ov7vA5HFe6w" target='blank'>
                    <img src="https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg" alt="video about Frond End" />
                </a>
            </div>
    </div>
}

export default Banner


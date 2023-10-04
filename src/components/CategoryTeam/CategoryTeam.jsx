import './CategoryTeam.css'

import VideoCard from '../Tarjeta/Tarjeta'

const CategoryTeam = (props) => {

    const { primaryColor, title } = props.data
    const { videoCards } = props

    const styleTitle = { background: primaryColor }


    return <> 
        { 
          videoCards.length > 0 && 
            <section className='categoryTeam'>
                    <h3 style={ styleTitle } >{title}</h3>
                <div className='categoryTeam-videoCard'>
                    <div className='categoryTeam-videoCard-container' >
                        {
                            videoCards.map( (videoCard, index) => <VideoCard 
                                data={videoCard} 
                                key={index} 
                            /> )
                        }
                    </div>
                </div>
            </section>
        } 
    </> 
} 

export default CategoryTeam


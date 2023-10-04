import CategoryTeam from '../components/CategoryTeam/CategoryTeam.jsx'
import Banner from '../components/Banner/Banner.jsx'

const Home = (props) => {

  const { videoCards, categories } = props

    return (
        <main>
          <Banner />
        {
          categories.map( (team) => <CategoryTeam 
                data={team} 
                key={team.title}
                videoCards={videoCards.filter( videoCard => videoCard.category === team.title )}
            /> )
        }

        </main>
    )
}

export default Home
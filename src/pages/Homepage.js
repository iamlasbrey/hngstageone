import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Listings from '../components/Listings'
import Logos from '../components/Logos'


const Homepage = () => {                             
    return (
        <>
            <TopBar />
                <Header />
                <Listings />
            <Logos />
        </>
    )
}

export default Homepage
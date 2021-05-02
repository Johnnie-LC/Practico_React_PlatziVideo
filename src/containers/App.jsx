import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrouselItem'
import Footer from '../components/Footer'

import '../assets/style/App.scss'

const App = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    },[])

    console.log(videos)

    return(
        <div className="App">
            <Header />
            <Search />

            <Categories title='Mi lista'>
                <Carrousel>
                    <CarrouselItem />
                    <CarrouselItem />
                    <CarrouselItem />
                    <CarrouselItem />
                </Carrousel>
            </Categories>

            <Categories title='Tendencias'>
                <Carrousel>
                    <CarrouselItem />
                    <CarrouselItem />
                </Carrousel>
            </Categories>

            <Categories title='Originales de Platzi Videos' >
                <Carrousel>
                    <CarrouselItem />
                    <CarrouselItem />
                    <CarrouselItem />
                </Carrousel>
            </Categories>
            
            
            <Footer />
        </div>
)
}
export default App
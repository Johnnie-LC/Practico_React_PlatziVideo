import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

import '../assets/style/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {
    
    const initialState = useInitialState(API)

    console.log(initialState, `este es ${initialState.trends.length}`)

    return(
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 && 
                <Categories title='Mi lista'>
                    <Carrousel>
                        <CarrouselItem />
                    </Carrousel>
                </Categories>
            }
        
            <Categories title='Tendencias'>
                <Carrousel>
                {   initialState.trends?.map(item => 
                        <CarrouselItem key={item.id} {...item}/>) 
                }
                </Carrousel>
            </Categories>

            <Categories title='Originales de Platzi Videos' >
                <Carrousel>
                    {
                        initialState.originals?.map(item => 
                            <CarrouselItem key={item.id} {...item}/>)
                    }
                </Carrousel>
            </Categories>            
            <Footer />
        </div>
)
}
export default App
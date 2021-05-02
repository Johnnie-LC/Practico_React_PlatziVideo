import React from 'react'
import '../assets/style/App.scss'
import Header from '../components/Header'
import Search from '../components/Search'

const App = () => (
    <React.Fragment className="App">
        <Header />
        <Search />
    </React.Fragment>
)
export default App
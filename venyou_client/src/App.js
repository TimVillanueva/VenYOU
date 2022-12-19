import Header from './components/Header'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import VenueDetails from './components/VenueDetails'
import {useContext, useState} from 'react'
import {DataContext} from './DataContext'

function App() {

const [currentVenue, setCurrentVenue] = useState({})

  return (
    <DataContext.Provider value = {{
      currentVenue, setCurrentVenue
    }}>
    <div className="App">
      <Header />
      <main>
      
      <Routes>
        <Route path = '' element ={<Home/>}/>
        <Route path ='/venueDetails' element ={<VenueDetails/>}/>
      </Routes>


      </main>

    </div>
    </DataContext.Provider>
  );
}

export default App;

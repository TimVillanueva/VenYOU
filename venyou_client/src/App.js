import Header from './components/Header'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import VenueDetails from './components/VenueDetails'
import Login from './components/Login'
import {useContext, useState} from 'react'
import {DataContext} from './DataContext'

function App() {

const [currentVenue, setCurrentVenue] = useState({})
const [currentEvent, setCurrentEvent] = useState({})

  return (
    <DataContext.Provider value = {{
      currentVenue, setCurrentVenue,
      currentEvent, setCurrentEvent
    }}>
    <div className="App">
      <Header />
      <main>
      
      <Routes>
        <Route path = '' element ={<Home/>}/>
        <Route path ='/venueDetails' element ={<VenueDetails/>}/>
        <Route path = '/login' element ={<Login/>}/>
      </Routes>


      </main>

    </div>
    </DataContext.Provider>
  );
}

export default App;

import Header from './components/Header'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import VenueDetails from './components/VenueDetails'
import Login from './components/Login'
import {useContext, useState} from 'react'
import {DataContext} from './DataContext'
import Events from './components/Events'
import EventsDetails from './components/EventsDetails'
import Footer from './components/Footer'

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
        <Route path = '/events' element ={<Events/>}/>
        <Route path ='/eventDetails' element={<EventsDetails/>}/>
      </Routes>


      </main>

      <Footer />

    </div>
    </DataContext.Provider>
  );
}

export default App;

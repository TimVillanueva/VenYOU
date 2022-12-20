import {useState,useEffect, useContext } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';

import React from 'react';

function VenueDetails(props) {
    const {currentVenue, setCurrentEvent, currentEvent} = useContext(DataContext)
    const BASE_URL='http://localhost:8000';
    const navigate=useNavigate();
    const [events, setEvents] = useState([])
    const [counter, setCounter] = useState(0)

useEffect(()=>{
    const getEvents = async() => {
        try{
            const res = await Axios.get(`${BASE_URL}/venue/${currentVenue.name}`)
            console.log(res.data)
            setEvents(res.data.events)
        }
        catch (error) {
            throw error
        }
    }
    getEvents();
    },[counter])

const handleClick = (event) => {
    setCurrentEvent(event)
    navigate('eventDetails')
}

const changeCounter = () =>
{setCounter(counter+1)}

    return (
        <div className='venue-detail-container'>

            <div className='venue-banner' style ={{backgroundImage: `url(${currentVenue.photo_url})`, backgroundSize: 'cover'}}>
                <p className='venue-banner-name'>{currentVenue.name}</p>
            </div>

            <div className='venue-banner-info'>
                <p className='venue-location'>{currentVenue.location}</p>
                <p className='venue-capacity'>Capacity - {currentVenue.capacity}</p>
            </div>

            <div>
                <p className='venue-header'> EVENT</p>
            </div>

            <div>
            {events.length>0?(
            
            <div className="home-grid">
            {
                events.map((event, index)=>(
                    <div style ={{backgroundImage: `url(${event.photo_url})`, backgroundSize: 'cover'}} key={index} className="home-venue-card" onClick={()=>handleClick(event)}>
                        <p className='venue-name'>{event.name}</p>
                    </div>
                ))
            }</div>
            ):<div><h1>Loading</h1><button onClick={changeCounter}>Reload</button></div>}
            
            </div>
        </div>
    );
}

export default VenueDetails;
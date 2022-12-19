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
    //navigate('/venueDetails')
}

const changeCounter = () =>
{setCounter(counter+1)}

    return (
        <div>
            <div className="home-grid">
            {events.length>0?(
            
            <div>
            {
                events.map((event, index)=>(
                    <div key={index} className="home-venue-card" onClick={()=>handleClick(event)}><p>{event.name}</p></div>
                ))
            }</div>
            ):<div><h1>Loading</h1><button onClick={changeCounter}>Reload</button></div>}
            
            </div>
        </div>
    );
}

export default VenueDetails;
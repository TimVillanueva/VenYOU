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
            const res = await Axios.get(`${BASE_URL}/events/${currentEvent.name}`)
            console.log(res.data)
            setEvents(res.data)
        }
        catch (error) {
            throw error
        }
    }
    getEvents();
    },[counter])

const changeCounter = () =>
{setCounter(counter+1)}

    return (
        <div className='venue-detail-container'>

            <div className='venue-banner' style ={{backgroundImage: `url(${currentEvent.photo_url})`, backgroundSize: 'cover'}}>
                <p className='venue-banner-name'>{currentEvent.name}</p>
            </div>

            <div className='venue-banner-info'>
                <p className='venue-capacity'>Date - {currentEvent.date}</p>
                <p className='venue-location'>Price - ${currentEvent.price}</p>
            </div>


            <div>
        
                
                <div className="event-details">
                    
                </div>

            
            </div>
        </div>
    );
}

export default VenueDetails;
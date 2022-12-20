import {useState,useEffect, useContext } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';

import React from 'react';

export default function Events () {
    const {currentVenue, setCurrentEvent, currentEvent} = useContext(DataContext)
    const BASE_URL='http://localhost:8000';
    const [events, setEvents] = useState([])

    const navigate = useNavigate()


    useEffect(()=>{
        const getEvents = async() => {
            try{
                const res = await Axios.get(`${BASE_URL}/events`)
                console.log(res.data)
                setEvents(res.data)
            }
            catch (error) {
                throw error
            }
        }
        getEvents();
        },[])

    
    const handleClick = (event) => {
        setCurrentEvent(event)
        navigate('/eventDetails')
    }



    return (
        <div className='list-of-events'>
            <div className="home-grid">
            {
                events.map((event, index)=>(
                    <div style ={{backgroundImage: `url(${event.photo_url})`, backgroundSize: 'cover'}} key={index} className="home-venue-card" onClick={()=>handleClick(event)}>
                        <p className='venue-name'>{event.name}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
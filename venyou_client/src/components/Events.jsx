import {useState,useEffect, useContext } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext'
import crowd from '../Assets/crowd.png'

import React from 'react';

export default function Events () {
    const {currentVenue, setCurrentEvent, currentEvent} = useContext(DataContext)
    const BASE_URL='http://localhost:8000';
    const [events, setEvents] = useState([])


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
    }



    return (
        <div className='list-of-events'>

            <div className='slogan'>
                <p className='slogan-text'>Your city, your events</p>
                <p className='slogan-text2'>Book memories,</p>
                <p className='slogan-text3'>not just tickets</p>
            </div>

            <div>
                <img className='crowd' src={crowd} alt=''></img>
            </div>

            <div>
                <p className='venue-header'> EVENTS</p>
            </div>

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
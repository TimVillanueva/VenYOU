import React from 'react';
import Axios from 'axios'
import {useState,useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';

function Venue(props) {
    const BASE_URL='http://localhost:8000';
    const navigate=useNavigate();
    const [venues, setVenues] = useState([])
    const {setCurrentVenue} = useContext(DataContext)
    
    useEffect(()=>{
    const getVenues = async() => {
        try{
            const res = await Axios.get(`${BASE_URL}`)
            console.log(res.data)
            setVenues(res.data)
        }
        catch (error) {
            throw error
        }
    }
    getVenues();
    },[])
    
    const handleClick = (venue) => {
        setCurrentVenue(venue)
        navigate('/venueDetails')
    }


    return (
        <div>
            <div className="home-grid">
            {
                venues.map((venue, index)=>(
                    <div key={index} className="home-venue-card" onClick={()=>handleClick(venue)}><p>{venue.name}</p></div>
                ))
            }
            </div>
        </div>
    );
}

export default Venue;
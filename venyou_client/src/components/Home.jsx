import React from 'react';
import Axios from 'axios'
import {useState} from 'react'



function Home(props) {
const BASE_URL='http://localhost:8000';
const [venues, setVenues] = useState([])




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

    return (
        <div>
            {
                venues.map((venue, index)=>(
                    <div key={index} ><p>{venue.name}</p></div>
                ))
            }
        </div>
    );
}

export default Home;
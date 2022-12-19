import React from 'react';
import Axios from 'axios'
import Venue from './Venue'
import {useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'



function Home(props) {


    return (
        <div>
            <Venue/>
        </div>
    );
}

export default Home;
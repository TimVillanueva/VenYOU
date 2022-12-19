import {useState,useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';

import React from 'react';

function VenueDetails(props) {
    const {currentVenue} = useContext(DataContext)

    return (
        <div>
            {currentVenue.name}
        </div>
    );
}

export default VenueDetails;
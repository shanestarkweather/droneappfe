import React, { useState, useEffect } from 'react';
import APIURL from '../../config';
import axios from 'axios';
import './PreFlight.css';

const PreFlight = ({ token }) => {
    
    return (
    <div>
        <form onSubmit={handleSubmit} className='preFlight-form'>
            
        </form>
    </div>
    );
};

export default PreFlight;

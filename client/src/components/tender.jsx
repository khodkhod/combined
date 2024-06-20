import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

const SpotifyAuth = () => {
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const client_id = 'your-client-id'; // Replace with your actual client ID
        const client_secret = 'your-client-secret'; // Replace with your actual client secret

        const tokenEndpoint = 'https://accounts.spotify.com/api/token';

        const data = {
            grant_type: 'client_credentials',
            client_id: client_id,
            client_secret: client_secret
        };

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        axios.post(tokenEndpoint, qs.stringify(data), { headers: headers })
            .then(response => {
                setAccessToken(response.data.access_token);
                console.log('Access Token:', response.data.access_token);
                // Save the access token to use in future requests
            })
            .catch(error => {
                console.error('Error fetching access token:', error);
            });
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div>
            <h1>Spotify API Auth</h1>
            {accessToken ? <p>Access Token: {accessToken}</p> : <p>Fetching access token...</p>}
        </div>
    );
};

export default SpotifyAuth;

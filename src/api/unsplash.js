import axios from 'axios';

export default axios.create({//comon parametars API request
    baseURL: 'https://api.unsplash.com',
    headers: {//unsplash->Authorization
        Authorization: 
            'Client-ID b4e0dfb04c649fd9721a5ed3a99adbcde1803c6e24ca0d174d7566ec14b9c5d5'
    }
})
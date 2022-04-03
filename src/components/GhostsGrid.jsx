import {useEffect, useState} from 'react';
import {GhostCard} from './GhostCard'

export const GhostsGrid = () => {
    const [ghosts, setGhosts] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setGhosts(data);
            setIsLoading(false);
        })
    }, []);
}
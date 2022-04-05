import { useEffect, useState } from 'react';
import { GhostCard } from './GhostCard'
import data from '../utils/ghosts'
import { Spinner } from './Spinner';
import styles from '../styles/GhostsGrid.module.css';

export function GhostsGrid({search}) {
    const [ghosts, setGhosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        setGhosts([...data].filter(ghost => ghost?.name.toLowerCase().includes(search?.toLowerCase())))
        setIsLoading(false)
    }, [search])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div >
            <ul className={styles.ghostsGrid}>
                {ghosts.map(ghost => (
                    <GhostCard key={ghost?.name} ghost={ghost} />
                ))}
            </ul>
        </div>
    )
}

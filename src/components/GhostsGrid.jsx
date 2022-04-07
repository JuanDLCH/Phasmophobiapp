import { useEffect, useState } from 'react';
import { GhostCard } from './GhostCard'
import data from '../utils/ghosts'
import { Spinner } from './Spinner';
import styles from '../styles/GhostsGrid.module.css';

export function GhostsGrid({ search }) {
    const [ghosts, setGhosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [evids, setEvids] = search ? useState([search.split(',')]) : useState([''])

    useEffect(() => {
        var evid1 = evids[0][1]
        var evid2 = evids[0][2]
        var evid3 = evids[0][3]
        console.log(evid1)
        console.log(evid2)
        console.log(evid3)
        setIsLoading(true)
        //setGhosts([...data].filter(ghost => ghost?.name.toLowerCase().includes(search?.toLowerCase())))
        if (evids[0].length === 2) {
            setGhosts([...data].filter(ghost => (ghost.primaryEvidences.includes(evid1))))
        } else if (evids[0].length === 3) {
            setGhosts([...data].filter(ghost => (ghost.primaryEvidences.includes(evid1) && ghost.primaryEvidences.includes(evid2))))
        } else if (evids[0].length === 4) {
            setGhosts([...data].filter(ghost => (ghost.primaryEvidences.includes(evid1) && ghost.primaryEvidences.includes(evid2) && ghost.primaryEvidences.includes(evid3))))
        } else {
            setGhosts([...data])
        }

        if (!search?.includes(',')) {
            setGhosts([...data].filter(ghost => ghost?.name.toLowerCase().includes(search?.toLowerCase())))
        }
        console.log(search)
        console.log[evids[0]]
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

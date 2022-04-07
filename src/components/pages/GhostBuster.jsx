import { GhostsGrid } from '../GhostsGrid';
import EvidenceSelector from '../EvidenceSelector';
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce';
import styles from '../../styles/LandingPage.module.css'

export const GhostBuster = () => {
    return(
        <div className={styles.body}>
            <h1 className={styles.title}>GHOST BUSTER</h1>
            <EvidenceSelector/>
            <GhostsGrid />
        </div>
    )

}
import { GhostsGrid } from '../components/GhostsGrid';
import EvidenceSelector from '../components/EvidenceSelector';
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../hooks/useDebounce';
import styles from '../styles/GhostBuster.module.css'

export const GhostBuster = () => {

    const [query] = useSearchParams();
    const search = query.get('evs');

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>GHOST BUSTER</h1>
            <div className={styles.parent}>
                <GhostsGrid key={search} search={search} />
                <EvidenceSelector className={styles.selector} />
            </div>
        </div>
    )

}
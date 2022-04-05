import { GhostsGrid } from '../GhostsGrid';
import { SearchBar } from '../SearchBar'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce';
import styles from '../../styles/LandingPage.module.css'

export const LandingPage = () => {
    const[query] = useSearchParams();
    const search = query.get('search');

    const debouncedSearch = useDebounce(search, 300);

    return(
        <div className={styles.body}>
            <h1 className={styles.title}>Phasmophobia Ghosts Info</h1>
            <SearchBar/>
            <GhostsGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    )

}
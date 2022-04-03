import { GhostsGrid } from '../GhostsGrid';
import { SearchBar } from '../SearchBar'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce';

export const LandingPage = () => {
    const[query] = useSearchParams();
    const search = query.get('search');

    const debouncedSearch = useDebounce(search, 300);

    return(
        <div>
            <SearchBar/>
            <GhostsGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    )

}
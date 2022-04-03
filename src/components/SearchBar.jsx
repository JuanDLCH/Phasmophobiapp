import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/SearchBar.module.css";

export const SearchBar = () => {
    const [query, setQuery] = useSearchParams();
    const search = query.get('search') ?? '';

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeInput = (e) => {
        const text = e.target.value;
        setQuery({ search: text });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput}
                    autoFocus
                    type="text" 
                    value={search} 
                    onChange={handleChangeInput} 
                    placeholder='Looking for a ghost?'
                    aria-label="Search ghosts"
                />
                <FaSearch size={20} color='Black' className={styles.searchIcon}/>
            </div>
        </form>
    )
}
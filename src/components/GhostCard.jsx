import styles from "../styles/GhostCard.module.css";
import { useEffect, useState } from 'react';
import data from '../utils/images'
import { Spinner } from './Spinner';
import { Link } from 'react-router-dom';

export const GhostCard = ({ ghost }) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        setImages([...data])
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <Spinner />
    }

    const { name } = ghost
    return (
        //tarjeta con imagenes traidas en orden
        <li className={styles.ghostCard}>
            <Link to={`/ghosts/${name}`}>
                <img
                    width={230}
                    height={345}
                    src={images[Math.floor(Math.random() * images.length)].link}
                    alt={name}
                    className={styles.ghostImage}
                />
                <h2>{name}</h2>
            </Link>

        </li>
    );
}
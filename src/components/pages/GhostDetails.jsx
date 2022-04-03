import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Spinner } from '../Spinner';
import styles from '../../styles/GhostDetails.module.css';
import data from '../../utils/ghosts'
import imgs from '../../utils/images'

export const GhostDetails = () => {
    const { name } = useParams();
    const [ghost, setGhost] = useState(null);
    const [images, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setGhost([...data].find(ghost => ghost.name === name));
        setImage([...imgs]);
        setIsLoading(false);
    }, [name]);

    if (isLoading) {
        return <Spinner />;
    }

    const { name: ghostName, primaryEvidences, secondaryEvidences, desc, strenghts, weaknesses } = ghost;

    return (
        <div className={styles.ghostDetails}>
            <h1>{ghostName}</h1>
            <div className={styles.ghostDetails__evidences}>
                <h2>Primary Evidences</h2>
                <ul>
                    {primaryEvidences.map(evidence => (
                        <li key={evidence}>{evidence}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.ghostDetails__evidences}>
                <h2>Secondary Evidences</h2>
                <ul>
                    {secondaryEvidences.map(evidence => (
                        <li key={evidence}>{evidence}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.ghostDetails__desc}>
                <h2>Description</h2>
                <p>{desc}</p>
            </div>
            <div className={styles.ghostDetails__strenghts}>
                <h2>Strenghts</h2>
                <ul>
                    {strenghts.map(strength => (
                        <li key={strength}>{strength}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.ghostDetails__weaknesses}>
                <h2>Weaknesses</h2>
                <ul>
                    {weaknesses.map(weakness => (
                        <li key={weakness}>{weakness}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.ghostDetails__image}>
                <img
                    width={230}
                    height={345}
                    src={images[Math.floor(Math.random() * images.length)].link}
                    alt={ghostName}
                    className={styles.ghostImage}
                />
            </div>
        </div>

    );
}

import styles from '../../styles/VoiceLines.module.css'
import { voicelines } from '../../utils/voicelines'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export const VoiceLines = () => {
    const { name } = useParams();
    const [data, setData] = useState([...voicelines[name]]);

    useEffect(() => {
        setData([...voicelines[name]]);
    }, [name]);

    return (
        <div className={styles.body}>
            <ul className={styles.linesList} style={{marginTop: '10vh'}}>
                {data.map(voiceline => (
                    <li key={voiceline}>
                        {voiceline}
                    </li>
                ))}
            </ul>
        </div>
    )

}
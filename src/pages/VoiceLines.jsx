import styles from '../styles/VoiceLines.module.css'
import { voicelines } from '../utils/voicelines'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

export const VoiceLines = () => {
    const { name } = useParams();
    const [data, setData] = useState([...voicelines[name]]);

    useEffect(() => {
        setData([...voicelines[name]]);
    }, [name]);

    const variants = ['primary, secondary, success, danger, warning, info, light, dark']

    return (
        <div>
            <h1 className={styles.title}>VOICELINES: {name.toUpperCase()}</h1>
            <ListGroup className={styles.linesList} style={{ marginTop: '5vh' }}>
                {data.map(voiceline => (
                    <ListGroup.Item style={{textAlign: 'center', margin: '2px', borderRadius: '20px'} } key={voiceline} variant={'success'}>
                        {voiceline}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )

}
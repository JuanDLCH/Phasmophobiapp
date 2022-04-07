import Form from 'react-bootstrap/Form';
import { useSearchParams } from "react-router-dom";
import * as React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../styles/EvidenceSelector.module.css';
import data from '../utils/ghosts'
import { Accordion, ListGroup } from 'react-bootstrap';

export default function EvidenceSelector() {
    const evidences = ['D.O.T.S. Projector', 'EMF Level 5', 'Fingerprints', 'Freezing Temperature', 'Ghost Orbs', 'Ghost Writing', 'Spirit Box']
    const [ghosts, setGhosts] = useState([])
    const [selected, setSelected] = useState([])
    const [query, setQuery] = useSearchParams();

    let secondaries = []

    useEffect(() => {
        secondaries = getSecondaries()
        setGhosts([...data])
        if (selected.length > 2) {
            disableNonSelected()
            document.getElementById('3evs').hidden = false
        } else {
            enableNonSelected()
            document.getElementById('3evs').hidden = true
        }

        setQuery({ evs: ',' + selected.join(',') })

    }, [selected])

    function getSecondaries() {
        let secondaries = []
        for (var i = 0; i < ghosts.length; i++) {
            for (var j = 0; j < ghosts[i].secondaryEvidences.length; j++) {
                secondaries.push(ghosts[i].secondaryEvidences[j])
            }
        }
        return secondaries
    }


    const handleChange = (e) => {
        if (e.target.checked) {
            setSelected([...selected, e.target.id])
            selected.push(e.target.id)
        } else {
            setSelected(selected.filter(ev => ev !== e.target.id))
        }
        setQuery({ evs: selected.join(',') })
        console.log(secondaries)

    }

    function enableNonSelected() {
        for (var i = 0; i < evidences.length; i++) {
            if (!selected.includes(evidences[i])) {
                document.getElementById(evidences[i]).disabled = false;
            }
        }
    }

    function disableNonSelected() {
        for (var i = 0; i < evidences.length; i++) {
            if (selected.indexOf(evidences[i]) === -1) {
                document.getElementById(evidences[i]).disabled = true;
            }
        }
    }

    return (
        <div className={styles.khe}>
            <Form className={styles.form}>
                <div className={styles.parent}>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Primary Evidences</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black"}}>
                                    <ListGroup>
                                        {evidences.map((evidence) => (
                                            <ListGroup.Item variant='primary'>
                                                <Form.Check
                                                    id={evidence}
                                                    type="switch"
                                                    label={evidence}
                                                    key={evidence}
                                                    onChange={handleChange}
                                                />
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <p id='3evs' hidden>There's only 3 evidences per ghost</p>
                    </div>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Secondary Evidences</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black"}}>
                                    <ListGroup>
                                        {getSecondaries().map((evidence) => (
                                            <ListGroup.Item variant={'success'}>
                                                <Form.Check
                                                    id={evidence}
                                                    type="switch"
                                                    label={evidence}
                                                    key={evidence}
                                                    onChange={handleChange}
                                                />
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Form>
        </div>
    )
}
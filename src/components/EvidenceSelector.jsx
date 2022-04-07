import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import data from '../utils/ghosts'

export default function EvidenceSelector() {
    const evidences = ['D.O.T.S Projector', 'EMF Level 5', 'Fingerprints', 'Freezing Temperature', 'Ghost Orbs', 'Ghost Writing', 'Spirit Box']
    var selected = []

    const handleChange = (e) => {
        if (e.target.checked) {
            selected.push(e.target.id)
        } else {
            selected.splice(selected.indexOf(e.target.id), 1)
        }

        if (selected.length > 2) {
            disableNonSelected()
            document.getElementById('3evs').hidden = false
        } else {
            enableNonSelected()
            document.getElementById('3evs').hidden = true
        }
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
        <div>
            <Form>
                {evidences.map((evidence) => (
                    <Form.Check
                        id={evidence}
                        type="switch"
                        label={evidence}
                        key={evidence}
                        onChange={handleChange}
                    />
                ))}
                <br></br>
                <p id='3evs' hidden>There's only 3 evidences per ghost</p>
            </Form>
        </div>
    )
}
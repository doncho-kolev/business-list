import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from '../../features/list/Row';
import ListComponent from '../../features/list/ListComponent';
import { Business } from '../../models/Business';

export default function BusinessList() {
    const businesses: Business[] = [];
    const navigate = useNavigate();
    return (
        <div>
            <Row cells={[
                { label: "Name" },
                { label: "Description" }
            ]}
                className={"header-row"}
            />
            <ListComponent rows={businesses.map(b => {
                return {
                    cells: [
                        { label: b.name },
                        { label: b.description || "" },
                    ],
                    onClick: () => {
                        navigate(`/business/${b.id}`)
                    }
                }
            })} />
        </div>
    );
}

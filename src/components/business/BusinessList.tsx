import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListComponent from '../../features/list/ListComponent';
import { useGetBisunesses } from '../../services/useGetBusinesses';
import { Business } from '../../models/Business';

export default function BusinessList(props: { businesses: Business[], valueGetter: (business: Business) => string }) {
    const { businesses, valueGetter } = props;
    const navigate = useNavigate();

    return <ListComponent rows={businesses.map(b => {
        return {
            cells: [
                { label: b.name, className: "name-cell" },
                { label: valueGetter(b), className: "description-cell" },
            ],
            onClick: () => {
                navigate(`/business/${b.id}`)
            }
        }
    })} />;
}

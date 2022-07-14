import React from 'react';
import { useGetBisunesses } from '../../services/useGetBusinesses';
import BusinessList from './BusinessList';
import { Row } from '../../features/list/Row';


export default function AllBusiness() {
    const { loading, error, businesses } = useGetBisunesses();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            <Row
                cells={[
                { label: "Name" },
                { label: "Description" }
            ]}
                className={"header-row"}
            />
            <BusinessList
                businesses={businesses}
                valueGetter={b => b.description ?? ''}
            />
        </div>
    );
}

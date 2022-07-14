import React from 'react';
import { useGetBisunesses } from '../../services/useGetBusinesses';
import BusinessList from './BusinessList';
import { Row } from '../../features/list/Row';
import '../../assets/styles/allBusinesses.scss';


export default function AllBusiness() {
    const { loading, error, businesses } = useGetBisunesses();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div className={"container businesses-container"}>
            <div className={"scroll"}>
                <Row
                    cells={[
                        { label: "Name", className: "name-cell" },
                        { label: "Description", className: "description-cell" }
                    ]}
                    className={"header-row"}
                />
                <BusinessList
                    businesses={businesses}
                    valueGetter={b => b.description ?? ''}
                />
            </div>
        </div>
    );
}

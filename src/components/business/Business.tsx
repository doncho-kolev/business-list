import React from 'react';
import { useGetBisunesses } from '../../services/useGetBusinesses';
import { useParams } from 'react-router-dom';
import BusinessList from './BusinessList';
import '../../assets/styles/business.scss'

export default function Business() {
    const { loading, error, businesses } = useGetBisunesses();
    const { id } = useParams<{ id: string }>();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;


    const business = businesses.find(b => b.id === id);
    if (!business) return <p>Entity not found</p>;

    const nearBusinesses = businesses.filter(b => b.address?.city === business.address?.city);

    return (
        <div className={"container"}>
            <div>
                <img src={business.image} className={"main-image"} />
            </div>
            <div className={"information"}>
                <div className={"section"}>
                    <div className={"header"}>Address</div>
                    <div>{business.address?.number ?? ''} {business.address?.street ?? ''}</div>
                    <div>{business.address?.city ?? ''}, {business.address?.zip ?? ''}</div>
                </div>
                <div className={"section"}>
                    <div className={"header"}>Contact</div>
                    <div>{business.phone ?? ''}</div>
                    <div>{business.email}</div>
                </div>
                <div className={"section section-big"}>
                    <div className={"header"}>
                        Nearby Places
                    </div>
                    <div>
                        <BusinessList
                            businesses={nearBusinesses}
                            valueGetter={b => `${business.address?.number ?? ''} ${business.address?.street ?? ''}, ${business.address?.city ?? ''}, ${business.address?.zip ?? ''}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import { useGetBisunesses } from '../../services/useGetBusinesses';
import { useParams } from 'react-router-dom';
import BusinessList from './BusinessList';


export default function Business() {
    const { loading, error, businesses } = useGetBisunesses();
    const { id } = useParams<{ id: string }>();
    const business = businesses.find(b => b.id === id);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    if (!business) return <p>Entity not found</p>;

    const nearBusinesses = businesses.filter(b => b.address?.city === business.address?.city);

    return (
        <div>
            <div>
                <img src={business.image} />
            </div>
            <div>
                <div>Address</div>
                <div>{business.address?.number ?? ''} {business.address?.street ?? ''}</div>
                <div>{business.address?.city ?? ''}, {business.address?.zip ?? ''}</div>
            </div>
            <div>
                <div>Contact</div>
                <div>{business.phone ?? ''}</div>
                <div>{business.email}</div>
            </div>
            <div>
                <div>
                    Nearby Places
                </div>
                <div>
                    <BusinessList
                        businesses={nearBusinesses}
                        valueGetter={b => `${business.address?.number ?? ''} ${business.address?.street ?? ''}, ${business.address?.city ?? ''}, ${business.address?.zip ?? ''}`} />
                </div>
            </div>
        </div>
    );
}
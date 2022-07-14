import React from 'react';
import { render, screen } from '@testing-library/react';
import AllBusinesses from '../../../components/business/AllBusinesses';
import * as GetBusinessesService from '../../../services/useGetBusinesses';

jest.mock('../../../components/business/BusinessList', () => ()=> {
return <div>Business List</div>
})

describe("All Businesses List", () => {

    test('renders all businesses component', () => {
        jest.spyOn(GetBusinessesService, "useGetBisunesses").mockImplementation(() => ({
            businesses: [{
                name: "test",
                description: "description for test"
            }]
        }))
        const mount = render(<AllBusinesses />);
        expect(mount.asFragment().children[0]).toMatchSnapshot();
    });
});

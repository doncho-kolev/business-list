import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import BusinessList from '../../../components/business/BusinessList';
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}))
import * as Router from 'react-router-dom';

describe("Businesses List", () => {

    test('renders businesses list and click on entry', async () => {
        const valueGetterSpy = jest.fn();
        valueGetterSpy.mockReturnValue("Test Return Value");
        const routerSpy = jest.fn();
        jest.spyOn(Router, 'useNavigate').mockImplementation(() => routerSpy);
        const mount = render(<BusinessList businesses={[
            {
                id: "testId",
                name: "Test Name"
            }
        ]}
            valueGetter={valueGetterSpy}
        />);
        expect(mount.asFragment().children[0]).toMatchSnapshot();
        const row = await mount.findByText("Test Name");
        await userEvent.click(row);
        expect(routerSpy).toHaveBeenCalledWith(`/business/testId`);
        
    });
});

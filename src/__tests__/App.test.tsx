import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
    const mount = render(<App />);
    expect(mount.asFragment().children[0]).toMatchSnapshot();
});

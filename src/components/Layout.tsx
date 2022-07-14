import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Layout(props: { children?: ReactNode }) {
    const { children } = props;
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={() => navigate("/")}>
                Logo
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

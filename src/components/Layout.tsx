import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/layout.scss';

export default function Layout(props: { children?: ReactNode }) {
    const { children } = props;
    const navigate = useNavigate();
    return (
        <div className={"app-container"}>
            <div onClick={() => navigate("/")} className={"logo"}>
                Logo
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

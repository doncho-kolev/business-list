import React, { ReactNode } from 'react';

export default function Layout(props: { children?: ReactNode }) {
    const { children } = props;
    return (
        <div>
            <div>
                Logo
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

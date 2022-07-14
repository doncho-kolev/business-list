import React from 'react';
import { Cell } from './Row';
import { Row } from './Row';
export default function ListComponent(props: {
    rows: {
        cells: Cell[];
        onClick?: () => void
    }[]
}) {
    const { rows } = props;
    return <div>
        {!rows.length ? "No elements found" :
            <ul>
                {rows.map((r, index) => {
                    return <li
                        onClick={r.onClick}
                        key={index} >
                        <Row cells={r.cells} />
                    </li>
                })}
            </ul>
        }
    </div>;
}

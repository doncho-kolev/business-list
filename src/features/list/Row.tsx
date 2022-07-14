import React from 'react';

export interface Cell {
    label: string;
    className?: string;
}

export function Row(props: { cells: Cell[], className?: string }) {
    const { cells, className } = props;
    return <div className={className ?? ""}>
        {!cells.length ? "no data for row" :
            cells.map((c, index) => <CellComponent cell={c} key={index} />)
        }
    </div>
}

function CellComponent(props: { cell: Cell }) {
    const { cell } = props;
    return <div className={cell.className ?? ""}>
        {cell.label}
    </div>
}
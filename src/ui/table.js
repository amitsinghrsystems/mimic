import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const DataTable = ({
    rows,
    columns,
    stylecss,
    pageSize
}) => {
    return (
        <div style={stylecss}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}


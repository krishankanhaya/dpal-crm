import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../App.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Action', headerName: 'Action', width: 130 },
  { field: 'Lead Assign', headerName: 'Lead Assign', width: 130 },
  { field: 'Customer Name', headerName: 'Customer Name', width: 130 },
  { field: 'Email Id', headerName: 'Email Id', width: 130 },
  { field: 'Mobile No.', headerName: 'Mobile No.', width: 130 },
  { field: 'Purpose', headerName: 'Purpose', width: 130 },
  { field: 'Employee Type', headerName: 'Employee Type', width: 130 },
  { field: 'Loan Required', headerName: 'Loan Required', width: 130 },
  { field: 'Monthly Income', headerName: 'Monthly Income', width: 130 },
  { field: 'City', headerName: 'City', width: 130 },
  { field: 'State', headerName: 'State', width: 130 },
  { field: 'Pincode', headerName: 'Pincode', width: 130 },
  { field: 'Utm Source', headerName: 'Utm Source', width: 130 },
  { field: 'Source', headerName: 'Source', width: 130 },
  { field: 'Status', headerName: 'Status', width: 130 },
  { field: 'Date', headerName: 'Date', width: 130 },
];
export default function DataTable( props ) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
      />
    </div>
  );
}

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid2 } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const columns = [
  { field: 'category', headerName: 'CATEGORIES', width: 300 },
  { field: 'totalProducts', headerName: 'TOTAL PRODUCTS', width: 300 },
  { field: 'totalEarning', headerName: 'TOTAL EARNING', width: 300 },
  {
    field: 'action',
    headerName: 'ACTION',
    renderCell: (params) => (
      <strong>
    <DriveFileRenameOutlineIcon sx={{mr:2}}/>   <MoreVertIcon/>
      </strong>
    ),
  },
];

const rows = [
  { id: 1, category: 'Electronics', totalProducts: 120, totalEarning: '$12,000' },
  { id: 2, category: 'Clothing', totalProducts: 80, totalEarning: '$5,000' },
  { id: 3, category: 'Home Appliances', totalProducts: 60, totalEarning: '$3,000' },
  { id: 4, category: 'Books', totalProducts: 200, totalEarning: '$4,000' },
  { id: 5, category: 'Toys', totalProducts: 150, totalEarning: '$2,500' },
];

const paginationModel = { page: 0, pageSize: 5 };

const handleAction = (row) => {
  console.log('Action clicked for row:', row);
};

const CategoryList = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <Item>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, display: 'flex' } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Search Category"
                  variant="outlined"
                  sx={{ width: '40ch', height: '40px' }} 
                />
              </Box>
            </Item>
          </Grid2>
        </Grid2>
      </Box>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
};

export default CategoryList;

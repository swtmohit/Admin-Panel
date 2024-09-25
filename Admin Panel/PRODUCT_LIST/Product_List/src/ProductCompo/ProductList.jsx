import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import RedeemIcon from '@mui/icons-material/Redeem';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import PrintIcon from '@mui/icons-material/Print';
import FeedIcon from '@mui/icons-material/Feed';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { NavLink } from 'react-router-dom';


const columns = [
  { field: 'product', headerName: 'PRODUCT', width: 200, align: 'center' },
  { field: 'category', headerName: 'CATEGORY', width: 200, align: 'center' },
  { field: 'stock', headerName: 'STOCK', width: 200, align: 'center' },
  { field: 'sku', headerName: 'SKU', type: 'number', width: 200, align: 'center' },
  { field: 'price', headerName: 'PRICE', width: 200, align: 'center' },
  { field: 'qty', headerName: 'QTY', width: 200, align: 'center' },
  { field: 'status', headerName: 'STATUS', width: 200, align: 'center' },
];

const rows = [
  { id: 1, product: 'Snow', category: 'Winter', stock: 'Low', sku: 101, price: 35.00, qty: 10, status: 'Available' },
  { id: 2, product: 'Lannister', category: 'Summer', stock: 'High', sku: 102, price: 42.00, qty: 15, status: 'Out of Stock' },
  { id: 3, product: 'Lannister', category: 'Winter', stock: 'Medium', sku: 103, price: 45.00, qty: 20, status: 'Available' },
  { id: 4, product: 'Stark', category: 'Spring', stock: 'Low', sku: 104, price: 16.00, qty: 5, status: 'Available' },
  { id: 5, product: 'Targaryen', category: 'Fall', stock: 'High', sku: 105, price: null, qty: 8, status: 'Limited' },
  { id: 6, product: 'Melisandre', category: 'Winter', stock: 'Medium', sku: 106, price: 150.00, qty: 2, status: 'Available' },
  { id: 7, product: 'Clifford', category: 'Summer', stock: 'Low', sku: 107, price: 44.00, qty: 12, status: 'Out of Stock' },
  { id: 8, product: 'Frances', category: 'Spring', stock: 'High', sku: 108, price: 36.00, qty: 18, status: 'Available' },
  { id: 9, product: 'Roxie', category: 'Fall', stock: 'Medium', sku: 109, price: 65.00, qty: 25, status: 'Available' },
  { id: 10, product: 'Snow', category: 'Winter', stock: 'Low', sku: 110, price: 35.00, qty: 10, status: 'Available' },
  { id: 11, product: 'Lannister', category: 'Summer', stock: 'High', sku: 111, price: 42.00, qty: 15, status: 'Out of Stock' },
  { id: 12, product: 'Lannister', category: 'Winter', stock: 'Medium', sku: 112, price: 45.00, qty: 20, status: 'Available' },
  { id: 13, product: 'Stark', category: 'Spring', stock: 'Low', sku: 113, price: 16.00, qty: 5, status: 'Available' },
  { id: 14, product: 'Targaryen', category: 'Fall', stock: 'High', sku: 114, price: null, qty: 8, status: 'Limited' },
  { id: 15, product: 'Melisandre', category: 'Winter', stock: 'Medium', sku: 115, price: 150.00, qty: 2, status: 'Available' },
  { id: 16, product: 'Clifford', category: 'Summer', stock: 'Low', sku: 116, price: 44.00, qty: 12, status: 'Out of Stock' },
  { id: 17, product: 'Frances', category: 'Spring', stock: 'High', sku: 117, price: 36.00, qty: 18, status: 'Available' },
  { id: 18, product: 'Roxie', category: 'Fall', stock: 'Medium', sku: 118, price: 65.00, qty: 25, status: 'Available' },
  { id: 19, product: 'Roxie', category: 'Fall', stock: 'Medium', sku: 119, price: 65.00, qty: 25, status: 'Available' },
  { id: 20, product: 'Roxie', category: 'Fall', stock: 'Medium', sku: 120, price: 65.00, qty: 25, status: 'Available' },
];

const paginationModel = { page: 0, pageSize: 5 };





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

const ProductList = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 0 }}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Item
              sx={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 1
              }}
            >
              <Box sx={{ ml: 2, mt: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">In-store Sales</Typography>
                <DraftsIcon sx={{ mr: 1, ml: 22, fontSize: 30 }} />
              </Box>
              <Typography variant="h5" sx={{ color: 'black', mt: 1, ml: 2 }}>$5,345.43</Typography>

              <Box sx={{ ml: 2, mt: 1, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="span">5k orders</Typography>
                <Typography variant="body1" component="span" sx={{ ml: 1, border: '1px solid #ddf6e8', paddingX: 1, backgroundColor: '#ddf6e8', color: '#28c76f', borderRadius: '5px' }}>+5.7%</Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Item
              sx={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 1
              }}
            >
              <Box sx={{ ml: 2, mt: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">Website Sales</Typography>
                <LaptopWindowsIcon sx={{ mr: 1, ml: 22, fontSize: 30 }} />
              </Box>
              <Typography variant="h5" sx={{ color: 'black', mt: 1, ml: 2 }}>$674,347.12</Typography>

              <Box sx={{ ml: 2, mt: 1, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="span">21k orders</Typography>
                <Typography variant="body1" component="span" sx={{ ml: 1, border: '1px solid #ddf6e8', paddingX: 1, backgroundColor: '#ddf6e8', color: '#28c76f', borderRadius: '5px' }}>+12.4%</Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Item
              sx={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 1
              }}
            >
              <Box sx={{ ml: 2, mt: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">Discount</Typography>
                <RedeemIcon sx={{ mr: 1, ml: 22, fontSize: 30 }} />
              </Box>
              <Typography variant="h5" sx={{ color: 'black', mt: 1, ml: 2 }}>$14,235.12</Typography>

              <Box sx={{ ml: 2, mt: 1, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="span">6k orders</Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Item
              sx={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 1
              }}
            >
              <Box sx={{ ml: 2, mt: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">Affiliate</Typography>
                <AccountBalanceWalletIcon sx={{ mr: 1, ml: 22, fontSize: 30 }} />
              </Box>
              <Typography variant="h5" sx={{ color: 'black', mt: 1, ml: 2 }}>$8,345.23</Typography>

              <Box sx={{ ml: 2, mt: 1, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="span">150 orders</Typography>
                <Typography variant="body1" component="span" sx={{ ml: 1, border: '1px solid #ddf6e8', paddingX: 1, backgroundColor: '#ffe2e3', color: '#ff4c51', borderRadius: '5px' }}>-3.5%</Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 2 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'start' }}>
              Filter
            </Typography>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
              flexWrap: 'wrap',
              '@media (max-width: 900px)': {
                flexDirection: 'column',
                gap: 3
              }
            }}>
              <Box sx={{ minWidth: 120, width: { xs: '100%', md: 400 } }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Status</MenuItem>
                    <MenuItem value={20}>Scheduled</MenuItem>
                    <MenuItem value={30}>Publish</MenuItem>
                    <MenuItem value={40}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 120, width: { xs: '100%', md: 400 } }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Category</MenuItem>
                    <MenuItem value={20}>Household</MenuItem>
                    <MenuItem value={30}>Office</MenuItem>
                    <MenuItem value={40}>Electronics</MenuItem>
                    <MenuItem value={50}>Shoes</MenuItem>
                    <MenuItem value={60}>Accessories</MenuItem>
                    <MenuItem value={70}>Game</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 120, width: { xs: '100%', md: 400 } }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Stocks</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Stocks"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Stock</MenuItem>
                    <MenuItem value={20}>Out Of Stock</MenuItem>
                    <MenuItem value={30}>In Stock</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Item>


        </Grid>
      </Grid>


      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid size={12}>
            <Item
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: { xs: '100%', sm: '25ch' } },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  size="small"
                  InputProps={{ sx: { height: 40 } }}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                <Box sx={{ minWidth: 120, width: { xs: '100%', sm: '100px' } }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label" sx={{ display: 'flex', alignItems: 'center' }}>
                      <FileUploadIcon />Export
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}><PrintIcon sx={{ mr: 1 }} /> Print</MenuItem>
                      <MenuItem value={20}><FeedIcon sx={{ mr: 1 }} />Csv</MenuItem>
                      <MenuItem value={30}><FileOpenIcon sx={{ mr: 1 }} />Excel</MenuItem>
                      <MenuItem value={30}><PictureAsPdfIcon sx={{ mr: 1 }} />PDF</MenuItem>
                      <MenuItem value={30}><ContentCopyIcon sx={{ mr: 1 }} />Copy</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button variant='contained'>
                  <NavLink
                    to={"/Add_Product"}
                    style={{
                      textDecoration: 'none', 
                      color: 'white' 
                    }}
                  >
                    Add Product
                  </NavLink>
                </Button>

              </Box>
            </Item>
            <Paper sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 15, 20]}
                checkboxSelection
                sx={{ border: 0 }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductList
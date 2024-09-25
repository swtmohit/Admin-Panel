import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';
import LockIcon from '@mui/icons-material/Lock';
import { blue } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RadioGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';




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

const AddProduct = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [value, setValue] = useState(0);

    const handleIncrease = () => {
        setValue(prev => prev + 1);
    };

    const handleDecrease = () => {
        setValue(prev => Math.max(prev - 1, 0));
    };
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <Item sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            gap: { xs: 2, sm: 0 },
                            mb: 2
                        }}>
                            <Box sx={{ flex: 1, textAlign: 'start' }}>
                                <Typography variant='h5'>
                                    Add a new Product
                                </Typography>
                                <Typography variant='body2' sx={{ mt: 2 }}>
                                    Orders placed across your store
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 1,
                                mt: { xs: 2, sm: 0 }
                            }}>
                                <Button variant='contained' disabled sx={{ fontWeight: '700' }}>Discard</Button>
                                <Button variant='contained' sx={{ backgroundColor: '#e9e7fd', color: '#7376f0' }}>Save draft</Button>
                                <Button variant='contained' sx={{ backgroundColor: '#7376f0', color: 'white' }}>Publish Product</Button>
                            </Box>
                        </Item>

                    </Grid>
                </Grid>
            </Box>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Item>
                        <Grid size={7} sx={{ width: '100%' }}>
                            <Item>
                                <Typography variant='h6' sx={{ mb: 2 }}>
                                    Product information
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        width: '100%'
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Name"
                                        variant="outlined"
                                        placeholder="Product title"
                                        sx={{
                                            width: '100%',
                                            height: '40px',
                                            '& .MuiInputBase-root': { height: '40px' }
                                        }}
                                    />
                                </Box>

                                <Box sx={{ mt: 2, width: '100%' }}>
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="outlined-sku"
                                                label="SKU"
                                                variant="outlined"
                                                placeholder="SKU"
                                                sx={{
                                                    width: '100%',
                                                    height: '40px',
                                                    '& .MuiInputBase-root': { height: '40px' }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="outlined-barcode"
                                                label="Barcode"
                                                variant="outlined"
                                                placeholder="1234-567"
                                                sx={{
                                                    width: '100%',
                                                    height: '40px',
                                                    '& .MuiInputBase-root': { height: '40px' }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Item>
                        </Grid>
                    </Item>
                    <Grid size={7} sx={{ mt: 2, width: '100%' }}>
                        <Item>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='h6'>
                                    Variants
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ mt: 2 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Options</InputLabel>
                                        <Select
                                            sx={{ width: '300px', height: '50px' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            placeholder='Size'
                                            label="Age"
                                            width="20px"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Size</MenuItem>
                                            <MenuItem value={20}>Color</MenuItem>
                                            <MenuItem value={30}>Weight</MenuItem>
                                            <MenuItem value={30}>Smell</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ width: '30%' }}>
                                    <Typography>
                                        Enter Size
                                    </Typography>
                                    <TextField
                                        type="number"
                                        value={value}
                                        placeholder='Enter size'
                                        onChange={(e) => setValue(Number(e.target.value))}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                        onClick={handleDecrease}
                                                        size="small"
                                                    >
                                                    </IconButton>
                                                    <IconButton
                                                        edge="end"
                                                        onClick={handleIncrease}
                                                        size="small"
                                                    >
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                        sx={{ width: '100%' }}
                                    />
                                </Box>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid size={7} sx={{ display: 'flex' }}>
                        <Item sx={{ background: '#ccc', width: '80%' }}>
                            <Typography>
                                Inventory
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, background: '#ccc' }}>
                                <Button
                                    sx={{ mb: 1, color: 'white', backgroundColor: activeButton === 'restock' ? '#978ef4' : 'inherit' }}
                                    onClick={() => handleButtonClick('restock')}
                                >
                                    <ViewInArIcon /> Restock
                                </Button>
                                <Button
                                    sx={{ mb: 1, color: 'white', backgroundColor: activeButton === 'shipping' ? '#978ef4' : 'inherit' }}
                                    onClick={() => handleButtonClick('shipping')}
                                >
                                    <AirportShuttleIcon /> Shipping
                                </Button>
                                <Button
                                    sx={{ mb: 1, color: 'white', backgroundColor: activeButton === 'globalDelivery' ? '#978ef4' : 'inherit' }}
                                    onClick={() => handleButtonClick('globalDelivery')}
                                >
                                    <LanguageIcon /> Global Delivery
                                </Button>
                                <Button
                                    sx={{ mb: 1, color: 'white', backgroundColor: activeButton === 'attributes' ? '#978ef4' : 'inherit' }}
                                    onClick={() => handleButtonClick('attributes')}
                                >
                                    <LinkIcon /> Attributes
                                </Button>
                                <Button
                                    sx={{ mb: 1, color: 'white', backgroundColor: activeButton === 'advanced' ? '#978ef4' : 'inherit' }}
                                    onClick={() => handleButtonClick('advanced')}
                                >
                                    <LockIcon /> Advanced
                                </Button>
                            </Box>
                        </Item>
                        <Item>
                            {activeButton === 'restock' && <div style={{ width: '100%' , backgroundColor:'#ccc' }}>
                                <Grid size={12} sx={{ mt: 1 }}>
                                    <Item>
                                        <Typography sx={{ display: 'flex', ml: 2, mb: 2 , mt:0 }}>
                                            Options
                                        </Typography>
                                        <Box display={{ display: 'flex', alignItems: 'center' }}>
                                            <TextField

                                                type="number"
                                                value={value}
                                                placeholder='Enter size'
                                                onChange={(e) => setValue(Number(e.target.value))}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                edge="end"
                                                                onClick={handleDecrease}
                                                                size="small"
                                                            >

                                                            </IconButton>
                                                            <IconButton
                                                                edge="end"
                                                                onClick={handleIncrease}
                                                                size="small"
                                                            >

                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="outlined"
                                                sx={{ width: '100%', display: 'inline' }}
                                            /> <Button variant='contained' sx={{ background: '#978ef4', ml: 3 }}>Confirm</Button>
                                        </Box>
                                        <Box sx={{ mt: 2, fontSize: '5px' }}>
                                            <Typography>Product in stock now: 54</Typography>
                                            <Typography>Product in transit: 390</Typography>
                                            <Typography>Last time restocked: 24th June, 2023</Typography>
                                            <Typography>Total stock over lifetime: 2430</Typography>
                                        </Box>
                                    </Item>
                                </Grid>




                            </div>}
                            {activeButton === 'shipping' && <div>

                                <Item sx={{ mt: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                        <Typography sx={{ display: 'flex', ml: 2 }}>Shipping Type</Typography>
                                        <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                                            <Typography variant="body1">
                                                <FormControlLabel
                                                    value="option1"
                                                    control={<Radio />}
                                                    label="Fulfilled by Seller"
                                                />
                                                <Typography sx={{ mb: 4 }}>
                                                    You'll be responsible for product delivery. Any damage or delay during shipping may cost you a Damage fee.
                                                </Typography>
                                            </Typography>

                                            <Typography variant="body1">
                                                <FormControlLabel
                                                    value="option2"
                                                    control={<Radio />}
                                                    label="Fulfilled by Marketplace"
                                                />
                                                <Typography>
                                                    The marketplace will handle the product delivery, and any issues during shipping will be managed by them.
                                                </Typography>
                                            </Typography>
                                        </RadioGroup>
                                    </Box>


                                </Item>
                            </div>}
                            {activeButton === 'globalDelivery' && <div>
                                <item>
                                    <Typography sx={{ display: 'flex', ml: 3 }}>
                                        Global Delivery
                                    </Typography>
                                    <Box>
                                        <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                                            <Typography variant="body1">
                                                <FormControlLabel
                                                    value="option1"
                                                    control={<Radio />}
                                                    label="Worldwide delivery"
                                                />
                                                <Typography sx={{ mb: 4 }}>
                                                    Only available with Shipping method:
                                                    <span style={{ color: '#7367f0' }}>
                                                        Fulfilled by Company name
                                                    </span>
                                                </Typography>
                                            </Typography>

                                            <Typography variant="body1">
                                                <FormControlLabel
                                                    value="option2"
                                                    control={<Radio />}
                                                    label="Selected Countries"
                                                />
                                                <Typography>
                                                    <TextField
                                                        id="outlined-basic"
                                                        fullWidth
                                                        placeholder="Type Country Name"
                                                        variant="outlined"
                                                    />
                                                </Typography>
                                            </Typography>

                                            <Typography variant="body1">
                                                <FormControlLabel
                                                    value="option3"
                                                    control={<Radio />}
                                                    label="Local delivery"
                                                />
                                                <Typography sx={{ mb: 4, display: 'flex', justifyContent: 'start' }}>
                                                    Deliver to your country of residence:
                                                    <span style={{ color: '#7367f0' }}>
                                                        Change profile address
                                                    </span>
                                                </Typography>
                                            </Typography>
                                        </RadioGroup>
                                    </Box>
                                </item>
                            </div>}
                            {activeButton === 'attributes' && <div>
                                <Item>

                                    <Box>
                                        <Typography sx={{ display: 'flex', ml: 2, mt: 2 }}>
                                            Attributes
                                        </Typography>
                                        <Checkbox defaultChecked /><Typography sx={{ display: 'inline' }}>
                                            Fragile Product
                                        </Typography>
                                        <Checkbox defaultChecked /><Typography sx={{ display: 'inline' }}>
                                            Biodegradable
                                        </Typography>
                                        <Checkbox defaultChecked /><Typography sx={{ display: 'inline' }}>
                                            Frozen Product
                                        </Typography>
                                        <TextField
                                            type="number"
                                            value={value}
                                            placeholder='Enter size'
                                            onChange={(e) => setValue(Number(e.target.value))}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            edge="end"
                                                            onClick={handleDecrease}
                                                            size="small"
                                                        >

                                                        </IconButton>
                                                        <IconButton
                                                            edge="end"
                                                            onClick={handleIncrease}
                                                            size="small"
                                                        >

                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        /> <Typography variant='h6' sx={{}}>
                                            Max, Allowed Temprature
                                        </Typography>
                                        <Checkbox defaultChecked /><Typography sx={{ display: 'inline' }}>
                                            Expiry Date of Product
                                        </Typography>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer
                                                components={['MobileDatePicker']}
                                            >
                                                <DemoItem >
                                                    <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                                                </DemoItem>
                                            </DemoContainer>
                                        </LocalizationProvider>

                                    </Box>
                                </Item>
                            </div>}
                            {activeButton === 'advanced' && <div>
                                <Typography sx={{ ml: 2, mt: 2, display: 'flex' }}>
                                    Advanced
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ ml: 2, mt: 2 }}>
                                        Product ID Type
                                        <Box sx={{ minWidth: 120, mt: 2 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">ISBN</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>ISBN</MenuItem>
                                                    <MenuItem value={20}>UPC</MenuItem>
                                                    <MenuItem value={20}>EAN</MenuItem>
                                                    <MenuItem value={30}>JAN</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Typography>
                                    <Box sx={{ ml: 5 }}>
                                        <Typography sx={{ mt: 2 }}>
                                            Product Id
                                        </Typography>
                                        <TextField
                                            type="number"
                                            value={value}
                                            placeholder='Enter size'
                                            onChange={(e) => setValue(Number(e.target.value))}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            edge="end"
                                                            onClick={handleDecrease}
                                                            size="small"
                                                        >

                                                        </IconButton>
                                                        <IconButton
                                                            edge="end"
                                                            onClick={handleIncrease}
                                                            size="small"
                                                        >

                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="outlined"
                                            sx={{ width: '100%', mt: 2 }}
                                        />

                                    </Box>
                                </Box>

                            </div>}
                        </Item>
                    </Grid>
                </Grid>
                <Grid size={6}>
                    <Item>
                        <Grid size={5} sx={{ width: '100%' }}>
                            <Item>
                                <Typography sx={{ display: 'flex', ml: 3, mt: 4, mb: 4 }} variant='h6'>
                                    Pricing
                                </Typography>
                                <Typography sx={{ display: 'flex', mt: 1, ml: 1 }}>
                                    Base Price
                                </Typography>
                                <TextField
                                    type="number"
                                    value={value}
                                    placeholder='Enter size'
                                    onChange={(e) => setValue(Number(e.target.value))}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    onClick={handleDecrease}
                                                    size="small"
                                                >

                                                </IconButton>
                                                <IconButton
                                                    edge="end"
                                                    onClick={handleIncrease}
                                                    size="small"
                                                >

                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    sx={{ width: '100%' }}
                                />
                                <Typography sx={{ display: 'flex', mt: 2, ml: 1 }}>
                                    Discounted Price
                                </Typography>
                                <TextField
                                    type="number"
                                    value={value}
                                    placeholder='Enter size'
                                    onChange={(e) => setValue(Number(e.target.value))}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    onClick={handleDecrease}
                                                    size="small"
                                                >

                                                </IconButton>
                                                <IconButton
                                                    edge="end"
                                                    onClick={handleIncrease}
                                                    size="small"
                                                >

                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    sx={{ width: '100%' }}
                                />
                                <Typography sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <Checkbox defaultChecked />Charge tax on this product
                                </Typography>
                                <Box>
                                    <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        In stock <Switch />
                                    </Typography>
                                </Box>
                            </Item>
                            <Item sx={{ mt: 4, width: '100%' }}>
                                <Typography variant='h6' sx={{ ml: 2, display: 'flex' }}>
                                    Organize
                                </Typography>

                                <Typography sx={{ display: 'flex', ml: 1, mt: 4, mb: 1 }}>
                                    Vendor
                                </Typography>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Vendor"
                                            onChange={handleChange}
                                        >
                                            <MenuItem
                                                value={10}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Men's Clothing
                                            </MenuItem>
                                            <MenuItem
                                                value={20}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Women's Clothing
                                            </MenuItem>
                                            <MenuItem
                                                value={30}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Kid's Clothing
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Typography sx={{ display: 'flex', ml: 1, mt: 4, mb: 1 }}>
                                    Category
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FormControl fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Vendor"
                                            onChange={handleChange}
                                        >
                                            <MenuItem
                                                value={10}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Household
                                            </MenuItem>
                                            <MenuItem
                                                value={20}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Management
                                            </MenuItem>
                                            <MenuItem
                                                value={30}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Electronics
                                            </MenuItem>
                                            <MenuItem
                                                value={40}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Office
                                            </MenuItem>
                                            <MenuItem
                                                value={50}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Automotive
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button sx={{ ml: 2, py: 2, backgroundColor: '#e9e7fd', color: '#7367f0' }} variant='contained'><AddIcon /></Button>
                                </Box>
                                <Typography sx={{ display: 'flex', ml: 1, mt: 4, mb: 1 }}>
                                    Collection
                                </Typography>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-simple-select-label">Collection</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Vendor"
                                            onChange={handleChange}
                                        >
                                            <MenuItem
                                                value={10}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Men's Clothing
                                            </MenuItem>
                                            <MenuItem
                                                value={20}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Women's Clothing
                                            </MenuItem>
                                            <MenuItem
                                                value={30}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Kids-Clothing
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Typography sx={{ display: 'flex', ml: 1, mt: 4, mb: 1 }}>
                                    Status
                                </Typography>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Vendor"
                                            onChange={handleChange}
                                        >
                                            <MenuItem
                                                value={10}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Published
                                            </MenuItem>
                                            <MenuItem
                                                value={20}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                Scheduled
                                            </MenuItem>
                                            <MenuItem
                                                value={30}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: '#7367f0', color: 'white',
                                                    },
                                                }}
                                            >
                                                inactive
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Typography sx={{ display: 'flex', ml: 1, mt: 4, mb: 1 }}>
                                    Tags
                                </Typography>
                            </Item>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>






        </>
    )
}
<Outlet />

export default AddProduct
import {
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField, Typography
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TABLE_CONTRACT } from '../../../assets/data/data';
import { CalendarIcon, NextIcon, PreviousIcon, ShowMoreIcon, UploadIcon } from '../../../components/Icons';
import '../components/DatePicker.module.scss';
import { useState } from 'react';
import moment from 'moment';

interface IDemoTab {
    contract_date: string;
    name: string;
    document: File | undefined
}


const DemoTab = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<IDemoTab>()

    const [contracts, setContracts] = useState<IDemoTab[]>([]);
    const [selectedFileName, setSelectedFileName] = useState('')
    // console.log(contracts, ' data');

    const onSubmit = (data: IDemoTab) => {
        const newContract: IDemoTab = {
            name: data.name,
            contract_date: moment(data.contract_date).format('YYYY-MM-DD'),
            document: data.document
        };
        setContracts(prevContracts => [...prevContracts, newContract]);
        setSelectedFileName('')
        reset()
    };

    return (
        <Stack sx={{ flexFlow: "row wrap", gap: '20px', padding: '20px 14px 30px 20px' }}>
            <Stack component='form' sx={{ maxWidth: "400px", gap: '10px', flex: '1 1 0%' }}>
                <Grid2 sx={{ flexFlow: "row wrap", alignItems: 'center', justifyContent: 'space-between' }} container spacing={1}>
                    <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}>
                        <Typography sx={{ display: 'flex', flexWrap: "wrap" }}>
                            <FormattedMessage id='contractDate' />
                        </Typography>
                    </Grid2>
                    <Grid2 xs={12} sm={12} md={7} lg={7.2} xl={8}>
                        <Controller
                            control={control}
                            name="contract_date"
                            rules={{ required: true }}
                            render={({ field }: any) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    popperPlacement="bottom-start"
                                    dateFormat='yyyy-MM-dd'
                                    customInput={
                                        <TextField
                                            {...field}
                                            name="contract_date"
                                            type='text'
                                            variant='filled'
                                            InputProps={{
                                                disableUnderline: true,
                                                startAdornment: <CalendarIcon />,
                                                endAdornment: <ShowMoreIcon />
                                            }}
                                            sx={{
                                                ".MuiInputBase-root": {
                                                    borderRadius: '6px',
                                                    backgroundColor: "rgb(241, 243, 245)",
                                                    overflow: "hidden",
                                                    "input": {
                                                        padding: "12px"
                                                    }
                                                },
                                                ".Mui-error": {
                                                    border: "1px solid rgb(243, 174, 175)",
                                                    backgroundColor: 'rgb(255, 239, 239)',
                                                    "&:hover": {
                                                        border: "1px solid rgb(243, 174, 175)",
                                                        backgroundColor: 'rgb(255, 239, 239)',
                                                    }
                                                },
                                                ".MuiFormHelperText-root": {
                                                    border: 'none',
                                                    backgroundColor: "transparent",
                                                    "&:hover": {
                                                        border: 'none',
                                                        backgroundColor: "transparent",
                                                    }
                                                }
                                            }}
                                        />
                                    }
                                    renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                                        <Stack sx={{ minWidth: '350px', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: "4px 8px" }}>
                                            <IconButton sx={{ marginRight: '8px', color: "rgb(215, 219, 223)", width: '32px', height: "32px" }} onClick={decreaseMonth} size='small'>
                                                <PreviousIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography variant="h6">{date.toLocaleString('en-US', { month: "long", year: "numeric" })}</Typography>
                                                <Button sx={{ marginRight: '8px', color: "rgb(215, 219, 223)", width: '32px', height: "32px" }}>
                                                    <ShowMoreIcon />
                                                </Button>
                                            </Box>
                                            <IconButton sx={{ marginRight: '8px', color: "rgb(215, 219, 223)", width: '32px', height: "32px" }} onClick={increaseMonth} size='small'>
                                                <NextIcon />
                                            </IconButton>
                                        </Stack>
                                    )
                                    }
                                />
                            )}
                        />
                    </Grid2>
                </Grid2>
                <Grid2 sx={{ flexFlow: "row wrap", alignItems: 'center', justifyContent: 'space-between' }} container spacing={1}>
                    <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}>
                        <Typography sx={{ display: 'flex', flexWrap: "wrap" }}>
                            <FormattedMessage id='contractName' />
                        </Typography>
                    </Grid2>
                    <Grid2 xs={12} sm={12} md={7} lg={7.2} xl={8}>
                        <Controller
                            name='name'
                            control={control}
                            defaultValue={''}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    name='name'
                                    type='text'
                                    fullWidth
                                    variant='filled'
                                    InputProps={{ disableUnderline: true }}
                                    sx={{
                                        ".MuiInputBase-root": {
                                            borderRadius: '6px',
                                            backgroundColor: "rgb(241, 243, 245)",
                                            overflow: "hidden",
                                            paddingRight: '0px',
                                            "input": {
                                                padding: "12px"
                                            },
                                            "textarea": {
                                                padding: "12px"
                                            }
                                        },
                                        ".Mui-error": {
                                            border: "1px solid rgb(243, 174, 175)",
                                            backgroundColor: 'rgb(255, 239, 239)',
                                            "&:hover": {
                                                border: "1px solid rgb(243, 174, 175)",
                                                backgroundColor: 'rgb(255, 239, 239)',
                                            }
                                        },
                                        ".MuiFormHelperText-root": {
                                            border: 'none',
                                            backgroundColor: "transparent",
                                            "&:hover": {
                                                border: 'none',
                                                backgroundColor: "transparent",
                                            }
                                        }
                                    }}
                                />
                            )}
                        />
                    </Grid2>
                </Grid2>
                <Stack sx={{ flexFlow: "row wrap", gap: '10px', justifyContent: 'space-between', marginTop: '12px' }}>
                    <Box>
                        <Button
                            component="label"
                            sx={{
                                textTransform: "capitalize",
                                color: "rgb(0, 145, 255)",
                                borderRadius: '6px',
                                height: '48px',
                                fontSize: '16px',
                                backgroundColor: "rgb(237, 246, 255)",
                                minWidth: '195px',
                                border: "1px dashed"
                            }}
                            size='large'
                            disableElevation
                            startIcon={<UploadIcon />}
                        >
                            <FormattedMessage id="uploadFile" />
                            <Controller
                                name="document"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => {
                                    return (
                                        <input
                                            hidden
                                            type="file"
                                            accept='image/*,.pdf,.csv,.xlsx,.docx'
                                            onChange={(e) => {
                                                field.onChange(e.target.files)
                                                const files = e.target.files;
                                                if (files && files.length > 0) {
                                                    field.onChange(files);
                                                    setSelectedFileName(files[0].name);
                                                }
                                            }}
                                        />
                                    );
                                }}
                            />
                        </Button>
                    </Box>

                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            padding: '8px 22px',
                            color: "rgb(234, 251, 246)",
                            backgroundColor: 'rgb(105, 217, 193)',
                            borderRadius: "6px",
                            height: '48px',
                            fontSize: '16px',
                            minWidth: '195px',
                            "&:hover": {
                                backgroundColor: 'rgb(54, 215, 180)'
                            }
                        }}
                        variant='contained'
                        size='large'
                        disableElevation
                        onClick={handleSubmit(onSubmit)}
                    >
                        <FormattedMessage id="add" />
                    </Button>
                </Stack>
                <Box>{selectedFileName}</Box>
            </Stack>
            <Divider flexItem orientation='vertical' />
            <Box sx={{ flex: "1 1 0%" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ position: "relative" }}>
                        <TableContainer style={{ maxHeight: '225px', minHeight: '225px' }}>
                            <Table sx={{ borderCollapse: 'separate', minWidth: '100%' }}>
                                <TableHead>
                                    <TableRow></TableRow>
                                    <TableRow>
                                        {TABLE_CONTRACT.map((item, index) => (
                                            <TableCell
                                                sx={{
                                                    fontWeight: 600,
                                                    display: 'table-cell',
                                                    fontSize: '14px',
                                                    color: "rgb(17, 24, 28)",
                                                    border: '1px solid white',
                                                    minWidth: item.minWidth,
                                                    borderBottom: 'none',
                                                    borderTopLeftRadius: "8px",
                                                    borderTopRightRadius: "0px",
                                                    padding: "3px 10px",
                                                    backgroundColor: "rgb(236, 238, 240)"
                                                }}
                                                align='center'
                                                key={index}>{item.label}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {contracts.map((contract, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{contract.name}</TableCell>
                                            <TableCell>{contract.contract_date}</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
        </Stack>
    )
}

export default DemoTab
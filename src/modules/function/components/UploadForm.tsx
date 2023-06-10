import { Box, Button, Divider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TABLE_CONTRACT } from '../../../assets/data/data';
import CustomDivider from '../../../components/DividerComponent/DividerComponent';
import { UploadIcon } from '../../../components/Icons';
import InputField from './CreateInputField';
import DatePickerField from './DatePickerComponent';

interface IUploadForm {
    contract_date: string;
    name: string;
    document: File | undefined
}


const UploadForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<IUploadForm>()
    const [contracts, setContracts] = useState<IUploadForm[]>([]);
    const [selectedFileName, setSelectedFileName] = useState('')

    const onSubmit = (data: IUploadForm) => {
        const newContract: IUploadForm = {
            name: data.name,
            contract_date: moment(data.contract_date).format('YYYY-MM-DD'),
            document: data.document
        };
        setContracts(prevContracts => [...prevContracts, newContract]);
        setSelectedFileName('')
        reset()
    };

    return (
        <Stack sx={{ border: "1px solid rgb(223, 227, 230)", borderRadius: '6px' }}>
            <Typography variant='caption' component='span' sx={{ fontSize: '12px', lineHeight: '1.5', fontWeight: 600, padding: "5px 20px", color: "rgb(104, 112, 118)", backgroundColor: "rgb(241, 243, 245)" }}>CONTRACT:</Typography>
            <Typography variant='body2' sx={{ color: "rgb(104, 112, 118)", padding: "10px 20px" }}>
                <FormattedMessage id="requireFile" />
            </Typography>
            <CustomDivider />
            <Stack sx={{ flexFlow: "row wrap", gap: '20px', padding: '20px 14px 30px 20px' }}>
                <Stack component='form' sx={{ maxWidth: "400px", gap: '10px', flex: '1 1 0%' }}>
                    <DatePickerField
                        label='contractDate'
                        name='contract_date'
                        type='text'
                        require={true}
                        control={control}
                        errors={errors.contract_date ? true : false}
                        helperText={errors.contract_date ? "" : null}
                    />
                    <InputField
                        label='contractName'
                        name="name"
                        require={true}
                        control={control}
                        type='text'
                        errors={errors.name ? true : false}
                        helperText={errors.name ? '' : null}
                        InputProps={{ disableUnderline: true }}
                    />
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

                        <Button sx={{
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
                            type='submit'
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
                                                <TableCell>
                                                    <Button></Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Stack>
    )
}

export default UploadForm
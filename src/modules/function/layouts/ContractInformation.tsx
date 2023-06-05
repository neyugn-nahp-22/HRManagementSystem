import { Box, Button, Divider, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import { EMPLOYEE_TYPE, TABLE_CONTRACT } from '../../../assets/data/data'
import CustomDivider from '../../../components/DividerComponent/DividerComponent'
import { UploadIcon } from '../../../components/Icons'
import { ICreateParams } from '../../../models/employee'
import InputField from '../components/CreateInputField'
import SelectField from '../components/CreateSelectField'
import DatePickerField from '../components/DatePickerComponent'

const ContractInformation = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ICreateParams>({ mode: "onBlur" })
    const fileInputRef = useRef(null)
    const [fileName, setFileName] = useState('')

    const handleFileUpload = (e: any) => {
        const file = e.target.file[0];
        console.log(file);
    }
    return (
        <Box sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Stack sx={{ flexFlow: "column wrap", maxWidth: "400px", width: '100%', paddingBottom: '20px', gap: "10px" }} component='form'>
                <DatePickerField
                    require={true}
                    control={control}
                    label='dateStart'
                    name="contract_start_date"
                    type='text'
                    errors={errors.contract_start_date}
                    helperText={errors.contract_start_date ? <FormattedMessage id="requiredName" /> : ""}
                />
                <SelectField
                    label='Type'
                    name="type"
                    require={true}
                    defaultValue={''}
                    control={control}
                    placeholder='Choose Type'
                    data={EMPLOYEE_TYPE}
                    errors={errors.type}
                    helperText="requireGender"
                />
            </Stack>
            <Stack sx={{ border: "1px solid rgb(223, 227, 230)", borderRadius: '6px' }}>
                <Typography variant='caption' component='span' sx={{ fontSize: '12px', lineHeight: '1.5', fontWeight: 600, padding: "5px 20px", color: "rgb(104, 112, 118)", backgroundColor: "rgb(241, 243, 245)" }}>CONTRACT:</Typography>
                <Typography variant='body2' sx={{ color: "rgb(104, 112, 118)", padding: "10px 20px" }}>
                    <FormattedMessage id="requireFile" />
                </Typography>
                <CustomDivider />
                <Stack sx={{ flexFlow: "row wrap", gap: '20px', padding: '20px 14px 30px 20px' }}>
                    <Stack component='form' sx={{ maxWidth: "400px", gap: '10px', flex: '1 1 0%' }}>
                        <DatePickerField
                            require={false}
                            control={control}
                            label='contractDate'
                            name="contract_date"
                            type='text'
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
                                <Button sx={{
                                    textTransform: "capitalize",
                                    color: "rgb(0, 145, 255)",
                                    borderRadius: '6px',
                                    height: '48px',
                                    fontSize: '16px',
                                    backgroundColor: "rgb(237, 246, 255)",
                                    minWidth: '195px',
                                    border: "1px dashed"
                                }} size='large' disableElevation startIcon={<UploadIcon />}>
                                    <label className="">
                                        <FormattedMessage id="uploadFile" />
                                        <Controller
                                            name="document"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }: any) => {
                                                return (
                                                    <input
                                                        type="file"
                                                        onChange={(e: any) => {
                                                            setFileName(e.target.files[0].name);
                                                            field.onChange(e.target.files[0]);
                                                        }}
                                                        hidden
                                                    />
                                                );
                                            }}
                                        />
                                    </label>
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
                            >
                                <FormattedMessage id="add" />
                            </Button>
                        </Stack>
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
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ContractInformation
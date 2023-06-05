import { Box, Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TABLE_OTHERS } from '../../../assets/data/data';
import { UploadIcon } from '../../../components/Icons';
import { ICreateParams } from '../../../models/employee';
import { getBenefit, getGrade } from '../../../services/employeeService';
import InputField from '../components/CreateInputField';
import SelectField from '../components/CreateSelectField';
import styles from './styles.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

interface IOtherParams {
    grade_id: number | { value: number, label: string },
    benefits: number[];
    remark: string;
}

const Other = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ICreateParams>({ mode: "onBlur" })
    const [grade, setGrade] = useState([])
    const [benefit, setBenefit] = useState([])



    useEffect(() => {
        getBenefit().then((data) => {
            setBenefit(data.data.data)
        })
            .catch((err) => console.log(err));
        getGrade().then((data) => { setGrade(data.data.data) }).catch((err) => console.log(err))
    }, [])
    return (
        <>

            <Box sx={{ display: 'flex', paddingLeft: '20px', paddingRight: '20px', flexDirection: 'column', gap: '10px', maxWidth: '560px' }} component='form'>
                <SelectField
                    label='grade'
                    name="grade_id"
                    require={false}
                    defaultValue={''}
                    control={control}
                    placeholder=''
                    data={grade}
                />
                <SelectField
                    label='benefit'
                    name="benefits"
                    require={false}
                    defaultValue={''}
                    control={control}
                    placeholder=''
                    data={benefit}
                />
                <InputField
                    control={control}
                    label='remark'
                    name='remark'
                    require={false}
                    type='text'
                    multiline={true}
                    rows={2}
                    InputProps={{
                        disableUnderline: true
                    }}
                />
                <SelectField
                    label='hrmAccount'
                    name=""
                    require={false}
                    defaultValue={''}
                    control={control}
                    placeholder=''
                    data={[]}
                    disable={true}
                />
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', marginTop: '10px', borderRadius: '6px', border: "1px solid rgb(223, 227, 230)" }}>
                <Box sx={{ maxWidth: '560px', paddingLeft: '20px', paddingRight: "20px" }}>
                    <Grid2 container spacing={1} sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}>
                            <FormattedMessage id="document" />
                        </Grid2>
                        <Grid2 sx={{ marginTop: '16px', marginBottom: '16px' }} xs={12} sm={12} md={7} lg={7.2} xl={8}>
                            <Button sx={{
                                textTransform: "capitalize",
                                color: "rgb(0, 145, 255)",
                                borderRadius: '6px',
                                fontSize: "14px",
                                padding: "8px 12px",
                                backgroundColor: 'rgb(237, 246, 255)',
                                minWidth: "98px", border: "1px dashed",
                                height: "32px"
                            }}
                                size='small'
                                disableElevation
                                startIcon={<UploadIcon />}>
                                <FormattedMessage id="upload" />
                            </Button>
                        </Grid2>
                    </Grid2>
                </Box>
                <Box sx={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: "20px" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ position: 'relative' }}>
                            <TableContainer sx={{
                                maxHeight: '225px',
                                minHeight: '225px',
                            }}
                                className={cx('container')}
                            >
                                <Table stickyHeader sx={{ minWidth: '750px' }}>
                                    <TableHead>
                                        <TableRow></TableRow>
                                        <TableRow>
                                            {TABLE_OTHERS.map((item, index) => (
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
            </Box >
        </>
    )
}

export default Other
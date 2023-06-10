import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, Chip, FilledInput, MenuItem, Select, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TABLE_OTHERS } from '../../../assets/data/data';
import { UploadIcon } from '../../../components/Icons';
import { getBenefit, getGrade } from '../../../services/employeeService';
import InputField from '../components/CreateInputField';
import SelectField from '../components/CreateSelectField';
import styles from './styles.module.scss';


const cx = classNames.bind(styles)

interface IOther {
    form?: any
}

const Other: React.FC<IOther> = ({ form }) => {
    const { control, handleSubmit } = form
    const [grade, setGrade] = useState([])
    const [benefit, setBenefit] = useState([])
    const [benefitById, setBenefitById] = useState([])

    // console.log(benefitById);

    // console.log(benefit);
    const onSubmit = (data: IOther) => {
        console.log(data);
    }


    useEffect(() => {
        getBenefit().then((data) => {
            setBenefit(data.data.data)
        })
            .catch((err) => console.log(err));
        getGrade().then((data) => { setGrade(data.data.data) }).catch((err) => console.log(err))
    }, [])
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    flexDirection: 'column',
                    gap: '10px',
                    maxWidth: '560px'
                }}
                onSubmit={handleSubmit(onSubmit)}
                component='form'
            >
                <Grid2 sx={{ flexFlow: "row wrap", alignItems: 'center', justifyContent: 'space-between' }} container spacing={1}>
                    <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}>
                        <Typography sx={{ display: 'flex', flexWrap: "wrap" }}>
                            <FormattedMessage id='grade' />
                        </Typography>
                    </Grid2>
                    <Grid2 xs={12} sm={12} md={7} lg={7.2} xl={8}>
                        <Controller
                            name='grade_id'
                            control={control}
                            defaultValue={''}
                            rules={{ required: false }}
                            render={({ field }: any) => (
                                <>
                                    <Select
                                        {...field}
                                        displayEmpty
                                        variant='filled'
                                        input={<FilledInput />}
                                        fullWidth
                                        disableUnderline
                                        IconComponent={KeyboardArrowDownIcon}
                                        sx={{
                                            backgroundColor: "rgb(241, 243, 245)",
                                            borderRadius: '6px',
                                            overflow: 'hidden',
                                            ".MuiSelect-select": {
                                                padding: '12px',
                                                ".css-ahj2mt-MuiTypography-root": {
                                                    color: "rgb(104, 112, 118)"
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
                                    >
                                        <MenuItem value=""></MenuItem>
                                        {grade.map((item: any, index: number) => (
                                            <MenuItem
                                                sx={{
                                                    padding: '8px 0px',
                                                    "&.MuiButtonBase-root": {
                                                        padding: '8px 16px',
                                                        borderRadius: '6px',
                                                        margin: '2px 0px 0px',
                                                        "&:hover": {
                                                            color: 'rgb(48, 164, 108)',
                                                            backgroundColor: 'rgba(193, 200, 205, 0.08)',
                                                        }
                                                    },
                                                    '&.Mui-selected': {
                                                        backgroundColor: "rgb(233, 249, 238)",
                                                        color: "rgb(48, 164, 108)",
                                                        "&:hover": {
                                                            backgroundColor: 'rgb(221, 243, 228)'
                                                        }
                                                    },
                                                    '&.Mui-focusVisible': {
                                                        backgroundColor: "transparent",
                                                    }
                                                }}
                                                key={index} onClick={() => setBenefitById(item.benefits.map((el: any) => el.name))} value={item.id}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                </>
                            )}
                        />
                    </Grid2>
                </Grid2 >
                {benefitById.length !== 0 ?
                    <Grid2 xs={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}></Grid2>
                        <Grid2 xs={12} sm={12} md={7} lg={7.2} xl={8}>
                            {benefitById.map((item: any, index: number) => (
                                <Chip key={index} label={item} sx={{ height: '24px', borderRadius: '6px', margin: '0px 5px', color: 'rgb(104, 112, 118)', backgroundColor: 'rgb(230, 232, 235)' }} />
                            ))}
                        </Grid2>
                    </Grid2> : null
                }
                <SelectField
                    label='benefit'
                    name="benefits"
                    require={false}
                    defaultValue={[]}
                    control={control}
                    multiple={true}
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
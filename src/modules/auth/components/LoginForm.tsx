import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, Container, FilledInput, FormHelperText, IconButton, Link, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import InputField from '../../../components/InputField/InputField';
import { ROUTES } from '../../../configs/routes';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import { LoadingButton } from '@mui/lab';
import { getAllCompany } from '../../../services/authService';

interface Props {
    onLogin(values: ILoginParams): void;
    loading: boolean;
    errorMessage: string
}



const LoginForm = (props: Props) => {
    const { onLogin, loading } = props

    const [showPassword, setShowPassword] = useState(false);
    const [company, setCompany] = useState<any>([])
    // console.log(company.map(item => item.name));

    const { control, handleSubmit, formState: { errors } } = useForm<ILoginValidation>()

    const getCompany = async () => {
        try {
            const res = await getAllCompany()
            const data = res.data.data
            setCompany(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCompany()
    }, [])

    const onSubmit = (data: ILoginValidation) => {
        onLogin(data)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    return (
        <Container sx={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column' }} component='main' maxWidth="lg">
            <Box sx={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '32px' }}>
                <Typography sx={{ margin: '0px 0px 20px', fontWeight: 500, lineHeight: 1.19444, fontSize: '36px', letterSpacing: '-0.03em' }} variant='h3'>
                    <FormattedMessage id='signIn' />
                </Typography>
                <Paper
                    sx={{
                        color: 'rgb(17, 24, 28)',
                        boxShadow: 'rgba(236, 238, 240, 0.5) 0px 10px 5px',
                        borderRadius: '12px',
                        padding: "24px",
                        boxSizing: 'border-box',
                        width: '100%',
                        maxWidth: '348px'
                    }}
                    elevation={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} onSubmit={handleSubmit(onSubmit)} component='form'>
                        <InputField
                            id='UserName'
                            name='username'
                            control={control}
                            type='text'
                            errors={errors.username ? true : false}
                            helperText={errors.username ? <FormattedMessage id="requireUsername" /> : ""}
                            InputProps={{ disableUnderline: true }}
                        />
                        <InputField
                            id='passWord'
                            name='password'
                            control={control}
                            type='password'
                            errors={errors.password ? true : false}
                            helperText={errors.password ? <FormattedMessage id="requirePassword" /> : ""}
                            InputProps={{
                                disableUnderline: true,
                                type: showPassword ? 'text' : 'password',
                                endAdornment: (
                                    "" ?
                                        <IconButton
                                            size='small'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton> : ""
                                ),
                            }}
                        />
                        <Grid2 sx={{ alignItems: 'center', justifyContent: 'space-between' }} container spacing={1}>
                            <Grid2 direction="row" xs={12}>
                                <Typography sx={{ fontSize: '16px', letterSpacing: '-0.01em', display: 'flex', flexWrap: 'wrap' }}>
                                    <FormattedMessage id='factory' />
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 direction='row' xs={12}>
                                <Controller
                                    name='company_id'
                                    control={control}
                                    defaultValue={''}
                                    rules={{ required: true, validate: (value) => value !== 0 }}
                                    render={({ field }: any) => (
                                        <>
                                            <Select
                                                {...field}
                                                fullWidth
                                                displayEmpty
                                                variant='filled'
                                                input={<FilledInput />}
                                                error={errors.company_id ? true : false}
                                                disableUnderline
                                                sx={{
                                                    fontSize: '16px',
                                                    backgroundColor: "rgb(241, 243, 245)",
                                                    borderRadius: '6px',
                                                    overflow: 'hidden',
                                                    letterSpacing: '-0.01em',
                                                    color: 'rgb(17, 24, 28)',
                                                    ".MuiSelect-select": {
                                                        padding: '12px',
                                                        ".css-ahj2mt-MuiTypography-root": {
                                                            color: "rgb(104, 112, 118)"
                                                        }
                                                    },
                                                    "&.Mui-error": {
                                                        border: '1px solid rgb(243, 174, 175)',
                                                        backgroundColor: 'rgb(255, 239, 239)'
                                                    }
                                                }}
                                                renderValue={(selected) => {
                                                    if (!selected) {
                                                        return <Typography sx={{ letterSpacing: '-0.01em', color: 'rgb(104, 112, 118)', fontSize: '16px' }}>Select Factory</Typography>
                                                    }
                                                    return company.find((item: any) => item.id === selected)?.name
                                                }}
                                            >
                                                {
                                                    company.map((item: any, index: any) => (
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
                                                            key={index}
                                                            value={item.id}
                                                        >
                                                            {item.name}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                            {errors.company_id && (
                                                <FormHelperText sx={{ lineHeight: 1.5, fontSize: '12px', margin: '3px 14px 0px' }} error>
                                                    <FormattedMessage id='requireFactory' />
                                                </FormHelperText>
                                            )}
                                        </>
                                    )}
                                />
                            </Grid2>
                        </Grid2>
                        <Stack sx={{ margin: '8px 0px' }}>
                            {loading ?
                                <LoadingButton
                                    loading={loading}
                                    variant='contained'
                                    size='large'
                                    disableElevation
                                    sx={{
                                        margin: '18px 0px 0px',
                                        fontWeight: 400,
                                        lineHeight: 1.71429,
                                        textTransform: 'capitalize',
                                        color: 'rgb(251, 253, 255)',
                                        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                        backgroundColor: 'rgba(193, 200, 205, 0.24)',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        height: '48px',
                                    }}
                                ></LoadingButton>
                                :
                                <Button
                                    sx={{
                                        margin: '18px 0px 0px',
                                        fontWeight: 400,
                                        lineHeight: 1.71429,
                                        textTransform: 'capitalize',
                                        color: 'rgb(251, 253, 255)',
                                        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                        backgroundColor: 'rgb(0, 145, 255)',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        height: '48px',
                                        "&:hover": {
                                            boxShadow: 'none',
                                            textDecoration: 'none',
                                            backgroundColor: 'rgb(0, 129, 241)'
                                        }
                                    }}
                                    type='submit'
                                    size='large'
                                    variant='contained'
                                    fullWidth
                                    disableElevation
                                >
                                    <Typography>
                                        <FormattedMessage id='signIn' />
                                    </Typography>
                                </Button>
                            }
                            <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Link
                                    sx={{
                                        lineHeight: 1.35714,
                                        fontSize: '14px',
                                        color: 'rgb(0, 145, 255)',
                                        margin: '16px 0px 0px',
                                        "&:hover": {
                                            textDecoration: "underline"
                                        }
                                    }}
                                    href={ROUTES.forgotPassword}
                                    underline='none'
                                    variant='body2'>
                                    <FormattedMessage id='forgotPassWord' />
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Paper>
            </Box >
        </Container >
    )
}

export default LoginForm
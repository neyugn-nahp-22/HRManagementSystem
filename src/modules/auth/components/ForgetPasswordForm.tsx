import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { ROUTES } from '../../../configs/routes';
import { IForgotPasswordValidation } from '../../../models/auth';
import { useHistory } from 'react-router';

interface Props {
    loading: boolean;
    errorMessage: string
}

const ForgetPasswordForm = (props: Props) => {
    const { loading } = props
    const history = useHistory()
    const { control, handleSubmit, formState: { errors } } = useForm<IForgotPasswordValidation>()

    const onSubmit = (data: IForgotPasswordValidation) => {
        console.log(data);

    }
    return (
        <Container sx={{ display: 'flex', flex: '1 1 0%', flexDirection: 'column' }} component='main' maxWidth="lg">
            <Stack sx={{ flex: "1 1 0%", alignItems: 'center', marginTop: '80px' }}>
                <Typography sx={{ margin: '0px 0px 20px', fontWeight: 500, lineHeight: 1.19444, fontSize: "36px", letterSpacing: '-0.03em' }} variant='h3'>
                    <FormattedMessage id='titlePageForgotPassword' />
                </Typography>
                <Paper
                    sx={{
                        color: 'rgb(17, 24, 28)',
                        borderRadius: '12px',
                        padding: '24px',
                        width: '100%',
                        maxWidth: '348px',
                        boxShadow: 'rgba(236, 238, 240, 0.5) 0px 10px 5px',
                        boxSizing: 'border-box'
                    }}
                    elevation={4}
                >
                    <Box onSubmit={handleSubmit(onSubmit)} component='form'>
                        <Grid2 sx={{ justifyContent: 'space-between', alignItems: 'center' }} container spacing={1} >
                            <Grid2 direction="row" xs={12}>
                                <Typography sx={{ fontSize: '16px', letterSpacing: '-0.01em', display: 'flex', flexWrap: 'wrap' }}>
                                    <FormattedMessage id='labelForgotEmail' />
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 direction='row' xs={12}>
                                <Controller
                                    name='email'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name='forgotPassword'
                                            margin='dense'
                                            type="email"
                                            fullWidth
                                            variant='filled'
                                            error={errors.email ? true : false}
                                            helperText={errors.email ? <FormattedMessage id='requireEmail' /> : ""}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                            sx={{
                                                margin: '8px 0px 4px',
                                                ".MuiInputBase-root": {
                                                    fontSize: '16px',
                                                    letterSpacing: '-0.01em',
                                                    color: 'rgb(17, 24, 28)',
                                                    backgroundColor: 'rgb(241, 243, 245)',
                                                    borderRadius: '6px',
                                                    ".MuiInputBase-input": {
                                                        padding: '8px'
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
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Grid2>
                        </Grid2>
                        <Stack sx={{ margin: '8px 0px' }}>
                            <Button
                                sx={{
                                    fontWeight: 400,
                                    lineHeight: 1.71429,
                                    textTransform: 'capitalize',
                                    fontSize: '16px',
                                    color: 'rgb(251, 253, 255)',
                                    backgroundColor: 'rgb(0, 145, 255)',
                                    height: '48px',
                                    borderRadius: '6px',
                                    "&:hover": {
                                        backgroundColor: 'rgb(0, 129, 241)'
                                    }
                                }}
                                type='submit'
                                size='large'
                                variant='contained'
                                fullWidth
                                disabled={loading}
                                disableElevation
                            >
                                <Typography sx={{ textTransform: 'initial', letterSpacing: '-0.01em', fontSize: '16px', }}>
                                    <FormattedMessage id='confirmSendOTP' />
                                </Typography>
                            </Button>
                            <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Link
                                    sx={{
                                        color: "rgb(0, 145, 255)",
                                        margin: '16px 0px 0px',
                                        fontSize: '14px',
                                        lineHeight: '1.35714',
                                        letterSpacing: '-0.01em',
                                        cursor: 'pointer',
                                        "&:hover": {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                    onClick={() => history.push(ROUTES.login)}
                                    underline='none'
                                    variant='body2'>
                                    <FormattedMessage id='backToSignIn' />
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Paper>
            </Stack>
        </Container>
    )
}

export default ForgetPasswordForm
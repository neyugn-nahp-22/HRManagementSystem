import { Box, Button, Container, Link, Paper, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import InputField from '../../../components/InputField/InputField';
import { ROUTES } from '../../../configs/routes';
import { IForgotPasswordValidation } from '../../../models/auth';


interface Props {
    loading: boolean;
    errorMessage: string
}

const ForgetPasswordForm = (props: Props) => {
    const { loading, errorMessage } = props
    const { control, handleSubmit, formState: { errors } } = useForm<IForgotPasswordValidation>()

    const onSubmit = (data: IForgotPasswordValidation) => {
        console.log(data);

    }
    return (
        <Container component='main' maxWidth="lg">
            <Box>
                <Typography variant='h3'>
                    <FormattedMessage id='titlePageForgotPassword' />
                </Typography>
                <Paper elevation={4}>
                    <Box onSubmit={handleSubmit(onSubmit)} component='form'>
                        <InputField
                            id='labelForgotEmail'
                            name='forgotPassword'
                            control={control}
                            type='email'
                            errors={errors.email ? true : false}
                            helperText={errors.email ? <FormattedMessage id='requireEmail' /> : ""}
                            InputProps={{ disableUnderline: true }}
                        />
                        <Stack>
                            <Button
                                type='submit'
                                size='large'
                                variant='contained'
                                fullWidth
                                disabled={loading}
                                disableElevation
                            >
                                <Typography>
                                    <FormattedMessage id='signIn' />
                                </Typography>
                            </Button>
                            <Stack>
                                <Link href={ROUTES.login} underline='none' variant='body2'>
                                    <FormattedMessage id='backToSignIn' />
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default ForgetPasswordForm
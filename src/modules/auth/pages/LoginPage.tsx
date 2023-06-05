import { Box, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ILoginParams } from '../../../models/auth';
import LoginForm from '../components/LoginForm';
import { getToken } from '../redux/authReducer';
import { userTokenSelector } from '../redux/authSelector';

const LoginPage = () => {
    const dispatch = useDispatch()

    const onLogin = (data: ILoginParams) => {
        dispatch(getToken(data))
    }

    const loading = useSelector(userTokenSelector)

    return (
        <Stack sx={{ alignItems: 'center', minHeight: '100vh', backgroundColor: 'rgb(248, 249, 250)' }}>
            <Box sx={{ marginTop: '64px', width: '100px', height: '100px' }} component='img' src='http://web-training.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg'></Box>
            <Typography sx={{ margin: '0px 0px 0.35em', fontWeight: 500, fontSize: '36px', lineHeight: 1.19444, letterSpacing: '-0.03em', textAlign: 'center' }} variant='h3'>
                <FormattedMessage id='titleAuthLayout' />
            </Typography>
            <LoginForm onLogin={onLogin} loading={loading} errorMessage={""} />
        </Stack >
    )
}

export default LoginPage
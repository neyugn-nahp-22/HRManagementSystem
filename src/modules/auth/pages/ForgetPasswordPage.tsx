import { Box, Stack, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import ForgetPasswordForm from '../components/ForgetPasswordForm'


const ForgetPasswordPage = () => {
  return (
    <div>
      <Stack>
        <Box component='img' src='http://web-training.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg'></Box>
        <Typography variant='h3'>
          <FormattedMessage id='titleAuthLayout' />
        </Typography>
        <ForgetPasswordForm errorMessage='' loading={false} />
      </Stack >
    </div>
  )
}

export default ForgetPasswordPage
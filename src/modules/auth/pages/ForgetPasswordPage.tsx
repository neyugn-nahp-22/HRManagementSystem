import { Box, Stack, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import ForgetPasswordForm from '../components/ForgetPasswordForm'


const ForgetPasswordPage = () => {
  return (
    <div>
      <Stack sx={{ alignItems: 'center', backgroundColor: 'rgb(248, 249, 250)', minHeight: '100vh' }}>
        <Box sx={{ marginTop: '64px', width: '100px', height: '100px' }} component='img' src='http://web-training.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg'></Box>
        <Typography sx={{ margin: '0px 0px 0.35em', fontWeight: 500, lineHeight: '1.19444', fontSize: '36px', letterSpacing: '-0.03em', }} align='center' gutterBottom variant='h3'>
          <FormattedMessage id='titleAuthLayout' />
        </Typography>
        <ForgetPasswordForm errorMessage='' loading={false} />
      </Stack >
    </div>
  )
}

export default ForgetPasswordPage
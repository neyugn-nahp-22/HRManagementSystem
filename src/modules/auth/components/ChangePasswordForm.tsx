import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import BreadcrumbComponent from '../../../components/BreadcrumbComponent/BreadcrumbComponent'
import CustomDivider from '../../../components/DividerComponent/DividerComponent'
import InputField from '../../../components/InputField/InputField'
import LoadingButtonCustom from '../../../components/LoadingButton/LoadingButton'
import { ROUTES } from '../../../configs/routes'
import { IChangePasswordValidation } from '../../../models/auth'

const ChangePasswordForm = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<IChangePasswordValidation>({ mode: 'onBlur' })

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };
    return (
        <>
            <BreadcrumbComponent items={[{ label: 'General', path: `${ROUTES.home}` }, { label: "Settings" }]} />
            <Typography variant="h3" sx={{
                fontWeight: 500,
                lineHeight: 1.19444,
                fontSize: "36px",
                letterSpacing: "-0.03em",
                color: "rgb(17, 24, 28)",
                margin: "10px 0px"
            }}
            >
                <FormattedMessage id="settings" />
            </Typography>
            <Paper
                sx={{
                    backgroundColor: 'rgb(251, 252, 253)',
                    color: 'rgb(17, 24, 28)',
                    boxShadow: 'rgb(241, 243, 245) 0px 5px 20px',
                    borderRadius: '12px',
                    padding: "10px",
                    marginBottom: '10px'
                }}
                elevation={3}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ flex: '1 1 0%' }}>
                        <Typography sx={{ fontWeight: 500, lineHeight: 1.375, fontSize: '24px', letterSpacing: '-0.03em' }} variant='h4'>
                            <FormattedMessage id="changePassword" />
                        </Typography>
                    </Box>
                    <Box sx={{ flexShrink: 0 }}></Box>
                </Box>
                <CustomDivider />
                <Box sx={{ maxWidth: '272px', marginLeft: '10px', marginRight: '10px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} component='form'>
                        <InputField
                            id='newPassword'
                            name='newPassword'
                            control={control}
                            type='password'
                            errors={errors.newPassword ? true : false}
                            helperText={errors.newPassword ? <FormattedMessage id="requirePassword" /> : ""}
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
                        <InputField
                            id='confirmPassword'
                            name='confirmPassword'
                            control={control}
                            type='password'
                            errors={errors.confirmPassword ? true : false}
                            helperText={errors.confirmPassword ? <FormattedMessage id="requireConfirmPassword" /> : ""}
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
                        <Stack>
                            <LoadingButtonCustom id="confirm" />
                        </Stack>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

export default ChangePasswordForm
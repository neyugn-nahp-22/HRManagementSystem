import { Box, InputAdornment, Typography } from '@mui/material'
import InputFieldSalary from '../components/InputFieldSalary'

interface ISalaryWages {
    form?: any
}

const SalaryWages: React.FC<ISalaryWages> = ({ form }) => {
    const { control, handleSubmit} = form

    const onSubmit = (data: ISalaryWages) => {
        console.log(data);
    }

    return (
        <Box onSubmit={handleSubmit(onSubmit)} sx={{ padding: "0px 20px 20px", maxWidth: '560px' }} component='form'>
            <InputFieldSalary
                control={control}
                label='basicSalary'
                name='basic_salary'
                require={true}
                type='number'
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment sx={{ color: "rgb(215, 219, 223)", marginRight: "0px", marginTop: "0px !important" }} position='start'>
                            <Typography sx={{ color: "rgb(0, 106, 220)" }}>Rp</Typography>
                        </InputAdornment>
                    )
                }}
            />
            <InputFieldSalary
                control={control}
                label='salaryAudit'
                name='audit_salary'
                require={true}
                type='number'
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment sx={{ color: "rgb(215, 219, 223)", marginRight: "0px", marginTop: "0px !important" }} position='start'>
                            <Typography sx={{ color: "rgb(0, 106, 220)" }}>Rp</Typography>
                        </InputAdornment>
                    )
                }}
            />
            <InputFieldSalary
                control={control}
                label='safetyAmount'
                name='safety_insurance'
                require={true}
                type='number'
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment sx={{ color: "rgb(215, 219, 223)", marginRight: "0px", marginTop: "0px !important" }} position='start'>
                            <Typography sx={{ color: "rgb(0, 106, 220)" }}>Rp</Typography>
                        </InputAdornment>
                    )
                }}
            />
            <InputFieldSalary
                control={control}
                label='healthyAmount'
                name='health_insurance'
                require={false}
                type='number'
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment sx={{ color: "rgb(215, 219, 223)", marginRight: "0px", marginTop: "0px !important" }} position='start'>
                            <Typography sx={{ color: "rgb(0, 106, 220)" }}>Rp</Typography>
                        </InputAdornment>
                    )
                }}
            />
            <InputFieldSalary
                control={control}
                label='mealAllowance'
                name='meal_allowance'
                require={true}
                type='number'
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment sx={{ color: "rgb(215, 219, 223)", marginRight: "0px", marginTop: "0px !important" }} position='start'>
                            <Typography sx={{ color: "rgb(0, 106, 220)" }}>Rp</Typography>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    )
}

export default SalaryWages
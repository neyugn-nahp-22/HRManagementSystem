import { Box, InputAdornment, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputFieldSalary from '../components/InputFieldSalary'

interface ISalaryParams {
    audit_salary: number | '';
    basic_salary: number | '';
    health_insurance: number | '';
    meal_allowance: number | '';
    safety_insurance: number | '';
}

const SalaryWages = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ISalaryParams>()

    return (
        <Box sx={{ padding: "0px 20px 20px", maxWidth: '560px' }} component='form'>
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
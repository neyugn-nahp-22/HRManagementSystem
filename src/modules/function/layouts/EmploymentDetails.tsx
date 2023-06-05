import { Box, Checkbox, FormControlLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DEPARTMENT, POSITION } from '../../../assets/data/data'
import { ICreateParams, ICreateValidation } from '../../../models/employee'
import SelectField from '../components/CreateSelectField'
import { ChangeEvent, useState } from 'react'

const EmploymentDetailsComponent = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<ICreateParams>({ mode: "onBlur" })
    const [checked, setChecked] = useState(false)
    const [checkPaid, setCheckPaid] = useState(false)

    const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    const handleCheckPaid = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckPaid(e.target.checked)
    }
    return (
        <Box sx={{
            display: 'flex',
            flexFlow: "column wrap",
            padding: '0px 20px 20px',
            maxWidth: '560px',
            gap: "10px"
        }}
            component='form'
        >
            <SelectField
                label='department'
                name="department"
                require={false}
                defaultValue={''}
                control={control}
                placeholder='Choose Department'
                data={DEPARTMENT}
            />
            <SelectField
                label='position'
                name="position"
                require={false}
                defaultValue={''}
                control={control}
                placeholder='Choose Position'
                data={POSITION}
            />
            <FormControlLabel control={<Checkbox color='success' checked={checked} onChange={handleChecked} />} labelPlacement='end' label="Entitled OT"></FormControlLabel>
            <FormControlLabel control={<Checkbox color='success' checked={checkPaid} onChange={handleCheckPaid} />} labelPlacement='end' label="Meal Allowance Paid"></FormControlLabel>
            <FormControlLabel disabled control={<Checkbox color='success' checked={!checked} onChange={handleChecked} />} labelPlacement='end' label="Operational Allowance Paid"></FormControlLabel>
            <FormControlLabel disabled control={<Checkbox color='success' checked={!checked} onChange={handleChecked} />} labelPlacement='end' label="Attendance Allowance Paid"></FormControlLabel>
        </Box>
    )
}

export default EmploymentDetailsComponent
import { Box, Checkbox, FormControlLabel } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { getDepartment, getPosition } from '../../../services/employeeService'
import SelectField from '../components/CreateSelectField'

interface IEmploymentDetails {
    form?: any
}

const EmploymentDetails: React.FC<IEmploymentDetails> = ({ form }) => {

    const { control, handleSubmit } = form
    const [checked, setChecked] = useState(false)
    const [checkPaid, setCheckPaid] = useState(false)
    const [department, setDepartment] = useState([])
    const [position, setPosition] = useState([])

    const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    const handleCheckPaid = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckPaid(e.target.checked)
    }

    const onSubmit = (data: IEmploymentDetails) => {
        console.log(data);
    }

    useEffect(() => {
        getDepartment().then((data) => { setDepartment(data.data.data) }).catch((err) => console.log(err));
        getPosition().then((data) => { setPosition(data.data.data) }).catch((err) => console.log(err))
    }, [])
    return (
        <Box sx={{
            display: 'flex',
            flexFlow: "column wrap",
            padding: '0px 20px 20px',
            maxWidth: '560px',
            gap: "10px"
        }}
            component='form'
            onSubmit={handleSubmit(onSubmit)}
        >
            <SelectField
                label='department'
                name="department_id"
                require={false}
                defaultValue={''}
                control={control}
                placeholder='Choose Department'
                data={department}
            />
            <SelectField
                label='position'
                name="position_id"
                require={false}
                defaultValue={''}
                control={control}
                placeholder='Choose Position'
                data={position}
            />
            <FormControlLabel control={<Checkbox color='success' checked={checked} onChange={handleChecked} />} labelPlacement='end' label="Entitled OT"></FormControlLabel>
            <FormControlLabel control={<Checkbox color='success' checked={checkPaid} onChange={handleCheckPaid} />} labelPlacement='end' label="Meal Allowance Paid"></FormControlLabel>
            <FormControlLabel disabled control={<Checkbox color='success' checked={!checked} onChange={handleChecked} />} labelPlacement='end' label="Operational Allowance Paid"></FormControlLabel>
            <FormControlLabel disabled control={<Checkbox color='success' checked={!checked} onChange={handleChecked} />} labelPlacement='end' label="Attendance Allowance Paid"></FormControlLabel>
        </Box>
    )
}

export default EmploymentDetails
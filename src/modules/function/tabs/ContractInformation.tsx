import { Box, Stack } from '@mui/material'
import { EMPLOYEE_TYPE } from '../../../assets/data/data'
import SelectField from '../components/CreateSelectField'
import DatePickerField from '../components/DatePickerComponent'
import UploadForm from '../components/UploadForm'

interface IContractInformation {
    form?: any
}

const ContractInformation: React.FC<IContractInformation> = ({ form }) => {
    const { control, handleSubmit, formState: { errors } } = form

    const onSubmit = (data: IContractInformation) => {
        console.log(data);
    }

    return (
        <Box sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Stack sx=
                {{
                    flexFlow: "column wrap",
                    maxWidth: "400px",
                    width: '100%',
                    paddingBottom: '20px',
                    gap: "10px"
                }}
                component='form'
                onSubmit={handleSubmit(onSubmit)}
            >
                <DatePickerField
                    label='dateStart'
                    name='contract_start_date'
                    type='text'
                    require={true}
                    control={control}
                    errors={errors.contract_start_date ? true : false}
                    helperText={errors.contract_start_date ? "" : null}
                />
                <SelectField
                    label='Type'
                    name="type"
                    require={true}
                    defaultValue={''}
                    control={control}
                    placeholder='Choose Type'
                    data={EMPLOYEE_TYPE}
                    errors={errors.type ? true : false}
                    helperText="requireType"
                />
            </Stack>
            <UploadForm />
        </Box>
    )
}

export default ContractInformation
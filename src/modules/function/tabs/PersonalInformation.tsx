import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { GENDER } from '../../../assets/data/data'
import { getMarriage } from '../../../services/employeeService'
import InputField from '../components/CreateInputField'
import SelectField from '../components/CreateSelectField'
import DatePickerField from '../components/DatePickerComponent'

interface IPersonalInformation {
    form?: any,
    values?: any
}
const PersonalInformation: React.FC<IPersonalInformation> = ({ form, values }) => {

    const { control, handleSubmit, formState: { errors } } = form
    const [marriage, setMarriage] = useState([])

    const onSubmit = (data: IPersonalInformation) => {
        console.log(data);
    }

    useEffect(() => {
        getMarriage().then((data) => { setMarriage(data.data.data) }).catch((err) => console.log(err))
    }, [])

    return (
        <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexWrap: "wrap",
                paddingBottom: '20px'
            }}
        >
            <Stack sx={{ flex: "1 1 0%", paddingLeft: "20px", paddingRight: "20px", gap: "10px" }}>
                <InputField
                    label='name'
                    name="name"
                    require={true}
                    control={control}
                    type='text'
                    errors={errors.name ? true : false}
                    helperText={errors.name ? <FormattedMessage id="requireName" /> : null}
                    InputProps={{ disableUnderline: true }}
                />
                <SelectField
                    label='gender'
                    name="gender"
                    require={true}
                    defaultValue={''}
                    control={control}
                    placeholder='Choose Gender'
                    data={GENDER}
                    errors={errors.gender ? true : false}
                    helperText="requireGender"
                />
                <InputField
                    label='motherName'
                    name="mother_name"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <DatePickerField
                    label='dateofbirth'
                    name='dob'
                    type='text'
                    require={true}
                    control={control}
                    errors={errors.dob ? true : false}
                    helperText={errors.dob ? '' : null}
                />
                <InputField
                    label='placeofbirth'
                    name="pob"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='KTPNo'
                    name="ktp_no"
                    require={true}
                    control={control}
                    type='number'
                    errors={errors.ktp_no ? true : false}
                    helperText={errors.ktp_no ? <FormattedMessage id="requireKTP" /> : null}
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='NationalCardID'
                    name="nc_id"
                    require={true}
                    control={control}
                    type='number'
                    errors={errors.nc_id ? true : false}
                    helperText={errors.nc_id ? <FormattedMessage id="requireNcid" /> : null}
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='homeAddress1'
                    name="home_address_1"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='homeAddress2'
                    name="home_address_2"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
            </Stack>
            <Stack sx={{ flex: "1 1 0%", paddingLeft: "20px", paddingRight: "20px", gap: "10px" }}>
                <InputField
                    label='mobileNo'
                    name="mobile_no"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='TelNo'
                    name="tel_no"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <SelectField
                    label='marriageStatus'
                    name="marriage_id"
                    require={false}
                    defaultValue={''}
                    control={control}
                    placeholder='Choose Marriage Status'
                    data={marriage}
                />
                <InputField
                    label='bankCardNo'
                    name="card_number"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='bankAccountNo'
                    name="bank_account_no"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='bankName'
                    name="bank_name"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='familyCardNumber'
                    name="family_card_number"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='safetyInsuranceNo'
                    name="safety_insurance_no"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='healthInsuranceNo'
                    name="health_insurance_no"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
            </Stack>
        </Box>
    )
}

export default PersonalInformation
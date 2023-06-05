import { Box, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import { GENDER, MARRIAGE_STATUS } from '../../../assets/data/data'
import { ICreateParams } from '../../../models/employee'
import InputField from '../components/CreateInputField'
import SelectField from '../components/CreateSelectField'
import DatePickerField from '../components/DatePickerComponent'

const PersonalInformation = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<ICreateParams>({ mode: "onBlur" })

    const onSubmit = (data: ICreateParams) => { }

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
                    name="motherName"
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
                    helperText={errors.dob ? <FormattedMessage id="requireName" /> : null}
                />
                <InputField
                    label='placeofbirth'
                    name="placeofbirth"
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
                    type='text'
                    errors={errors.ktp_no ? true : false}
                    helperText={errors.ktp_no ? <FormattedMessage id="requireKTP" /> : null}
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='NationalCardID'
                    name="nc_id"
                    require={true}
                    control={control}
                    type='text'
                    errors={errors.nc_id ? true : false}
                    helperText={errors.nc_id ? <FormattedMessage id="requireNcid" /> : null}
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='homeAddress1'
                    name="homeAddress1"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='homeAddress2'
                    name="homeAddress2"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
            </Stack>
            <Stack sx={{ flex: "1 1 0%", paddingLeft: "20px", paddingRight: "20px", gap: "10px" }}>
                <InputField
                    label='mobileNo'
                    name="mobileNo"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='TelNo'
                    name="TelNo"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <SelectField
                    label='marriageStatus'
                    name="marriageStatus"
                    require={false}
                    defaultValue={''}
                    control={control}
                    placeholder='Choose Marriage Status'
                    data={MARRIAGE_STATUS}
                />
                <InputField
                    label='bankCardNo'
                    name="bankCardNo"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='bankAccountNo'
                    name="bankAccountNo"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='bankName'
                    name="bankName"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='familyCardNumber'
                    name="familyCardNumber"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='safetyInsuranceNo'
                    name="safetyInsuranceNo"
                    require={false}
                    control={control}
                    type='text'
                    InputProps={{ disableUnderline: true }}
                />
                <InputField
                    label='healthInsuranceNo'
                    name="healthInsuranceNo"
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
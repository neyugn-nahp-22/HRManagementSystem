import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { CalendarIcon, NextIcon, PreviousIcon, ShowMoreIcon } from '../../../components/Icons';
import './DatePicker.module.scss';


interface Props {
    label: string,
    control: any,
    name: string,
    type: string,
    errors?: any,
    helperText?: any,
    require: boolean
}

const DatePickerField = (props: Props) => {
    const { label, control, errors, name, type, helperText, require } = props

    return (
        <Grid2 sx={{ flexFlow: "row wrap", alignItems: 'center', justifyContent: 'space-between' }} container spacing={1}>
            <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}>
                <Typography sx={{ display: 'flex', flexWrap: "wrap" }}>
                    <FormattedMessage id={label} />
                    {
                        require === true
                            ? <Typography component={'span'} sx={{ letterSpacing: "-0.01em", color: "rgb(229, 72, 77)" }}>*</Typography>
                            : null
                    }
                </Typography>
            </Grid2>
            <Grid2 xs={12} sm={12} md={7} lg={7.2} xl={8}>
                <Controller
                    control={control}
                    name="date"
                    rules={{ required: require }}
                    render={({ field }) => (
                        <DatePicker
                            selected={field.value}
                            onChange={(date) => field.onChange(date)}
                            popperPlacement="bottom-start"
                            dateFormat='yyyy-MM-dd'
                            customInput={
                                <TextField
                                    {...field}
                                    name={name}
                                    type={type}
                                    variant='filled'
                                    error={errors}
                                    helperText={helperText}
                                    InputProps={{
                                        disableUnderline: true,
                                        startAdornment: <CalendarIcon />,
                                        endAdornment: <ShowMoreIcon />
                                    }}
                                    sx={{
                                        ".MuiInputBase-root": {
                                            borderRadius: '6px',
                                            backgroundColor: "rgb(241, 243, 245)",
                                            overflow: "hidden",
                                            "input": {
                                                padding: "12px"
                                            }
                                        },
                                        ".Mui-error": {
                                            border: "1px solid rgb(243, 174, 175)",
                                            backgroundColor: 'rgb(255, 239, 239)',
                                            "&:hover": {
                                                border: "1px solid rgb(243, 174, 175)",
                                                backgroundColor: 'rgb(255, 239, 239)',
                                            }
                                        },
                                        ".MuiFormHelperText-root": {
                                            border: 'none',
                                            backgroundColor: "transparent",
                                            "&:hover": {
                                                border: 'none',
                                                backgroundColor: "transparent",
                                            }
                                        }
                                    }}
                                />
                            }
                            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                                <Stack sx={{ minWidth: '350px', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: "4px 8px" }}>
                                    <IconButton sx={{ marginRight: '8px', color: "rgb(215, 219, 223)", width: '32px', height: "32px" }} onClick={decreaseMonth} size='small'>
                                        <PreviousIcon />
                                    </IconButton>
                                    <Box>
                                        <Typography variant="h6">{date.toLocaleString('en-US', { month: "long", year: "numeric" })}</Typography>
                                        <Button sx={{ marginRight: '8px', color: "rgb(215, 219, 223)", width: '32px', height: "32px" }}>
                                            <ShowMoreIcon />
                                        </Button>
                                    </Box>
                                    <IconButton sx={{ marginRight: '8px', color: "rgb(215, 219, 223)", width: '32px', height: "32px" }} onClick={increaseMonth} size='small'>
                                        <NextIcon />
                                    </IconButton>
                                </Stack>
                            )
                            }
                        />
                    )}
                />
            </Grid2>
        </Grid2>
    )
}

export default DatePickerField
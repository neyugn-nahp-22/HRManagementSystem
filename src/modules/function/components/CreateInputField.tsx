import { TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { Controller } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

interface Props {
    label: string,
    control: any,
    name: string,
    type: string,
    errors?: any,
    helperText?: any,
    InputProps: any,
    require: boolean,
    hidden?: boolean,
    multiline?: boolean,
    rows?: number
}

const InputField = (props: Props) => {
    const { label, control, errors, name, type, helperText, InputProps, require, hidden, multiline, rows } = props

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
                    name={name}
                    control={control}
                    defaultValue=''
                    rules={{ required: require }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            name={name}
                            type={type}
                            fullWidth
                            hidden={hidden}
                            variant='filled'
                            error={errors}
                            helperText={helperText}
                            InputProps={InputProps}
                            multiline={multiline}
                            rows={rows}
                            sx={{
                                ".MuiInputBase-root": {
                                    borderRadius: '6px',
                                    backgroundColor: "rgb(241, 243, 245)",
                                    overflow: "hidden",
                                    paddingRight: '0px',
                                    "input": {
                                        padding: "12px"
                                    },
                                    "textarea": {
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
                    )}
                />
            </Grid2>
        </Grid2>
    )
}

export default InputField
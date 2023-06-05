import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FilledInput, FormHelperText, MenuItem, Select, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';


interface Props {
    label: string,
    control: any,
    name: string,
    require: boolean,
    defaultValue: any,
    placeholder: string,
    data: any,
    helperText?: string,
    errors?: any,
    multiple?: boolean,
    disable?: boolean
}

const SelectField = (props: Props) => {
    const { label, control, name, require, defaultValue, placeholder, data, helperText, errors, multiple, disable } = props
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
                    defaultValue={defaultValue}
                    rules={{ required: require }}
                    render={({ field }: any) => (
                        <>
                            <Select
                                {...field}
                                displayEmpty
                                variant='filled'
                                input={<FilledInput />}
                                fullWidth
                                disableUnderline
                                disabled={disable}
                                multiple={multiple}
                                IconComponent={KeyboardArrowDownIcon}
                                error={errors}
                                sx={{
                                    backgroundColor: "rgb(241, 243, 245)",
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    ".MuiSelect-select": {
                                        padding: '12px',
                                        ".css-ahj2mt-MuiTypography-root": {
                                            color: "rgb(104, 112, 118)"
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
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <Typography>{placeholder}</Typography>
                                    }
                                    return data.find((item: any) => item.id === selected)?.name
                                }}
                            >

                                {data.map((item: any, index: number) => (
                                    <MenuItem
                                        sx={{
                                            padding: '8px 0px',
                                            "&.MuiButtonBase-root": {
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                                margin: '2px 0px 0px',
                                                "&:hover": {
                                                    color: 'rgb(48, 164, 108)',
                                                    backgroundColor: 'rgba(193, 200, 205, 0.08)',
                                                }
                                            },
                                            '&.Mui-selected': {
                                                backgroundColor: "rgb(233, 249, 238)",
                                                color: "rgb(48, 164, 108)",
                                                "&:hover": {
                                                    backgroundColor: 'rgb(221, 243, 228)'
                                                }
                                            },
                                            '&.Mui-focusVisible': {
                                                backgroundColor: "transparent",
                                            }
                                        }}
                                        key={index} value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                            {errors && (
                                <FormHelperText sx={{ color: "#d32f2f", margin: "3px 14px" }}>
                                    <FormattedMessage id={helperText} />
                                </FormHelperText>
                            )}
                        </>
                    )}
                />
            </Grid2>
        </Grid2 >
    )
}

export default SelectField
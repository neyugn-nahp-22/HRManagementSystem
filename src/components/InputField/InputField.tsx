import { TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';


interface Props {
    control: any,
    className?: string,
    errors: any,
    name: string,
    type: string,
    helperText: any,
    id: string,
    InputProps: any
}

const InputField = (prop: Props) => {
    const { control, className, errors, name, type, helperText, id, InputProps } = prop
    return (
        <Grid2 container spacing={1} >
            <Grid2 direction="row" xs={12}>
                <Typography sx={{ fontSize: '16px', letterSpacing: '-0.01em', display: 'flex', flexWrap: 'wrap' }}>
                    <FormattedMessage id={id} />
                    <span></span>
                </Typography>
            </Grid2>
            <Grid2 direction='row' xs={12}>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className={className}
                            name={name}
                            type={type}
                            fullWidth
                            variant='filled'
                            error={errors}
                            helperText={helperText}
                            InputProps={InputProps}
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
                                    },
                                    "&:hover": {
                                        backgroundColor: 'rgb(241, 243, 245)'
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
                                },
                            }}
                        />
                    )}
                />
            </Grid2>
        </Grid2>
    )
}

export default InputField
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import ClearIcon from '@mui/icons-material/Clear';
import { LoadingButton } from '@mui/lab';

interface Props {
    loading: boolean,
    onClose: () => void,
    open: boolean,
    onClickHandle: () => void,
    request: string,
    dialogContent?: string,
    isContent: boolean
}

const CustomDialog: React.FC<Props> = ({ loading, onClose, open, onClickHandle, request, dialogContent, isContent }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    color: 'rgb(17, 24, 28)',
                    maxWidth: '444px',
                    borderRadius: '8px',
                    boxShadow: 'none'
                }
            }}
        >
            <DialogTitle sx={{ fontWeight: 400, lineHeight: 1.38889, fontSize: '18px', padding: '20px 16px 4px 24px' }}>
                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '24px', lineHeight: 1.375, letterSpacing: '-0.03em' }} variant='h4'>
                        <FormattedMessage id={request} />
                    </Typography>
                    <IconButton onClick={onClose} sx={{ color: 'rgb(17, 24, 28)' }} size='small'>
                        <ClearIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            {isContent ?
                <DialogContent sx={{ flex: '1 1 auto', overflowY: 'auto', padding: '0px 24px' }}>
                    <Typography sx={{ fontSize: '16px', letterSpacing: '-0.01em', color: 'rgb(104, 112, 118)' }}>
                        <FormattedMessage id={dialogContent} />
                    </Typography>
                </DialogContent>
                :
                null}
            <DialogActions sx={{ justifyContent: 'center', padding: '24px' }}>
                <Button sx={{
                    fontWeight: 400,
                    lineHeight: '1.71429',
                    textTransform: 'capitalize',
                    minWidth: '148px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    height: '48px',
                    backgroundColor: 'rgb(241,243, 245)',
                    color: 'rgb(17, 24, 28)'
                }}
                    size='large'
                    disableElevation
                    onClick={onClose}
                >
                    No
                </Button>
                {!loading ?
                    <Button
                        variant='contained'
                        sx={{
                            fontWeight: 400,
                            lineHeight: '1.71429',
                            textTransform: 'capitalize',
                            minWidth: '148px',
                            borderRadius: '6px',
                            fontSize: '16px',
                            height: '48px',
                            backgroundColor: 'rgb(0, 145, 255)',
                            color: 'rgb(251, 253, 255)',
                            "&:hover": {
                                backgroundColor: 'rgb(0, 129, 241)',
                                textDecoration: 'none'
                            }
                        }}
                        size='large'
                        disableElevation
                        onClick={onClickHandle}
                    >
                        Yes
                    </Button>
                    :
                    <LoadingButton sx={{
                        fontWeight: 400,
                        lineHeight: '1.71429',
                        textTransform: 'capitalize',
                        minWidth: '148px',
                        borderRadius: '6px',
                        fontSize: '16px',
                        height: '48px',
                        backgroundColor: 'rgba(193, 200, 205, 0.24)',
                        color: 'rgb(17, 24, 28)'
                    }}
                        loading={loading}
                        variant="contained"
                        size='large'
                    >
                    </LoadingButton>
                }
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog
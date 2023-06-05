import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, Button, Container, Dialog, DialogActions, DialogTitle, IconButton, Link, Paper, Popover, Toolbar, Typography } from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router';
import { FlagIcon, Logo } from '../../components/Icons';
import LoadingButtonCustom from '../../components/LoadingButton/LoadingButton';
import { ROUTES } from '../../configs/routes';
import { userDetail } from '../../services/authService';
import ClearIcon from '@mui/icons-material/Clear';
import Cookies from 'js-cookie';
import { LoadingButton } from '@mui/lab';


const Header = () => {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [detailUser, setDetailUser] = useState<any>({})
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const getUserDetail = async () => {
        try {
            const res = await userDetail()
            const data = res.data.data
            setDetailUser(data)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getUserDetail()
    }, [])

    const handleClickResetPassword = () => {
        history.push(ROUTES.changePassword)
    }

    // console.log(detailUser.username, 'detailUser');


    const handleClick = (e: MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSignOut = () => {
        setLoading(true)
        const delay = setTimeout(() => {
            Cookies.remove('token')
            setLoading(false)
            setOpenDialog(false)
            history.push(ROUTES.login)
        }, 500)
        return () => clearTimeout(delay)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'paper-popper' : undefined

    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            position: 'sticky',
            boxSizing: 'border-box',
            flexShrink: 0,
            top: "0px",
            left: 'auto',
            right: "0px",
            color: 'rgb(251, 253, 255)',
            zIndex: 1201,
            borderRadius: '0px',
            boxShadow: 'rgb(236, 238, 240) 0px 3px 15px'
        }} component='header'>
            <Container maxWidth={false}>
                <Toolbar disableGutters variant='dense' sx={{ height: '60px', minHeight: '60px' }}>
                    <Logo />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h4' sx={{ fontWeight: 500, lineHeight: 1.375, fontSize: '24px', letterSpacing: '-0.03em', color: 'rgb(17, 24, 28)' }}>
                            <FormattedMessage id="titleAuthLayout" />
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 0 }}>
                        <Button sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontWeight: 400,
                            textTransform: 'capitalize',
                            minWidth: '98px',
                            height: '32px',
                            color: 'rgb(17, 24, 28)',
                            borderRadius: '8px',
                            flex: '1 1 0%',
                            padding: '8px 12px',
                            backgroundColor: 'rgb(241, 243, 245)'
                        }} endIcon={<KeyboardArrowDownIcon />}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <FlagIcon />
                                <Typography sx={{ fontSize: '12px', textTransform: 'uppercase', }} component='span'>EN</Typography>
                            </Box>
                        </Button>
                        <IconButton onClick={handleClick} sx={{ color: 'rgb(215, 219, 223)', padding: 0 }}>
                            <Avatar sx={{ width: '32px', height: '32px', backgroundColor: 'rgb(230, 232, 235)' }}>{detailUser.username?.charAt(0)}</Avatar>
                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            PaperProps={{
                                sx: {
                                    // left: '1198px !important',
                                    color: 'rgb(17, 24, 28)',
                                    marginTop: '6px',
                                    border: '1px solid rgb(223, 227, 230)',
                                    borderRadius: '8px',
                                    boxShadow: 'rgb(236, 238, 240) 0px 5px 15px',
                                    minWidth: '272.400px',
                                    padding: '20px 24px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
                                    <Avatar sx={{ width: '32px', height: '32px', backgroundColor: 'rgb(230, 232, 235)' }}>{detailUser.username?.charAt(0)}</Avatar>
                                    <Typography sx={{ margin: '0px 0px 0px 10px', fontWeight: 500, fontSize: '24px', lineHeight: '1.375', letterSpacing: '-0.03em', flexShrink: 0 }} variant='h4'>{detailUser.username}</Typography>
                                </Box>
                                <Box sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                    <Typography sx={{ margin: "0px 0px 10px", letterSpacing: '-0.01em' }}>Developer</Typography>
                                    <Typography sx={{ fontSize: '16px', lineHeight: 1.5, letterSpacing: '-0.01em' }}>Staff ID:</Typography>
                                </Box>
                                <LoadingButtonCustom id='signOut' onClick={() => setOpenDialog(true)} />
                                <Dialog
                                    open={openDialog}
                                    onClose={() => setOpenDialog(false)}
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
                                                <FormattedMessage id="askSignOut" />
                                            </Typography>
                                            <IconButton sx={{ color: 'rgb(17, 24, 28)' }} size='small'>
                                                <ClearIcon />
                                            </IconButton>
                                        </Box>
                                    </DialogTitle>
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
                                            onClick={() => setOpenDialog(false)}
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
                                                onClick={handleSignOut}
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
                                <Link
                                    onClick={handleClickResetPassword}
                                    sx={{
                                        margin: '10px 0px',
                                        fontWeight: 400,
                                        lineHeight: 1.71429,
                                        fontSize: '14px',
                                        textTransform: 'capitalize',
                                        color: 'rgb(0, 145, 255)',
                                        cursor: 'pointer',
                                        letterSpacing: "-0.01em"
                                    }}
                                    underline='none'
                                    variant='button'>
                                    <FormattedMessage id="resetPassword" />
                                </Link>
                            </Box>
                        </Popover>
                    </Box>
                </Toolbar>
            </Container>
        </Paper>
    )
}

export default Header
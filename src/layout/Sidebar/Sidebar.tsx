import { Drawer, List, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import CustomDivider from '../../components/DividerComponent/DividerComponent'
import { AttendanceIcon, EmployeeIcon, GlobalSettingIcon, LeaveIcon, MasterIcon, PayrollIcon, SettingIcon, UserIcon } from '../../components/Icons'
import { ROUTES } from '../../configs/routes'


const LIST_ITEM = [
    {
        id: 0,
        href: ROUTES.attendance,
        icon: <AttendanceIcon />,
        title: 'Attendance Management'
    },
    {
        id: 1,
        href: ROUTES.leave,
        icon: <LeaveIcon />,
        title: 'Leave Management'
    },
    {
        id: 2,
        href: ROUTES.payroll,
        icon: <PayrollIcon />,
        title: 'Payroll Management'
    },
    {
        id: 3,
        href: ROUTES.employee,
        icon: <EmployeeIcon />,
        title: 'Employee Management'
    },
    {
        id: 4,
        href: ROUTES.user,
        icon: <UserIcon />,
        title: 'User Management'
    },
    {
        id: 5,
        href: ROUTES.master,
        icon: <MasterIcon />,
        title: 'Master Management'
    },
]

const MORE_ITEM = [
    {
        id: 6,
        href: ROUTES.globalsetting,
        icon: <GlobalSettingIcon />,
        title: "Global Settings"
    },
    {
        id: 7,
        href: ROUTES.settings,
        icon: <SettingIcon />,
        title: "Settings"
    }
]
const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const storedIndex = localStorage.getItem('selectedIndex');
        const index = storedIndex ? parseInt(storedIndex, 10) : 0;
        setSelectedIndex(index);
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedIndex', selectedIndex.toString());
    }, [selectedIndex]);

    const handleClickListItem = (index: number, href: string) => {
        setSelectedIndex(index);
        history.push(href);
    };

    return (
        <Drawer
            sx={{
                width: '329px'
            }}
            variant='permanent'
            PaperProps={{
                style: { width: '329px', overflow: 'hidden' },
                sx: { color: 'rgb(17, 24, 28)', borderRadius: '12px', borderRight: '1px solid rgba(193, 200, 205, 0.24)' }
            }}
        >
            <SimpleBar style={{ maxHeight: "100%", padding: "24px" }}>
                <Toolbar variant='dense' sx={{ height: '60px', minHeight: '60px' }}></Toolbar>
                <List component='nav'>
                    <Typography sx={{ letterSpacing: '-0.03em', fontSize: '24px', textTransform: 'capitalize', color: 'rgb(0, 106, 220)', fontWeight: 500, lineHeight: 1.375 }} variant='h4'>General</Typography>
                    {LIST_ITEM.map((item, index) => {
                        return (
                            <ListItemButton
                                sx={{
                                    height: '52px',
                                    padding: '8px 10px',
                                    borderRadius: '8px',
                                    margin: '10px 0px 0px',
                                    appearance: 'none',
                                    '&:hover': {
                                        backgroundColor: 'rgba(193, 200, 205, 0.08)',
                                    },
                                    "&.Mui-selected": {
                                        backgroundColor: 'rgb(241, 243, 245)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 145, 255, 0.16)'
                                        }
                                    },
                                    "&.Mui-selected .MuiListItemIcon-root": {
                                        boxShadow: 'rgba(148, 186, 44, 0.15) 0px 6px 9px',
                                        backgroundColor: 'rgb(251, 253, 255)'
                                    }
                                }}
                                selected={selectedIndex === index}
                                onClick={() => handleClickListItem(index, item.href)}
                                key={index}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: "rgb(215, 219, 223)",
                                        marginRight: "10px",
                                        width: "36px",
                                        minWidth: "36px",
                                        height: '100%',
                                        borderRadius: "50%",
                                        backgroundColor: "rgb(241, 243, 245)",
                                        justifyContent: 'center',
                                        alignItems: "center",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <Typography sx={{ fontSize: "16px", letterSpacing: '-0.01em' }}>{item.title}</Typography>
                            </ListItemButton>
                        )
                    })
                    }
                    <CustomDivider />
                    <Typography sx={{ letterSpacing: '-0.03em', fontSize: '24px', textTransform: 'capitalize', fontWeight: 500, lineHeight: 1.375 }} variant='h4'>Advance</Typography>
                    {MORE_ITEM.map((item, key) => (
                        <ListItemButton
                            sx={{
                                height: '52px',
                                padding: '8px 10px',
                                borderRadius: '8px',
                                margin: '10px 0px 0px',
                                appearance: 'none',
                                '&:hover': {
                                    backgroundColor: 'rgba(193, 200, 205, 0.08)',
                                },
                                "&.Mui-selected": {
                                    backgroundColor: 'rgb(241, 243, 245)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 145, 255, 0.16)'
                                    }
                                },
                                "&.Mui-selected .MuiListItemIcon-root": {
                                    boxShadow: 'rgba(148, 186, 44, 0.15) 0px 6px 9px',
                                    backgroundColor: 'rgb(251, 253, 255)'
                                }
                            }}
                            key={key}
                            selected={selectedIndex === key}
                            onClick={() => handleClickListItem(key, item.href)}
                        >
                            <ListItemIcon
                                sx={{
                                    color: "rgb(215, 219, 223)",
                                    marginRight: "10px",
                                    width: "36px",
                                    minWidth: "36px",
                                    height: '100%',
                                    borderRadius: "50%",
                                    backgroundColor: "rgb(241, 243, 245)",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <Typography>{item.title}</Typography>
                        </ListItemButton>
                    ))
                    }
                </List>
            </SimpleBar>
        </Drawer >
    )
}

export default Sidebar
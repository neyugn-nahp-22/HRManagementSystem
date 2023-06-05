import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import BreadcrumbComponent from '../../../components/BreadcrumbComponent/BreadcrumbComponent'
import { ROUTES } from '../../../configs/routes'
import MenuCreate from '../components/MenuCreate'

const CreatePage = () => {
    return (
        <>
            <BreadcrumbComponent items={[{ label: 'General', path: `${ROUTES.home}` }, { label: "Employee Management", path: `${ROUTES.employee}` }, { label: "Add new employee" }]} />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '10px', marginBottom: "20px" }}>
                <Typography variant="h3" sx={{
                    fontWeight: 500,
                    lineHeight: 1.19444,
                    fontSize: "36px",
                    letterSpacing: "-0.03em",
                    color: "rgb(17, 24, 28)"
                }}>
                    <FormattedMessage id="employeeManagement" />
                </Typography>
                <LoadingButton sx={{ textTransform: 'none' }} variant='contained' disableElevation disabled size='large' >Add</LoadingButton>
            </Box>
            <MenuCreate />
        </>
    )
}

export default CreatePage
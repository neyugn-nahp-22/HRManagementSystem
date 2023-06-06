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
            <MenuCreate />
        </>
    )
}

export default CreatePage
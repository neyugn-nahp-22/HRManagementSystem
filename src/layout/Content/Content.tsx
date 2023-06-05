import { Box, Stack } from '@mui/material'
import { Route, Switch } from 'react-router-dom'
import { ROUTES } from '../../configs/routes'
import EmployeePage from '../../modules/contents/pages/EmployeePage'
import CreatePage from '../../modules/function/pages/CreatePage'
import SettingPage from '../../modules/contents/pages/SettingPage'
import ChangePasswordPage from '../../modules/auth/pages/ChangePasswordPage'

const Content = () => {
    return (
        <Stack sx={{ flex: "1 1 0%", overflow: "hidden" }}>
            <Box sx={{ maxWidth: "1170px", flex: "1 1 0%", margin: "30px 46px 0px" }}>
                {/* <Routes /> */}
                <Switch>
                    <Route exact path={ROUTES.employee}>
                        <EmployeePage />
                    </Route>
                    <Route exact path={ROUTES.add}>
                        <CreatePage />
                    </Route>
                    <Route exact path={ROUTES.settings}>
                        <SettingPage />
                    </Route>
                    <Route exact path={ROUTES.changePassword}>
                        <ChangePasswordPage />
                    </Route>
                </Switch>
            </Box>
        </Stack>
    )
}

export default Content
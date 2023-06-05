import { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';
import PublicRoute from './modules/common/components/PublicRoute';
import { Backdrop, CircularProgress } from '@mui/material';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));
const ForgotPage = lazy(() => import('./modules/auth/pages/ForgetPasswordPage'))
const EmployeePape = lazy(() => import('./modules/contents/pages/EmployeePage'))
const CreatePage = lazy(() => import("./modules/function/pages/CreatePage"))
const ChangePasswordPage = lazy(() => import("./modules/auth/pages/ChangePasswordPage"))

interface Props { }

const Loading = () => {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export const Routes = (props: Props) => {
    const location = useLocation();
    return (
        <Suspense fallback={<Loading />}>
            <Switch location={location}>
                <PublicRoute path={ROUTES.login} component={LoginPage} />
                <ProtectedRoute path={ROUTES.home} component={HomePage} />
                <PublicRoute path={ROUTES.forgotPassword} component={ForgotPage} />
                <ProtectedRoute path={ROUTES.employee} component={EmployeePape} />
                <ProtectedRoute path={ROUTES.add} component={CreatePage} />
                <ProtectedRoute path={ROUTES.changePassword} component={ChangePasswordPage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </Suspense>
    );
};

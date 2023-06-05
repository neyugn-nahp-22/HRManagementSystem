import { Stack } from '@mui/material';
import Content from '../../../layout/Content/Content';
import Header from '../../../layout/Header/Header';
import Sidebar from '../../../layout/Sidebar/Sidebar';

interface Props { }

const HomePage = (props: Props) => {
    return (
        <Stack sx={{ display: 'flex', flexDirection: "column", backgroundColor: "rgb(248, 249, 250)", minHeight: '100vh' }}>
            <Header />
            <Stack sx={{ flexDirection: "row", flex: "1 1 0%" }}>
                <Sidebar />
                <Content />
            </Stack>
        </Stack>

    )
};

export default HomePage;

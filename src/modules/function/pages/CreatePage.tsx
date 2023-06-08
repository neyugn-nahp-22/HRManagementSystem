import { useParams } from 'react-router'
import BreadcrumbComponent from '../../../components/BreadcrumbComponent/BreadcrumbComponent'
import { ROUTES } from '../../../configs/routes'
import MenuCreate from '../components/MenuCreate'

const CreatePage = () => {

    const { id } = useParams<any>()

    return (
        <>
            <BreadcrumbComponent items={[{ label: 'General', path: `${ROUTES.home}` }, { label: "Employee Management", path: `${ROUTES.employee}` }, !id ? { label: "Add new employee" } : { label: "Edit employee" }]} />
            <MenuCreate />
        </>
    )
}

export default CreatePage
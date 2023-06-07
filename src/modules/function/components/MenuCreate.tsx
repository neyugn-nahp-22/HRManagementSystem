import { LoadingButton, TabContext, TabPanel } from '@mui/lab'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import { useHistory } from 'react-router'
import CustomDivider from '../../../components/DividerComponent/DividerComponent'
import toastMessage from '../../../components/toast/Toast'
import { ROUTES } from '../../../configs/routes'
import { ICreateParams } from '../../../models/employee'
import { addEmployeeService, getGrade } from '../../../services/employeeService'
import ContractInformation from '../layouts/ContractInformation'
import EmploymentDetailsComponent from '../layouts/EmploymentDetails'
import Other from '../layouts/Other'
import PersonalInformation from '../layouts/PersonalInformation'
import SalaryWages from '../layouts/SalaryWages'

const MenuCreate = () => {
    const form = useForm<ICreateParams>({ mode: 'onBlur' })
    const { handleSubmit, formState: { errors } } = form

    const [activeTab, setActiveTab] = useState('0');
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()

    const handleTabChange = (event: React.SyntheticEvent, newTab: string) => {
        setActiveTab(newTab);
    };

    const [grade, setGrade] = useState<any>([])

    useEffect(() => {
        getGrade().then((data) => { setGrade(data.data.data) }).catch((err) => console.log(err))
    }, [])

    const addEmployee = async (formValues: ICreateParams) => {
        const newFormValue = {
            ...formValues,
            grade_id: formValues.grade_id && Object.keys(formValues.grade_id).length !== 0 ? formValues.grade_id.value : null,
            grade:
                formValues.grade_id && Object.keys(formValues.grade_id).length !== 0
                    ? grade.find((item: any) => item.id === formValues.grade_id.value)
                    : null,
            benefits: formValues.benefits.length !== 0 ? formValues.benefits.map((item: any) => item.value) : [],
            contract_start_date: moment(formValues.contract_start_date).format('YYYY-MM-DD'),
            dob: moment(formValues.dob).format('YYYY-MM-DD'),
        };
        try {
            const res = await addEmployeeService(newFormValue)
            console.log(res);
            toastMessage('success', 'Record added')
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = (data: ICreateParams) => {
        // console.log(data);
        setLoading(true)
        const delay = setTimeout(() => {
            addEmployee(data);
            setLoading(false)
            history.push(ROUTES.employee)
        }, 500)
        return () => {
            clearTimeout(delay)
        }
    }

    const MENU_CREATE = [
        {
            id: 0,
            name: "employeeInformation",
            component: <PersonalInformation form={form} />,
            label: "Personal Information"
        },
        {
            id: 1,
            name: "contractInformation",
            component: <ContractInformation form={form} />,
            label: "Contract Information",
        },
        {
            id: 2,
            name: "employmentDetails",
            component: <EmploymentDetailsComponent form={form} />,
            label: "Employment Details",
        },
        {
            id: 3,
            name: "salary&Wages",
            component: <SalaryWages form={form} />,
            label: 'Salary & Wages'
        },
        {
            id: 4,
            name: "others",
            component: <Other form={form} />,
            label: "Others",
        },
    ]
    return (
        <>
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
                <LoadingButton
                    sx={{
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
                    variant='contained'
                    disableElevation
                    size='large'
                    onClick={handleSubmit(onSubmit)}
                // disabled={errors ? true : false}
                >
                    Add
                </LoadingButton>
            </Box>
            <TabContext value={activeTab}>
                <Stack sx={{ flexFlow: 'row wrap', gap: '4px', marginBottom: "20px" }}>
                    {MENU_CREATE.map((item) => (
                        <Button
                            key={item.id}
                            disableElevation
                            variant={activeTab === item.id.toString() ? "contained" : 'text'}
                            sx={activeTab === item.id.toString() ? {
                                boxShadow: 'none',
                                backgroundColor: "rgb(0, 145, 255)",
                                fontWeight: 400,
                                minWidth: "180px",
                                borderRadius: "6px",
                                height: "42px",
                                textTransform: "capitalize",
                                "&:hover": {
                                    backgroundColor: "rgb(0, 129, 241)"
                                }
                            } : {
                                textTransform: "capitalize",
                                color: "rgb(0, 145, 255)",
                                height: "42px",
                                backgroundColor: "rgb(237, 246, 255)",
                                fontWeight: 400,
                                minWidth: "180px",
                                borderRadius: "6px"
                            }}
                            value={item.id.toString()}
                            onClick={(event) => handleTabChange(event, item.id.toString())}
                        >
                            <FormattedMessage id={item.name} />
                        </Button>
                    ))}
                </Stack>
                {MENU_CREATE.map((item, key) => {
                    return (
                        <TabPanel key={key} hidden={item.id.toString() === activeTab ? false : true} value={activeTab} sx={{ padding: 0 }}>
                            <Paper elevation={3} sx={{ backgroundColor: "rgb(251, 252, 253)", borderRadius: "12px", padding: "10px", boxShadow: "rgb(241, 243, 245) 0px 5px 20px" }}>
                                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                                    <Box sx={{ flex: "1 1 0%" }}>
                                        <Typography variant='h5' sx={{ fontWeight: 500, fontSize: "20px" }}>{item.label}</Typography>
                                    </Box>
                                    <Box sx={{ flexShrink: 0 }}>
                                        <Typography sx={{ color: "rgb(104, 112, 118)", fontSize: '14px' }} variant='body2'>
                                            Required
                                            (
                                            <Typography sx={{ color: "rgb(229, 72, 77)", fontSize: "16px" }} variant='body1' component='span'>*</Typography>
                                            )
                                        </Typography>
                                    </Box>
                                </Box>
                                <CustomDivider />
                                {item.component}
                            </Paper>
                        </TabPanel>
                    )
                })
                }
            </TabContext>
        </>
    );
}

export default MenuCreate
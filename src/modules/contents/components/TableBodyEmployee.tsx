import { Checkbox, TableCell, TableRow } from '@mui/material';
import { SetStateAction } from 'react';
import { TABLE_FIELD, Type } from '../../../assets/data/data';

const styleTableCell = {
    color: "rgb(104, 112, 118)",
    padding: "0px 10px",
    border: "1px solid white",
    lineHeight: 1.5,
    fontSize: "12px"
}

interface TableBodyProps {
    data: any,
    isItemSelected: boolean,
    selected: readonly string[];
    setSelected: (value: SetStateAction<readonly string[]>) => void
}

const TableBodyEmployee = (props: TableBodyProps) => {
    const { data, isItemSelected, selected, setSelected } = props

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        // console.log(name, 'name');
        // console.log(selected, 'selected');
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    return (
        <TableRow
            sx={{
                backgroundColor: "rgb(248, 249, 250)",
                opacity: 1,
                "&.Mui-selected": {
                    backgroundColor: 'rgb(233, 249, 238)',
                    "&:hover": {
                        backgroundColor: 'rgb(237, 246, 255)',
                        color: 'rgb(0, 145, 255)'
                    }
                },
            }}
            hover
            selected={isItemSelected}
            onClick={(event) => { handleClick(event, data.staff_id) }}
        >
            <TableCell sx={{
                lineHeight: 1.35714,
                fontSize: "14px",
                width: '36px',
                border: "1px solid white",
                textAlign: "center",
                padding: 0
            }} padding='checkbox'>
                <Checkbox
                    size='small'
                    sx={{
                        "&:hover": {
                            backgroundColor: "rgba(48, 164, 108, 0.08)"
                        },
                        padding: "3px",
                        "&.Mui-checked": {
                            color: 'rgb(48, 164, 108)'
                        },
                    }}
                    color='success'
                    checked={isItemSelected} />
            </TableCell>
            {TABLE_FIELD.map((item: any, index: number) => {
                switch (item.id) {
                    case 'contracts':
                        if (item.label === "First Contract") {
                            return (
                                <TableCell key={index} sx={styleTableCell}>{data[item.id][0] ? data[item.id][0].contract_date : ''}</TableCell>
                            )
                        }
                        else if (item.label === "Second Contract") {
                            return (
                                <TableCell key={index} sx={styleTableCell}>{data[item.id][1] ? data[item.id][1].contract_date : ''}</TableCell>
                            )
                        }
                        else if (item.label === "End Contract") {
                            return (
                                <TableCell key={index} sx={styleTableCell}>{data[item.id][2] ? data[item.id][2].contract_date : ''}</TableCell>
                            )
                        }
                        break;
                    case 'gender':
                        return (
                            <TableCell key={index} sx={styleTableCell}>{data[item.id] === 0 ? 'Male' : "Female"}</TableCell>
                        )
                    case 'type':
                        let value;
                        if (data[item.id] === "0") {
                            value = Type.Permanent.name
                        }
                        else if (data[item.id] === "1") {
                            value = Type.PartTime.name
                        }
                        else if (data[item.id] === "2") {
                            value = Type.Contract.name
                        }
                        return (
                            <TableCell key={index} sx={styleTableCell}>{value}</TableCell>
                        )
                    case 'entitle_ot':
                    case 'meal_allowance_paid':
                        return (
                            <TableCell key={index} sx={styleTableCell}>{data[item.id] >= 1 ? "Yes" : ""}</TableCell>
                        )
                    default:
                        break;
                }
                if (item.label === 'Home Address') {
                    return item.id.map((values: string) => {
                        return (
                            <TableCell
                                sx={styleTableCell}
                                key={values}>
                                {data[values]}
                            </TableCell>
                        );
                    });
                }

                const value = data[item.id];

                return (
                    <TableCell
                        sx={styleTableCell}
                        key={index}
                    >
                        {value}
                    </TableCell>
                )
            })}
        </TableRow>
    )
}

export default TableBodyEmployee
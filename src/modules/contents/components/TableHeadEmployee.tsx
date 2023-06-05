import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { TABLE_FIELD } from '../../../assets/data/data'

interface TableHeadProps {
    numSelected: number;
    onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
    rowCount: number
}

const TableHeadEmployee = (props: TableHeadProps) => {
    const { onSelectAllClick, numSelected, rowCount } = props
    return (
        <TableHead>
            <TableRow></TableRow>
            <TableRow>
                <TableCell
                    sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        padding: "0px !important",
                        backgroundColor: "rgb(236, 238, 240) !important",
                        textAlign: "center",
                        borderTopLeftRadius: "8px",
                        width: "36px",
                        minWidth: "36px",
                        border: "1px solid white",
                        color: "rgb(17, 24, 28)"
                    }}
                    padding='checkbox'>
                    <Checkbox
                        size='small'
                        sx={{
                            padding: '4px',
                            color: 'rgb(104, 112, 118)',
                            "&:hover": {
                                backgroundColor: "rgba(48, 164, 108, 0.08)"
                            },
                            "&.Mui-checked": {
                                color: 'rgb(48, 164, 108)'
                            },
                            "&.MuiCheckbox-indeterminate": {
                                color: "rgb(48, 164, 108)"
                            }
                        }}
                        color='success'
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {TABLE_FIELD.map((item, index) => (
                    <TableCell
                        align={item.label === "Home Address" ? 'center' : 'left'}
                        sx={{
                            fontWeight: 600,
                            fontSize: "14px",
                            border: "1px solid white",
                            minWidth: item.minWidth,
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: '0px',
                            padding: '3px 10px',
                            backgroundColor: "rgb(236, 238, 240)"
                        }}
                        key={index}
                        colSpan={item.label === "Home Address" ? 2 : 1}
                    >
                        {item.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TableHeadEmployee
import { TableRow, TableCell } from "@material-ui/core"

import TableCellInput from '../table-cell-input/table-cell-input'

import { ICategory } from "./types";


const CarRow: React.FC<ICategory> = ({ categoryData }) => {
    const { name, description } = categoryData

    return (
        <>
            <TableRow>
                <TableCell >
                    <TableCellInput value={name} />
                </TableCell>

                <TableCell >
                    <TableCellInput value={description} />
                </TableCell>

            </TableRow>
        </>
    )
}

export default CarRow
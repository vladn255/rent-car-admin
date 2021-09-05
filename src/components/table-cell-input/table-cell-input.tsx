import { ITableCellInputProps } from './types'
import { StyledInput } from "./styles";


const TableCellInput: React.FC<ITableCellInputProps> = ({ value }) => {

    return (
        <StyledInput value={value} disabled/>
    )
}

export default TableCellInput
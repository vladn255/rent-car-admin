
import { Table, TableContainer } from '@material-ui/core';
import React from "react";


import { ITableElementProps } from './types'


const TableElement: React.FC<ITableElementProps> = ({ dataList, getTable }) => {

  return (
    <TableContainer component={'div'}>
      <Table aria-label="orders table">
        {getTable(dataList)}
      </Table>
    </TableContainer>
  );
}

export default TableElement
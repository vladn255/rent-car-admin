
import { Table, TableContainer } from '@material-ui/core';
import React from "react";


import { ITableElementProps } from './types'


const TableElement: React.FC<ITableElementProps> = ({ dataList, getTable }) => {

  return (
    <>
      {dataList.length > 0
        ? <TableContainer component={'div'}>
          <Table aria-label="orders table">
            {getTable(dataList)}
          </Table>
        </TableContainer>
        : <h3>Записи не найдены</h3>
      }
    </>
  );
}

export default TableElement
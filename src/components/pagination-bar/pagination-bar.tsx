import React from 'react';
import { Pagination } from '@material-ui/lab'

import { useStyles } from './styles';
import { IPaginationBarProps } from './types';

const PaginationBar: React.FC<IPaginationBarProps> = ({ count, page, callback }) => {
    const { wrapper, root } = useStyles()

    const handleChange = (evt: React.ChangeEvent<unknown>, value: number) => {
        callback(value)
    }

    return (
        <div className={wrapper}>
            <Pagination count={count} page={page} onChange={handleChange} classes={{ root: root }} />
        </div>
    );
}

export default PaginationBar
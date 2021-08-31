import { Typography, Paper } from '@material-ui/core';

import { useStyles } from './styles';
import { RootState } from '../../store/store';

import OrdersTable from '../order-table/order-table';
import { SideBarItemsNames } from '../../globals/const';
import { useSelector } from 'react-redux';

const setTable = (tabName: string) => {
    console.log('setTable', tabName)
    switch (tabName) {
        case (SideBarItemsNames.ORDERS):
            return <OrdersTable />
        case (SideBarItemsNames.CAR_CARD):
            return <h4>Ведутся работы...</h4>
        case (SideBarItemsNames.CARS_LIST):
            return <h4>Ведутся работы...</h4>

        default:
            return <OrdersTable />
    }
}

const MainContent: React.FC = () => {
    const { content, typographyBody1, paperRoot } = useStyles();

    const activeTab = useSelector((state: RootState) => state.general.selectedTab)
    console.log('main content', activeTab)

    return (
        <main className={content}>
            <Typography classes={{ body1: typographyBody1 }}>Заказы</Typography>
            <Paper classes={{ root: paperRoot }}>
                {setTable(activeTab)}
            </Paper>
        </main>
    );
}

export default MainContent
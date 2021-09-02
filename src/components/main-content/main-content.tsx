import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import OrdersTable from '../order-table/order-table';
import CarsTable from '../cars-table/cars-table';
import CategoryTable from '../category-table/category-table'
import CarCard from '../car-card/car-card'

import { SideBarItemsNames } from '../../globals/const';


const setTable = (tabName: string) => {
    switch (tabName) {
        case (SideBarItemsNames.ORDERS):
            return <OrdersTable />
        case (SideBarItemsNames.CAR_CARD):
            return <CarCard />
        case (SideBarItemsNames.CARS_LIST):
            return <CarsTable />
        case (SideBarItemsNames.CATEGORIES):
            return <CategoryTable />

        default:
            return <></>
    }
}

const MainContent: React.FC = () => {
    const { content } = useStyles();

    const activeTab = useSelector((state: RootState) => state.general.selectedTab)

    return (
        <main className={content}>
            {setTable(activeTab)}
        </main>
    );
}

export default MainContent
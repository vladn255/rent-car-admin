import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import OrdersTable from '../order-table/order-table';
import CarsTable from '../cars-table/cars-table';
import CategoryTable from '../category-table/category-table'
import CarCard from '../car-card/car-card'
import ErrorScreen from '../error-screen/error-screen';

import { SideBarItemsNames } from '../../globals/const';
import { resetCarsError } from '../../store/slices/cars/cars-slice';
import { resetCategoriesError } from '../../store/slices/categories/categories-slice';
import { resetOrdersError } from '../../store/slices/orders/orders-slice';
import { useEffect } from 'react';


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
    const dispatch = useDispatch()

    const activeTab = useSelector((state: RootState) => state.general.selectedTab)
    const carsLoadingError = useSelector((state: RootState) => state.cars.loadingError)
    const categoriesLoadingError = useSelector((state: RootState) => state.categories.loadingError)
    const ordersLoadingError = useSelector((state: RootState) => state.orders.loadingError)

    const commonError = [carsLoadingError, categoriesLoadingError, ordersLoadingError].join('')

    useEffect(() => { /* re-renders when tab or errors state change*/ }, [activeTab, carsLoadingError, categoriesLoadingError, ordersLoadingError])


    const resetError = () => {
        dispatch(resetCarsError())
        dispatch(resetCategoriesError())
        dispatch(resetOrdersError())
    }

    return (
        <>
            <main className={content}>
                {commonError
                    ? <ErrorScreen error={commonError} resetError={resetError} />
                    : setTable(activeTab)
                }
            </main>
        </>
    );
}

export default MainContent
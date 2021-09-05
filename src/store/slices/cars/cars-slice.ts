import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUrlProps } from "../../../globals/types"
import {
    ICarsState,
    IResponse,
    TParsedSelectors,
    TFilterData,
    TFormData
} from "./types";

import { fetchCars, fetchCategories } from "./api-actions";


const initCarsTable = createAsyncThunk(
    'cars/initCarsTable',
    async ({ page, limit, filters }: IUrlProps) => {
        const [cars, categories]: [IResponse, TParsedSelectors] = await Promise.all([
            (fetchCars({ page, limit, filters })),
            (fetchCategories())
        ])

        const response = { cars, categories }
        return response
    }
)


const initialState: ICarsState = {
    carsCount: 0,
    carsList: [],
    isLoading: true,
    loadingError: false,

    page: 1,
    filters: [],
    formData: [],

    categorySelects: []
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) { state.page = action.payload },
        setCurrentFilters(state, action: PayloadAction<TFilterData>) { state.filters = action.payload },
        setCarsFormData(state, action: PayloadAction<TFormData>) { state.formData = action.payload },
    },
    extraReducers: (builder) => {
        builder.addCase(initCarsTable.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(initCarsTable.fulfilled, (state, action) => {
            state.carsCount = action.payload.cars.count
            state.carsList = action.payload.cars.data
            state.categorySelects = action.payload.categories
            state.isLoading = false
        })
        builder.addCase(initCarsTable.rejected, (state) => {
            state.loadingError = true
        })
    }
})

export default carsSlice.reducer
export const { setCurrentPage, setCurrentFilters, setCarsFormData } = carsSlice.actions
export { initCarsTable }
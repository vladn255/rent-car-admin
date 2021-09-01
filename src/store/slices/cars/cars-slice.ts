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

const getCars = createAsyncThunk(
    'cars/fetchCars',
    async ({ page, limit, filters }: IUrlProps) => {
        const response = await fetchCars({ page, limit, filters })
        return (await response) as IResponse
    }
)

const getCategorySelects = createAsyncThunk(
    'cars/fetchCategories',
    async () => {
        const response = await fetchCategories()
        return (await response) as TParsedSelectors
    }
)


const initialState: ICarsState = {
    carsCount: 0,
    carsList: [],
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
        builder.addCase(getCars.fulfilled, (state, action) => {
            state.carsCount = action.payload.count
            state.carsList = action.payload.data
        })
        builder.addCase(getCars.rejected, (state) => {
            state.loadingError = true
        })

        builder.addCase(getCategorySelects.fulfilled, (state, action) => {
            state.categorySelects = action.payload
        })
        builder.addCase(getCategorySelects.rejected, (state) => {
            state.loadingError = true
        })
    }
})

export default carsSlice.reducer
export const { setCurrentPage, setCurrentFilters, setCarsFormData } = carsSlice.actions
export { getCars, getCategorySelects }
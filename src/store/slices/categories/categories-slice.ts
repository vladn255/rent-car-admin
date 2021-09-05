import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUrlProps } from "../../../globals/types"
import {
    ICategoriesState,
    IResponse,
    TFilterData,
    TFormData
} from "./types";

import { fetchCategories } from "./api-actions";

const getCategories = createAsyncThunk(
    'cars/fetchCategories',
    async ({ page, limit, filters }: IUrlProps) => {
        const response = await fetchCategories({ page, limit, filters })
        return (await response) as IResponse
    }
)


const initialState: ICategoriesState = {
    categoriesCount: 0,
    categoriesList: [],
    isLoading: false,

    page: 1,
    filters: [],
    formData: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) { state.page = action.payload },
        setCurrentFilters(state, action: PayloadAction<TFilterData>) { state.filters = action.payload },
        setCarsFormData(state, action: PayloadAction<TFormData>) { state.formData = action.payload },
        resetCategoriesError(state) { state.loadingError = undefined }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categoriesCount = action.payload.count
            state.categoriesList = action.payload.data
            state.isLoading = false
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loadingError = action.error.message
        })
    }
})

export default categoriesSlice.reducer
export const { setCurrentPage, setCurrentFilters, setCarsFormData, resetCategoriesError } = categoriesSlice.actions
export { getCategories }
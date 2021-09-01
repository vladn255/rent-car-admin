import dayjs from 'dayjs'
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import { IUrlProps, TSelectOptions } from './types'
import { TIME_FORMAT } from './const'

dayjs.extend(CustomParseFormat)

const getEndpointUrl = ({ page, limit, filters }: IUrlProps): string => {
    let filtersEndpoint
    filters
        ? filtersEndpoint = filters.map(({ name, value }) => `${name}=${value}`).join('&')
        : filtersEndpoint = ''
    return `?limit=${limit}&page=${page - 1}&${filtersEndpoint}`
}

const setSelectsOptions = (options: TSelectOptions, resetText: string): any => {
    return [{ value: 'reset', text: resetText }].concat(options)
}

const getMappedSelects = (...selects: TSelectOptions[]): any => {
    const mappedSelects = new Map()
    selects.slice().map((selectsItem) => selectsItem.slice().map(({ value, id }) => mappedSelects.set(value, id)))
    return mappedSelects
}

const parseDateToString = (dateNumber: number | undefined): string => {
    return typeof dateNumber === 'number'
        ? dayjs(dateNumber).format(TIME_FORMAT)
        : ''
}

export { getEndpointUrl, setSelectsOptions, getMappedSelects, parseDateToString }
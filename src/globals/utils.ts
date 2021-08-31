import { IUrlProps, TSelectOptions } from './types'

const getEndpointUrl = ({ page, limit, filters }: IUrlProps): string => {
    let filtersEndpoint
    filters
        ? filtersEndpoint = filters.map(({ name, value }) => `${name}=${value}`).join('&')
        : filtersEndpoint = ''
    return `?limit=${limit}&page=${page}&${filtersEndpoint}`
}

const setSelectsOptions = (options: TSelectOptions, resetText: string): any => {
    return [{ value: 'reset', text: resetText }].concat(options)
}

const getMappedSelects = (...selects: TSelectOptions[]): any => {
    const mappedSelects = new Map()
    selects.map((selectsItem) => selectsItem.slice().map(({ value, id }) => mappedSelects.set(value, id)))
    return mappedSelects
}

export { getEndpointUrl, setSelectsOptions, getMappedSelects }
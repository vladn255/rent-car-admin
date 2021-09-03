import React from "react";
import { useStyles } from "./styles";

const FILE_NAME_SLICE = '/files';
const URL_PART = 'https://api-factory.simbirsoft1.com';

const checkIsValid = (src?: string) => {
    let isValid = true;

    if (!src) {
        isValid = false;
    } else if (src) {
        if (!(src.includes('jpg') || src.includes('jpeg') || src.includes('png'))) {
            isValid = false;
        }
    }

    return isValid
}

const checkIsValidSrc = (src?: string) => {
    if (src) {
        return src.includes(FILE_NAME_SLICE)
            ? `${URL_PART}${src}`
            : src
    } else {return ''}
}

const ModelPhoto: React.FC<{src: string | undefined}> = ({src}) => {
    const { image } = useStyles()

    return (
        <>
            {checkIsValid(src)
                ? <img className={image} src={checkIsValidSrc(src)} alt={'model photo'} />
                : <img alt='photo unavailable'/>}

        </>
    )
}

export default ModelPhoto
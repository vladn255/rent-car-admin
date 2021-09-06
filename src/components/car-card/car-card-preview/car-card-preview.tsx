import { useEffect, useState } from "react"
import { Paper, Divider } from "@material-ui/core"

import ModelPhoto from "../../model-photo/model-photo"

import { ICarPreviewProps } from "./types"
import {
    useStyles,
    CarName,
    CarCategory,
    ProgressBarWrapper,
    ProgressLabel,
    ProgressValue,
    Progress,
    DescriptionWrapper,
    DescriptionLabel,
    Textarea,
    HiddenInput,
    InputFileLabel,
    ModelPresentWrapper,
    PlateNumber
} from './styles'

interface IFileState {
    originalname?: string,
    size?: number,
    mimetype?: string,
    path?: string
}

const CarCardPreview: React.FC<ICarPreviewProps> = ({ name, thumbnail, categoryId, number, description, getPreviewData }) => {
    const {
        paperPreview,
        dividerRoot
    } = useStyles()

    const [fileData, setFileData] = useState<IFileState>(thumbnail)
    const [currentDescr, setCurrentDescr] = useState(description)

    useEffect(() => {
        setFileData(thumbnail)
        setCurrentDescr(description)
    }, [thumbnail, description])

    const handleFileInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        if (evt.target.files && evt.target.files.length !== 0) {
            const file = evt.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onload = () => {
                const newThumbnail = {
                    originalname: file.name,
                    size: file.size,
                    mimetype: file.type,
                    path: reader.result as string
                }
                setFileData(newThumbnail)
                getPreviewData({
                    thumbnail: newThumbnail,
                    description: currentDescr
                })
            }
        }
    }

    const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        evt.preventDefault()
        setCurrentDescr(evt.target.value)
        getPreviewData({
            thumbnail: fileData,
            description: evt.target.value
        })
    }

    return (
        <Paper classes={{ root: paperPreview }}>
            <ModelPresentWrapper>
                <ModelPhoto src={fileData.path} />
                <CarName>{name}</CarName>
                <CarCategory>{categoryId?.name}</CarCategory>
                <PlateNumber>{number}</PlateNumber>
                <InputFileLabel htmlFor="photo-file">{fileData.originalname ? `${fileData.originalname}` : 'Выберите файл...'}</InputFileLabel>
                <HiddenInput name="photo-file" type="file" id="photo-file" accept="image/png, image/jpeg, image/jpg" onChange={handleFileInput} />
            </ModelPresentWrapper>
            <Divider classes={{ root: dividerRoot }} />
            <ProgressBarWrapper>
                <ProgressLabel htmlFor="form-progress">Заполнено</ProgressLabel>
                <ProgressValue>{`25%`}</ProgressValue>
                <Progress id="form-progress" max="100" value={'25'} />
            </ProgressBarWrapper>
            <Divider classes={{ root: dividerRoot }} />
            <DescriptionWrapper>
                <DescriptionLabel htmlFor="description-field">Описание</DescriptionLabel>
                <Textarea name="description-field" id="description-field" placeholder="Введите описание автомобиля" rows={4} value={currentDescr} onChange={handleTextAreaChange}></Textarea>
            </DescriptionWrapper>
        </Paper >
    )
}

export default CarCardPreview
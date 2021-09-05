import { FormEvent, MouseEvent, SyntheticEvent } from "react"

type clickEvent = FormEvent<HTMLFormElement> | MouseEvent | SyntheticEvent
type submitEvent = SyntheticEvent

interface IButtonProps {
    className?: string,
    title: string,
    type: "button" | "submit" | "reset" | undefined,
    isDisabled?: boolean,
    clickHandler?: ((evt: clickEvent) => void) | ((evt: submitEvent) => void)
}

export type { IButtonProps, clickEvent, submitEvent }
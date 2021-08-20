import { FormEvent, MouseEvent } from "react"

interface IButtonProps {
    title: string,
    type: "button" | "submit" | "reset" | undefined,
    addClasses?: string,
    isDisabled?: boolean,
    clickHandler?: (evt: FormEvent<HTMLFormElement> | MouseEvent) => void
}

export type { IButtonProps }
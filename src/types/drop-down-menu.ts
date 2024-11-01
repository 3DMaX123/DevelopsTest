export interface IDropDownMenu<T>{
    current: T | null | undefined,
    defaultValue: T,
    action: (a: T) => void,
    list: string[],
    uniqueClassName?: string,
}

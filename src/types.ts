export interface IItem {
    id: number,
    title: string,
    price: number,
    image: string
}

export type ItemState = {
    items: IItem[]
}

export type ItemAction = {
    type: string
    item: IItem
}

export type DispatchType = (args: ItemAction) => ItemAction
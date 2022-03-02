const useCheck = (idCart: number, item: any) => {
    let status = false;
    item.find((i: { id: number; }) => i.id === idCart) ? status = true : status = false
    return status
}

export default useCheck;
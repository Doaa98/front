export interface IncommingReqest {

    id?: number
    status: number
    serviceID?: number
    sellerID: string
    date?: Date
    price?:number
    buyerID: string
    serviceTitle?:string
    userFullName?:string
    chatID?:number

}
enum States{
    AwaitingInstructions,
    BeingImplemented,
    AwaitingReceipt,
    ItHasBeenDelivred,
    Canceled
}

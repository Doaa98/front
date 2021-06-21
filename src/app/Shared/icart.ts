import { Iservice } from "./iservice";

export interface Icart {
    id:number

    quantity:number

    serviceId:number

    userId:string
    
    price?:number
    service?:Iservice
}

import { Iservice } from "./iservice";

export interface ICategory {
    id:number
    arabicName:string
    isShow?:boolean 
    services?:Iservice[]
}

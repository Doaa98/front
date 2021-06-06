import { Iservice } from "./iservice";

export interface ICategory {
    id:number
    name:string
    isShow?:boolean 
    services?:Iservice[]
}

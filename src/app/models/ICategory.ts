import { IService } from "./IService";

export interface ICategory {
    id:number
    arabicName:string
    isShow?:boolean 
    services?:IService[]
}

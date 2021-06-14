import { IServiceDevelopment } from "./IServiceDevelopment";

export interface IService {
    
    id:number

    title:string

    subCategoryName:string

    description:string

    images:string

    keywords:string

    duration:number

    instructionsToBuyer:string

    serviceDevelopmentsVM:IServiceDevelopment[]
    
    userID:string

    userFullName?:string

    noOfBuyerServices?:number
}

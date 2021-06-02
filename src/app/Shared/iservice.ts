import { IServiceDevelopment } from "./iservice-development";

export interface Iservice {
    
    id:number

    title:string

    subCategoryID:number

    description:string

    images:string

    keywords:string

    duration:number

    instructionsToBuyer:string

    serviceDevelopmentsVM:IServiceDevelopment[]
    
    userID:string
}

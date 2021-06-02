import { IServiceDevelopment } from "./iservice-development";

export interface Iservice {
    
    ID:number

    Title:string

    SubCategoryID:number

    Description:string

    Images:string

    Keywords:string

    Duration:number

    InstructionsToBuyer:string

    serviceDevelopmentsVM:IServiceDevelopment[]
    
    UserID:string
}

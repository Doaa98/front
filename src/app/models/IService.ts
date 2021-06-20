import { IServiceDevelopment } from "./IServiceDevelopment";
import { IServiceGallery } from "./IServiceGallery";

export interface IService {
    id?:number,

    title:string

    subCategoryId:number

    description:string

    seriveGallery?: IServiceGallery

    keywords:string

    duration:number

    instructionsToBuyer:string

    serviceDevelopmentsVM?: IServiceDevelopment[]
    
    userID:string

    userFullName?:string

    noOfBuyerServices?:number
}

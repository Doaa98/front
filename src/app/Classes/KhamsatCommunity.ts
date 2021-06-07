export enum SubjectCategory {
    userExperiencesAndStories = "UserExperiencesAndStories",
    aboutKhamsat = "AboutKhamsat",
    notFoundService = "NotFoundService",
    modelsImplemented = "ModelsImplemented"
}
export enum Subject {
UserExperiencesAndStories,
AboutKhamsat,
NotFoundService,
ModelsImplemented
}
//use to index home
export interface KhamsatCommunityVM {
    id: number;
    content: string;
    title: string;
    subject: Subject;
    date: Date;
    Comment:customcomment;
    userID: string;
    image: string;
    fullName: string;
}
//get one by comments
export interface khamsatcommunity_withcomments {
    ID: number
    content: string;
    title: string;
    date: string;
    _Comments:customcomment[];/// list
    userID: string;
    userImage: string;
    userFullName: string;
}
//use to show
export  interface customcomment
{
      ID :number;
      content :string;    
      userID :string;
      image :string;
     fullName :string;
     date: Date;
}
//use to create
export interface  customkhamsat
{
     ID :number;
     content:string; 
     title :string;
     subject : SubjectCategory;
     Date :string;
     userID :string;
   
}



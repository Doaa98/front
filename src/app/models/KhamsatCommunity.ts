
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
    comment:customcomment;
    userID: string;
    image: string;
    fullName: string;
}
//get one by comments
export interface khamsatcommunity_withcomments {
    id: number
    content: string;
    title: string;
    date: Date;
    _Comments:customcomment[];/// list
    userID: string;
    userImage: string;
    userFullName: string;
}
//use to show
export  interface customcomment
{
    id :number,
    content :string,
    khamsatcommunityID :number,
    userID :string,
    image :string,
    date:Date,
    fullName :string,
}
//use to create
export interface  customkhamsat
{
     id :number;
     content:string;
     title :string;
     subject : string;
     date :Date;
     userID :string;
}
// to create comment
export interface CommentViewModel
{
     id :number,
    content :string,
     date :Date,
     userID:string,
     khamsatcommunityID  :number,
}



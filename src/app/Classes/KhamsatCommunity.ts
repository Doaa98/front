 enum SubjectCategory
{
    UserExperiencesAndStories,
    AboutKhamsat,
    NotFoundService,
    ModelsImplemented
}
export class KhamsatCommunity {
    constructor(
        public Content:String, 
        public Title:String,
        public Subject:SubjectCategory,
        public Comments:String,
        public UserID:number,


    ){}
}
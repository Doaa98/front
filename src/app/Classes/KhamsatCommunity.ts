export enum SubjectCategory {
    userExperiencesAndStories = "UserExperiencesAndStories",
    aboutKhamsat = "AboutKhamsat",
    notFoundService = "NotFoundService",
    modelsImplemented = "ModelsImplemented"
}
export class KhamsatCommunity {
    constructor(
        public ID: number,
        public content: String,
        public title: String,
        public subject: SubjectCategory,

        public userID: number,


    ) { }
}
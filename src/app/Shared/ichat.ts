import { IMessage } from "./imessage";

export interface IChat {
    
  id: number
  date: Date
  userID: string
  freelancerID: string
  serviceID: number
  serviceTitle?:string
  messages:IMessage[]
  userfullname?:string
}

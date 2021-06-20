import { IMessage } from "./imessage";

export interface IChat {
    
  id: number
  content: string
  date: Date
  userID: string
  freelancerID: string
  serviceID: number
  serviceTitle:string
  messages:IMessage[]
}

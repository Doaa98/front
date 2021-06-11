import { IService } from './IService';

export interface ICart {
  id: number;

  quantity: number;

  serviceId: number;

  userId: string;

  price?: number;
  service?: IService;
}

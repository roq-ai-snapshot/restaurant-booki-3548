import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  table_number: number;
  capacity: number;
  location: string;
  is_reserved: boolean;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  restaurant_id?: string;
}

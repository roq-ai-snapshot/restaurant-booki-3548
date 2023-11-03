import { EmployeeInterface } from 'interfaces/employee';
import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  employee?: EmployeeInterface[];
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  table?: TableInterface[];

  _count?: {
    employee?: number;
    menu?: number;
    reservation?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  tenant_id?: string;
}

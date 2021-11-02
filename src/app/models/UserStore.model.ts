export interface UserStore{
  _id: string;
  nombre: string;
  apellido: string;
  rut:string;
  razon_social:string;
  email: string;
  password?: string;
}

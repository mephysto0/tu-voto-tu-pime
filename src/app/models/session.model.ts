import { UserPerson } from "./UserPerson.model";


export class Session{
  public token: string | undefined;
  public user : UserPerson | undefined;
}

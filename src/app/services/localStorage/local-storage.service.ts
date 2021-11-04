import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key : string,data: any){
    try {
      localStorage.setItem(key,JSON.stringify(data))
    } catch (e) {
      console.log(e);
    }
  }

  get(key : string ){
    try {
      return JSON.parse(localStorage.getItem(key)|| '{}');
    } catch (e) {
      console.log(e);
    }
  }

  remove(key : string) : void{
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('error removing key',e);
    }
  }

  clear(): void{
    try {
      localStorage.clear();
    } catch (e) {
      console.error('error cleaning localstore',e);
    }
  }
}

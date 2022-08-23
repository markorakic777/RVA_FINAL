import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LIGA_URL } from '../app constants';
import { Liga } from '../models/liga';


@Injectable({
  providedIn: 'root'
})
export class LigaService {
 

  constructor(private httpClient:HttpClient) { }

  
  public getAllLigas(): Observable<any> {
    return this.httpClient.get(`${LIGA_URL}`);
  }

  public addLiga(liga: Liga): Observable<any> 
  {
  liga.id=0;  
  return this.httpClient.post(`${LIGA_URL}`,liga);
  }
  
  public updateLiga(liga: Liga): Observable<any> {
    return this.httpClient.put(`${LIGA_URL}`,liga);
  }

  public deleteLiga(id: number): Observable<any> {
    return this.httpClient.delete(`${LIGA_URL}/${id}`);    
  }
   
}

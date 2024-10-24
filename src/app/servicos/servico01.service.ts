import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servico01Service {
  
  private urlApi = "/selecoes";

  constructor(private http: HttpClient) { }

  
  getselecao(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  buscarporID(id: number) : Observable<any> {
    return this.http.get<any>(`${this.urlApi}/${id}`)
  }
  
  postSelecao(novaSelecao: any): Observable<any> {
    return this.http.post<any>(this.urlApi, novaSelecao);
  }
  
  putSelecao(id:number, selecao:any):Observable<any>{
    return this.http.put<any>(`${this.urlApi}/${id}`,selecao);
  }
  deleteSelecao(id: number, selecao:any){
    return this.http.delete<any>(`${this.urlApi}/${id}`,selecao)
  }
}

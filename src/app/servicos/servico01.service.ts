import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servico01Service {
  // Mantenha a URL como '/selecoes' para usar o proxy
  private urlApi = "/selecoes"; // Altere para usar a URL relativa

  constructor(private http: HttpClient) { }

  // Listar Seleções
  getselecao(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  buscarporID(id: number) : Observable<any> {
    return this.http.get<any>(`${this.urlApi}/${id}`)
  }
  // Adicionar seleções
  postSelecao(novaSelecao: any): Observable<any> {
    return this.http.post<any>(this.urlApi, novaSelecao);
  }
  //Atualizar seleção
  putSelecao(id:number, selecao:any):Observable<any>{
    return this.http.put<any>(`${this.urlApi}/${id}`,selecao);
  }
  deleteSelecao(id: number, selecao:any){
    return this.http.delete<any>(`${this.urlApi}/${id}`,selecao)
  }
}

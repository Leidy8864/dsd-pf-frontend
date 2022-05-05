import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination';
import { Sucursal } from 'src/app/shared/models/sucursal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.apisucursal}/sucursal`;

  findAll() {
    return this.http.get<Sucursal[]>(this.urlBase);
  }

  pagination(page: number = 1, searchText: string = "_") {
    return this.http.get<Pagination<Sucursal>>(`${this.urlBase}/pagination/${searchText}/${page}`);
  }

  findById(id: number) {
    return this.http.get<Sucursal>(`${this.urlBase}/findById/${id}`);
  }

  save(sucursal: Sucursal) {
    return this.http.post<Sucursal>(this.urlBase, sucursal);
  }

  update(sucursal: Sucursal) {
    return this.http.put<Sucursal>(this.urlBase, sucursal);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
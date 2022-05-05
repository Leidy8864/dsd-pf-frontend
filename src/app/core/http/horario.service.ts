import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horario } from 'src/app/shared/models/horario';
import { Filter } from 'src/app/shared/models/filter';
import { Pagination } from 'src/app/shared/models/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.apihorario}/horario`;

  save(horario: Horario) {
    return this.http.post<Horario>(this.urlBase, horario);
  }

  update(horario: Horario) {
    return this.http.put<Horario>(this.urlBase, horario);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/delete/${id}`);
  }

  filter(filter: Filter) {
    return this.http.post<Pagination<Horario>>(`${this.urlBase}/filter`, filter);
  }
  
}
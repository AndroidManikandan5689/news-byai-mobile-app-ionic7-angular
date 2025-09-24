// src/app/services/news.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}/articles`);
  }
}

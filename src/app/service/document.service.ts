import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type DocumentId = string;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getDocuments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/documents`);
  }

  public getDocument(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/document?name=${name}`);
  }

  public uploadDocument(file: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/document`, file);
  }

}

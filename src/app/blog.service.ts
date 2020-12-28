import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  // getList(): Observable<any> {
  //   return this.httpClient.get<any[]>('https://blog.travlytix.com/?rest_route=/wp/v2/posts').pipe(
  //     tap(_ => console.log('blog fetch successfull'))
  //   );
  // }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@demo-che/api-interfaces';

@Component({
  selector: 'demo-che-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<unknown>('/api/hello');

  items$ = this.http.get<User>('/api/users');
  constructor(private http: HttpClient) {}
}

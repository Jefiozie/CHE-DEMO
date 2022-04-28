import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-graph',
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">Error :(</div>
    <div *ngIf="users">
      <div *ngFor="let user of users">
        <p>{{ user.name }}: {{ user.email }}</p>
        <img [src]="user.image" [alt]="user.name" />
      </div>
    </div>
  `,
})
export class GraphComponent implements OnInit {
  users: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          query {
            users {
              name
              # email
              # image
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((e) => (e.data as any).users),
        delay(1000)
      )
      .subscribe((result: any) => {
        this.loading = false;
        this.users = result;
        console.table(result);
      });
  }
}
@NgModule({
  imports: [CommonModule],
  declarations: [GraphComponent],
  exports: [GraphComponent],
})
export class GraphComponentModule {}

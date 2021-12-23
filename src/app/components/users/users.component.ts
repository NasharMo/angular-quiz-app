import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {UserDetailsPath} from "../../constants";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchFilter: any;

  displayedColumns: string[] = ['id', 'avatar', 'email', 'first_name', 'last_name'];

  dataSource = new MatTableDataSource<any>([]);
  response: any = {};

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.updatePage();
  }

  goToDetails(id: number) {
    this.router.navigate(['/' + UserDetailsPath, id]);
  }

  search(id: number) {
    if (id) {
      this.usersService.getUser(id).subscribe((result) => {
        this.dataSource.data = [result.data];
      }, () => {
        this.dataSource.data = [];
      });
    } else {
      this.updatePage();
    }
  }

  updatePage(i: number = 0) {
    this.usersService.getUsers(i + 1).subscribe((result) => {
      console.log(result);
      this.response = result;
      this.dataSource.data = result.data;
    });
  }

}

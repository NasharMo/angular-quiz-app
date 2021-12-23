import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersPath} from "../../constants";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usersService.getUser(parseInt(id)).subscribe(result => {
        this.user = result.data
      }, error => this.router.navigate(['/not-found']));
    }
  }

  goBack() {
    this.router.navigate(['/' + UsersPath]);
  }
}

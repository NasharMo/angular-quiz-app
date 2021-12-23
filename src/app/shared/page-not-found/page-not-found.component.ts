import { Component } from '@angular/core';
import {UsersPath} from "../../constants";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent{
  usersPath = UsersPath;
}

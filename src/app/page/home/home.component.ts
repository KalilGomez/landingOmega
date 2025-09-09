import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from "../../banner/banner.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

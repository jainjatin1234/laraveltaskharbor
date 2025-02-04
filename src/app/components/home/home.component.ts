import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MiddleComponent } from "../middle/middle.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, MiddleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

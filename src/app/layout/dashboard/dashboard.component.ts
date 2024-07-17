import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MenuLateralComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

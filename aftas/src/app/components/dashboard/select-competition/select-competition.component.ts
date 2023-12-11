import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-competition',
  templateUrl: './select-competition.component.html',
  styleUrls: ['./select-competition.component.css']
})
export class SelectCompetitionComponent {

  buttonText: string;

  constructor(private router: Router) {
    this.buttonText = this.router.url === '/Podium' ? 'Show Podium' : 'Show Members';
  }
}

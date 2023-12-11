import { Component , OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit, AfterViewInit{

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#competitionTable').DataTable();
    });
  }

}

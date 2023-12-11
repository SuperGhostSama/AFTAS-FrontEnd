import { Component , OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit, AfterViewInit{

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#view-members-table').DataTable();
    });
  }
}

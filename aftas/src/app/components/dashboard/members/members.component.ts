import { Component , OnInit, AfterViewInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#membersTable').DataTable();
    });
  }

}

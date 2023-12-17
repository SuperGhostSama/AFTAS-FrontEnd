import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/SharedServices/shared.service';
import { MemberService } from 'src/app/services/Member/member.service';
import { CompetitionService } from 'src/app/services/Competition/competition.service';

@Component({
  selector: 'app-add-member-competition',
  templateUrl: './add-member-competition.component.html',
  styleUrls: ['./add-member-competition.component.css']
})
export class AddMemberCompetitionComponent implements OnDestroy {
  private subscription: Subscription;
  competitions: any[] = [];
  members: any[] = [];
  selectedCompetition: string = '';
  selectedMember: string = '';

  constructor(
    private sharedService: SharedService,
    private memberService: MemberService,
    private competitionService: CompetitionService
  ) {
    // Subscribe to the trigger to perform fetch
    this.subscription = this.sharedService.triggerFetch$.subscribe(() => {
      this.fetchCompetitionsAndMembers();
    });
  }

  // Method to fetch competitions and members
  fetchCompetitionsAndMembers(): void {
    this.competitionService.getAllCompetitions().subscribe(
      (competitions) => {
        this.competitions = competitions.data;
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );

    this.memberService.getAllMembers().subscribe(
      (members) => {
        this.members = members.data;
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }

  // Method to save changes
  saveChanges(): void {
    // Add your logic to save the selected competition and member
    console.log('Selected Competition ID:', this.selectedCompetition);
    console.log('Selected Member ID:', this.selectedMember);

    // Close the modal if needed
    // $('#addMemberToCompetition').modal('hide');
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }
}

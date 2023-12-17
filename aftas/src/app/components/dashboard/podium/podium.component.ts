import { Component, OnInit, AfterViewInit, OnDestroy , OnChanges} from '@angular/core';
import { SharedService } from 'src/app/services/SharedServices/shared.service';
import { Subscription } from 'rxjs';
import { MemberService } from 'src/app/services/Member/member.service';
import { RankingService } from 'src/app/services/Ranking/ranking.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent {
  private subscription!: Subscription;
  selectedCompetitionId: string = '';
  membersRanking: any[] = [];


  constructor(
    private sharedService: SharedService,
    private rankingService: RankingService
  ) {}

  ngOnInit(): void {
    // Subscribe to the observable to get the selectedCompetitionId when it changes
    this.subscription = this.sharedService.getSelectedCompetitionIdSubject().subscribe(
      (id) => {
        this.selectedCompetitionId = id;

        // Call the method to get members by competition ID
        this.getMembersByCompetitionId(+this.selectedCompetitionId);
      }
    );
  }

  getMembersByCompetitionId(competitionId: number): void {
    this.rankingService.getTop3RankingsByCompetitionId(competitionId).subscribe(
      (data) => {
        this.membersRanking = data;
        console.log("This is the members Ranking for podium :",this.membersRanking);
        // Call a method to rerender the podium HTML
        this.renderThePodium();
      },
      (error) => {
        console.error('Error fetching members by competition ID:', error);
      }
    );
  }


  renderThePodium(): void {
    // Get the podiumDiv element
    const podiumDiv = document.getElementById('podiumDiv');
  
    // Check if podiumDiv is not null
    if (podiumDiv) {
      // Clear the existing content
      podiumDiv.innerHTML = '';
  
      // Create a new container div for the podium
      const containerDiv = document.createElement('div');
      containerDiv.className = 'container podium justify-content-center mt-5';
  
      // Iterate through membersRanking and create podium__item divs
      this.membersRanking.forEach((member, index) => {
        const podiumItemDiv = document.createElement('div');
        podiumItemDiv.className = 'podium__item';
  
        // Create and set the HTML for podium__city
        const podiumCityP = document.createElement('p');
        podiumCityP.className = 'podium__city';
        podiumCityP.textContent = member.name;
        podiumItemDiv.appendChild(podiumCityP);
  
        // Create and set the HTML for podium__rank
        const podiumRankDiv = document.createElement('div');
        podiumRankDiv.className = `podium__rank ${this.getRankClass(index)}`;
        podiumRankDiv.textContent = (index + 1).toString();
        podiumItemDiv.appendChild(podiumRankDiv);
  
        // Append the podium__item div to the container
        containerDiv.appendChild(podiumItemDiv);
      });
  
      // Append the containerDiv to the podiumDiv
      podiumDiv.appendChild(containerDiv);
    }
  }
  
  // Helper function to determine the rank class based on index
  getRankClass(index: number): string {
    switch (index) {
      case 0:
        return 'first';
      case 1:
        return 'second';
      case 2:
        return 'third';
      default:
        return '';
    }
  }
  
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedCompetitionIdSubject = new Subject<string>();

  getSelectedCompetitionIdSubject(): Subject<string> {
    return this.selectedCompetitionIdSubject;
  }

  setSelectedCompetitionId(id: string): void {
    this.selectedCompetitionIdSubject.next(id);
  }
}

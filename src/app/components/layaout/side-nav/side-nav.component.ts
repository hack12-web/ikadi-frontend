import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  panelOpenState = false;
  showFiller = true;
  showAppHomeDash = true;
  showAdministrationSyst = false;
  

  public showAdminSyst():void{
    this.showAdministrationSyst = true;
    this.showAppHomeDash = false;
  }
}

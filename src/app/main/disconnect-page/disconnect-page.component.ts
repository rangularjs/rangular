import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-disconnect-page',
  templateUrl: './disconnect-page.component.html',
  styleUrls: ['./disconnect-page.component.scss']
})
export class DisconnectPageComponent {

  constructor(private router: Router) {
  }

  back() {
    this.router.navigate(['/']);
  }

}

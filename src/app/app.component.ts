import { Component, Input } from '@angular/core';
import { environment } from '~/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'eshop-client-ngweb';
  environment = environment;

}

console.log(environment);
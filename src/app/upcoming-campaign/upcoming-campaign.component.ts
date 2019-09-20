import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Campaign } from '../campaign';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-upcoming-campaign',
  templateUrl: './upcoming-campaign.component.html',
  styleUrls: ['./upcoming-campaign.component.css']
})
export class UpcomingCampaignComponent implements OnInit {
  
  constructor() { }
  model = false;
  futureCampaigns : Campaign[] = [
    {
      date : new Date(2019,10,20),
      name : 'Test Instagram',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,9,20),
      name : 'Clash of clans',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,11,20),
      name : 'Robo war',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2020,1,20),
      name : 'Mole slayer',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2020,5,20),
      name : 'Mancal mix',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    }
  ]
  ngOnInit() {
  }
  openModal(){
  this.model = true;
  }

}

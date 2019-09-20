import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-live-campaign',
  templateUrl: './live-campaign.component.html',
  styleUrls: ['./live-campaign.component.css']
})
export class LiveCampaignComponent implements OnInit {

  constructor() { }

  @ViewChild('schedule') schedule : ElementRef;
  liveCampaigns : Campaign[] = [
    {
      date : new Date(2019,8,20),
      name : 'Test Whatsapp',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,8,20),
      name : 'Clash of clans',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,8,20),
      name : 'BoomBeach',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,8,20),
      name : 'Mole slayer',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,8,20),
      name : 'Mancal mix',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    }
  ]

  ngOnInit() {
  }
  clicked(index){
    this.liveCampaigns[index].date = this.schedule.nativeElement.value;
  }

}

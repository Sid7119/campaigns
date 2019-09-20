import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-past-campaign',
  templateUrl: './past-campaign.component.html',
  styleUrls: ['./past-campaign.component.css']
})
export class PastCampaignComponent implements OnInit {
  @ViewChild('schedule') schedule : ElementRef;
  constructor() { }
  pastCampaigns : Campaign[] = [
    {
      date : new Date(2018,8,20),
      name : 'Facebook',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,4,20),
      name : 'Pubg',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,2,20),
      name : 'BoomBeach',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2019,1,20),
      name : 'Maniacs',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    },
    {
      date : new Date(2018,9,20),
      name : 'Mancal mix',
      image : 'https://cdn.iconscout.com/icon/premium/png-512-thumb/view-price-663261.png',
      action_image : 'https://p7.hiclipart.com/preview/892/187/629/solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon.jpg',
    }
  ]
  ngOnInit() {
  }
  clicked(index){
    this.pastCampaigns[index].date = this.schedule.nativeElement.value;
  }

}

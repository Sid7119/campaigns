import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpcomingCampaignComponent } from './upcoming-campaign/upcoming-campaign.component';
import { LiveCampaignComponent } from './live-campaign/live-campaign.component';
import { PastCampaignComponent } from './past-campaign/past-campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingCampaignComponent,
    LiveCampaignComponent,
    PastCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

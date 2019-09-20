import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCampaignComponent } from './upcoming-campaign.component';

describe('UpcomingCampaignComponent', () => {
  let component: UpcomingCampaignComponent;
  let fixture: ComponentFixture<UpcomingCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

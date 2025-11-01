import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAnime } from './videos-anime';

describe('VideosAnime', () => {
  let component: VideosAnime;
  let fixture: ComponentFixture<VideosAnime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosAnime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosAnime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

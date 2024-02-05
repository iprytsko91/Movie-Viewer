import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigatorComponent } from './side-navigator.component';
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";
import { Store } from "@ngrx/store";
import { loadPopularMovies, MockedData } from "@shared";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";

describe('SideNavigatorComponent', () => {
  let component: SideNavigatorComponent;
  let fixture: ComponentFixture<SideNavigatorComponent>;
  let store: MockStore<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavigatorComponent],
      providers: [
        provideRouter(routes),
        provideMockStore()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SideNavigatorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore<any>;
    fixture.detectChanges();
  });

  it('should dispatch loadPopularMovies action when loadMore function is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.loadMore();
    expect(dispatchSpy).toHaveBeenCalledWith(loadPopularMovies());
  });

  it('should render a list of items from the store', () => {
    component.movies$ = of(MockedData);
    fixture.detectChanges();
    const sectionElements = fixture.nativeElement.querySelectorAll('section');
    expect(sectionElements.length).toBe(MockedData.length);
    expect(sectionElements[0].textContent).toContain(MockedData[0].title);
    expect(sectionElements[1].textContent).toContain(MockedData[1].title);
    expect(sectionElements[2].textContent).toContain(MockedData[2].title);
  });

  it('should check active movie has active class', () => {
    component.movies$ = of(MockedData);
    component.selectedMovie$ = of(MockedData[0]);
    fixture.detectChanges();
    const sectionElements = fixture.nativeElement.querySelectorAll('section');
    expect(sectionElements[0].classList).toContain('active');
  });
});

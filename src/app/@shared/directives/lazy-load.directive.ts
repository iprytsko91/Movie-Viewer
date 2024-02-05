import { Directive, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: '[mvLazyLoad]',
  standalone: true,
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input() loadCallback: Function = () => {
  };
  private observer: IntersectionObserver;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.loadCallback();
          }, 300) // Just for imitation of loading.
        }
      });
    }, {threshold: [0, 1]}); // TODO: on first loading entry intersected and calls function. Think about fix

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}

import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ViewHolderComponent } from './view-holder/view-holder.component';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit {

  style = {
    // "rows": "6",
    // "columns": "12"
    "display": "grid",
    // "columnns": 12,
    "grid-template-columns": "7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8%",
    "grid-template-rows": "16.7% 16.7% 16.7% 16.7% 16.7% 16.7%",
    "gap": '0.3rem',
    "justify-content": "space-around"
    // "grid-template-rows"
  }
  
  constructor(private cfr: ComponentFactoryResolver, private vcr: ViewContainerRef ) { }

  ngOnInit() {
    const factory = this.cfr.resolveComponentFactory(ViewHolderComponent);
    const ref = this.vcr.createComponent(factory);
    const element = ref.location.nativeElement;
    element.style.display = this.style.display;
      element.style.gridTemplateColumns = this.style["grid-template-columns"];
      element.style.gridTemplateRows = this.style["grid-template-rows"]
      element.style.gridGap = this.style['gap'];
      
      console.log(element.style, this.style["grid-template-columns"])
  }

}

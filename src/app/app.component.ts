import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private resolver: ComponentFactoryResolver) { }

  @ViewChild('templateRef', { read: ViewContainerRef }) entry: ViewContainerRef;

  start(event) {
    console.log(event);
    this.createComponent(event);
  }

  stop() {
    console.log('STOP');
  }


  createComponent(message) {
    let component = OddComponent;
    if (message % 2 === 0) {
      component = EvenComponent;
    }
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.inputNumber = message;
  }
}

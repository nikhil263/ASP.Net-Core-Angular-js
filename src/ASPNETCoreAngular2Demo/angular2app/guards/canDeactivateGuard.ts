import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<AboutComponent> {
  
  canDeactivate(component: AboutComponent) {
    // Component represents your component here
    return component.MyCanDeactivate ? component.MyCanDeactivate() : true;
  }

}
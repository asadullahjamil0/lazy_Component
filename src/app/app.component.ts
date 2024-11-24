import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lazy_Component';
  constructor(private containerView: ViewContainerRef,
    private cfr: ComponentFactoryResolver) { }
  async loadAdmin() {
    this.containerView.clear();
    const { AdminlistComponent } = await import('./adminlist/adminlist.component');
    this.containerView.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }
  async loadUser() {
    this.containerView.clear();
    const { UserlistComponent } = await import('./userlist/userlist.component');
    this.containerView.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
}

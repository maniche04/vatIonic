import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}

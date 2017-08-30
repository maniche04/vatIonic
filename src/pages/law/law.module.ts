import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawPage } from './law';

@NgModule({
  declarations: [
    LawPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LawPage),
  ],
})
export class LawPageModule {}

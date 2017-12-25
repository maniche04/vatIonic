import { PipesModule } from './../../pipes/pipes.module';
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
    PipesModule,
    IonicPageModule.forChild(LawPage),
  ],
})
export class LawPageModule {}

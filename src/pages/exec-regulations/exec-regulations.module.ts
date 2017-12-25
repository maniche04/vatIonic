import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecRegulationsPage } from './exec-regulations';

@NgModule({
  declarations: [
    ExecRegulationsPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(ExecRegulationsPage),
  ],
})
export class ExecRegulationsPageModule {}

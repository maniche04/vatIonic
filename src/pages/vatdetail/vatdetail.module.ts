import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VatdetailPage } from './vatdetail';
@NgModule({
  declarations: [
    VatdetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(VatdetailPage),
  ],
})
export class VatdetailPageModule {}

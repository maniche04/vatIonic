import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(NewsPage),
  ],
})
export class NewsPageModule {}

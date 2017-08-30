
import { NgModule } from '@angular/core';
import { NavtileComponent } from './navtile/navtile';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from './../pipes/pipes.module';
import { NewsArticleComponent } from './news-article/news-article';
import { InAppBrowser} from '@ionic-native/in-app-browser';
import { VatArticleComponent } from './vat-article/vat-article';
@NgModule({
	declarations: [NavtileComponent,
    NewsArticleComponent,
    VatArticleComponent],
	imports: [
    PipesModule,
    IonicPageModule.forChild(NavtileComponent)
  ],
	exports: [NavtileComponent,
    NewsArticleComponent,
    VatArticleComponent],
  providers: [
    InAppBrowser,
  ]
})
export class ComponentsModule {}

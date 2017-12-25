import { filterContent } from './filtercontent/filtercontent';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { OrderPipe } from './order-by/order-by';
import { NgModule } from '@angular/core';
import { TimeagoPipe } from './timeago/timeago';
@NgModule({
	declarations: [TimeagoPipe,SafeHtmlPipe, OrderPipe,filterContent],
	imports: [

  ],
	exports: [TimeagoPipe,SafeHtmlPipe,OrderPipe,filterContent]
})
export class PipesModule {}

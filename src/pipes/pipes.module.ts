import { SafeHtmlPipe } from './safe-html/safe-html';
import { OrderPipe } from './order-by/order-by';
import { NgModule } from '@angular/core';
import { TimeagoPipe } from './timeago/timeago';
@NgModule({
	declarations: [TimeagoPipe,SafeHtmlPipe, OrderPipe],
	imports: [

  ],
	exports: [TimeagoPipe,SafeHtmlPipe,OrderPipe]
})
export class PipesModule {}

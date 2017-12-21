import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from 'nativescript-angular'
import { NativeScriptModule } from 'nativescript-angular/nativescript.module'

import { ItemsComponent } from './items.component'

export const routes: Routes = [{
  path: '',
  component: ItemsComponent
}, {
  path: ':id',
  loadChildren: './item/item-detail/item-detail.module#ItemDetailModule'
}]

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  declarations: [ItemsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemsModule {
}

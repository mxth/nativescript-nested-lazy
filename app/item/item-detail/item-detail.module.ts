import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from 'nativescript-angular'
import { NativeScriptModule } from 'nativescript-angular/nativescript.module'

import { ItemDetailComponent } from './item-detail.component'

export const routes: Routes = [{
  path: '',
  component: ItemDetailComponent
}]

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  declarations: [ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemDetailModule {
}

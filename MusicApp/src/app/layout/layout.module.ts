import { NgModule } from '@angular/core';

import { VerticalLayoutModule } from 'app/layout/vertical/layout/layout.module'

@NgModule({
    imports: [
        VerticalLayoutModule,
    ],
    exports: [
        VerticalLayoutModule,
    ]
})
export class LayoutModule
{
}

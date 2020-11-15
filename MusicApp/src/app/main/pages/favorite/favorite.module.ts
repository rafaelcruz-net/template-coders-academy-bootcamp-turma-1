import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FavoriteComponent } from "./favorite.component";
import { RouterModule } from "@angular/router";
import {
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
} from "@angular/material";

const routes = [
    {
        path: "favorite",
        component: FavoriteComponent,
    },
];

@NgModule({
    declarations: [FavoriteComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
    ],
})
export class FavoriteModule {}

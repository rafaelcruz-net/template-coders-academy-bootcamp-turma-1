import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components/highlight/highlight.module';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MusicDetailComponent } from './music-detail/music-detail.component';

const routes = [
    {
        path: 'music',
        component: MusicComponent
    },
    {
        path: 'music/:id',
        component: MusicDetailComponent
    }
];

@NgModule({
  declarations: [
      MusicComponent,
      MusicDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FuseSharedModule,
    FuseHighlightModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgxChartsModule,

  ]
})
export class MusicModule { }

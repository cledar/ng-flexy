import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoSkinsDocComponent } from './skins-doc.component';
import { AppCommonModule } from '../common/common.module';
import { FlexyToastsModule } from '../../../../toasts/src/lib/toasts.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DemoSkinToggleComponent } from './skin-toggle.component';

const routes: Routes = [
  {
    path: '',
    component: DemoSkinsDocComponent
  }
];

@NgModule({
  imports: [CommonModule, AppCommonModule, FlexyToastsModule, TabsModule, RouterModule.forChild(routes)],
  declarations: [DemoSkinsDocComponent, DemoSkinToggleComponent]
})
export class DemoSkinsModule {}

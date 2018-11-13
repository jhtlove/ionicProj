import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { WorkPageModule } from '../work/work.module';
import { UserPageModule } from '../user/user.module';
import { MessagePageModule } from '../message/message.module';
import { FilePageModule } from '../file/file.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    WorkPageModule,
    UserPageModule,
    MessagePageModule,
    FilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { WorkPage } from '../work/work.page';
import { MessagePage } from '../message/message.page';
import { FilePage } from '../file/file.page';
import { UserPage } from '../user/user.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(work:work)',
        pathMatch: 'full',
      },
      {
        path: 'work',
        outlet: 'work',
        component: WorkPage
      },
      {
        path: 'message',
        outlet: 'message',
        component: MessagePage
      },
      {
        path: 'file',
        outlet: 'file',
        component: FilePage
      },
      {
        path: 'user',
        outlet: 'user',  // name
        component: UserPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(work:work)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

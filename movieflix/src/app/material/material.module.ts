import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  exports: [
    AccordionModule,
    PanelModule,
    ButtonModule,
    MenuModule,
    ToolbarModule,
    MenubarModule,
    SidebarModule,
    ScrollPanelModule,
    CardModule,
    ChipModule,
    PaginatorModule,
    InputTextModule,
    PasswordModule
  ],
})
export class MaterialModule {}

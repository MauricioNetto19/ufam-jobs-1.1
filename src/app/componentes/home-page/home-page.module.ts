import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { MatInputModule } from '@angular/material/input';
import { JobsModule } from "../layout/jobs/jobs.module";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        MatFormFieldModule,
        FormsModule,
        CommonModule,
        NavBarModule,
        HomePageRoutingModule,
        MatInputModule,
        JobsModule,
        MatPaginatorModule,
        MatButtonModule,
        MatListModule
    ]
})
export class HomePageModule { }

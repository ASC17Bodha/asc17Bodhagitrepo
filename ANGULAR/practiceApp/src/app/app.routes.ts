import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ApphomeComponent } from './apphome/apphome.component';
import { AppComponent } from './app.component';
import { portfolio } from './portfolio/portfolio.component';

export const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'Home',component:ApphomeComponent
        // children:[
        //     {
        //         path:'portfolio',
        //         component:AppComponent,
        //     }
        // ]
    },
    {path:'portfolio',component:portfolio}
];

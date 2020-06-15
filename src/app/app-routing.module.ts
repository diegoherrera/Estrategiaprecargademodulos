import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { PageNotFoundComponent } 
from './page-not-found/page-not-found.component';



const routes: Routes = [
	{
	   path: 'address',
	   component: AddressComponent
	},	
	{
	   path: '',
	   redirectTo: '/country',
	   pathMatch: 'full'
	},
        {
	   path: '**',
	   component: PageNotFoundComponent 
        }	
];
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GtmFeedsXmlComponent } from './components/gtm-feeds-xml/gtm-feeds-xml.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "gtm-feeds",
    component: GtmFeedsXmlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

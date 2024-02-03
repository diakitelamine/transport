import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { NgModule } from "@angular/core";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { PartenaireComponent } from "./partenaire/partenaire.component";
;


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'partenaire',component:PartenaireComponent}, 
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { PartenaireComponent } from "../partenaire/partenaire.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PartenaireComponent]
})
export class HomeComponent {

}

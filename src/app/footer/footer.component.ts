import { Component } from "@angular/core";

@Component({
    selector: 'footer-app',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    //any quiere decir que la variable 'autor' es de cualquier tipo.
    public autor: any = {nombre: 'Edwin', apellido: 'Paez'};
}

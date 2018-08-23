import  { Component } from '@angular/core';

@Component({
	selector:'Test',
	template: `
		<h2> Componente de prueba {{nombre}} </h2>
		<h3> Prueba de otro Atributo {{propiedad}} </h3>
		<h3 [style.background]="color" *ngIf="!sentenciaIf"> Entra el caso False {{propiedad}} </h3>
		<h3 [style.background]="color" *ngIf="sentenciaIf"> Entra el caso True {{propiedad}} </h3>
	`
})

export class MyFirstComponent{
	public nombre = "Ivan TEST";
	public propiedad = "Prueba propiedad 2";
	public sentenciaIf = true;
	public color = "red";
}

import  { Component } from '@angular/core';

@Component({
	selector:'Test',
	template: `
		<h2> Componente de prueba {{nombre}} </h2>
		<h3> Prueba de otro Atributo {{otroAtributo}} </h3>
	`
})

export class MyFirstComponent{
	public nombre = "Ivan TEST";
	public otroAtributo = "Prueba atributo 2"
}

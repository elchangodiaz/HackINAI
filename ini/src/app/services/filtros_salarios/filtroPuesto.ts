import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
//const array3 = array1.concat(array2);
export class FiltroPuesto {
    numeroPuestos = [
        0, // > 100
        0, // entre 90 - 100
        0, // 80 - 90
        0, // 70 - 80
        0, // 60 - 70
        0, // 50 - 60
        0, // 40 - 50
        0, // 30 - 40
        0, // 20 - 30
        0, // 10 - 20
        0  // < 10 
    ];
    nombresPuestos = [
        [''], // > 100
        [''], // entre 90 - 100
        [''], // 80 - 90
        [''], // 70 - 80
        [''], // 60 - 70
        [''], // 50 - 60
        [''], // 40 - 50
        [''], // 30 - 40
        [''], // 20 - 30
        [''], // 10 - 20
        ['']  // < 10 
    ];
    porAlcaldia = [
        new Map<string, number>(), // > 100
        new Map<string, number>(), // entre 90 - 100
        new Map<string, number>(), // 80 - 90
        new Map<string, number>(), // 70 - 80
        new Map<string, number>(), // 60 - 70
        new Map<string, number>(), // 50 - 60
        new Map<string, number>(), // 40 - 50
        new Map<string, number>(), // 30 - 40
        new Map<string, number>(), // 20 - 30
        new Map<string, number>(), // 10 - 20
        new Map<string, number>()  // < 10 
    ];

    constructor() { }
    //12 16
    transform(texto: string[]) {
        console.log('transformación de datos');
        this.llenarAlcaldias();
        //this.registros.push([]);
        texto.forEach((e: string) => {//para cada elemento separamos por comas y guardamos todo en un arreglo
            let indice;
            let temp = parseInt(String(e[16]).replace(/['"]+/g, ''));
            if (temp>= 100000) {
                indice = 0;
            } else if (temp >= 90000) {
                indice = 1;
            } else if (temp >= 80000) {
                indice = 2;
            } else if (temp >= 70000) {
                indice = 3;
            } else if (temp  >= 60000) {
                indice = 4;
            } else if (temp  >= 50000) {
                indice = 5;
            } else if (temp  >= 40000) {
                indice = 6;
            } else if (temp >= 30000) {
                indice = 7;
            } else if (temp >= 20000) {
                indice = 8;
            } else if (temp  >= 10000) {
                indice = 9;
            } else {
                indice = 10;
            }

           // console.log('indice: ',parseInt(String(e[16]).replace(/['"]+/g, '')));

            this.numeroPuestos[indice] = this.numeroPuestos[indice]+ 1;
            if (!this.checarNombre(e[12], indice)) {
                this.nombresPuestos[indice].push(e[12]);
            }
            this.porAlcaldia[indice].set('Álvaro Obregón', Number(this.porAlcaldia[indice].get('Álvaro Obregón')) + 1);

        });
        const resultado:any[] = []
        resultado.push(this.porAlcaldia);
        resultado.push(this.numeroPuestos);
        resultado.push(this.nombresPuestos);
        return resultado;
    }
    checarNombre(nombre: string, indice: number): boolean {
        let bandera = false;
        this.nombresPuestos[indice].forEach(e => {
            if (nombre == 'No existen vacantes' || nombre == 'No se genera información toda vez que no se generaron convocatorias para ocupar cargos públicos') {
                bandera = true; //no se agrega a la lista
            }
            if (e == nombre) {
                bandera = true;
            }
        });

        return bandera;
    }
    // Álvaro Obregón, Azcapotzalco, Benito Juárez, Coyoacán
    // cuajimalpa, Cuahutémoc, Gustavo A. Madero, Iztacalco
    // Iztapalapa, Magdalena Contreras, Miguel Hidalgo, Milpa Alta
    // Tláhuac, Tlalpan, Venustiano Carranza, Xochimilco
    llenarAlcaldias() {
        this.porAlcaldia.forEach(e => {
            //e.set('Álvaro Obregón',Number(e.get('Álvaro Obregón'))+1);
            e.set('Álvaro Obregón', 0);
            e.set('Azcapotzalco', 0);
            e.set('Benito Juárez', 0);
            e.set('Coyoacán', 0);
            e.set('Cuajimalpa', 0);
            e.set('Cuahutémoc', 0);
            e.set('Gustavo A. Madero', 0);
            e.set('Iztacalco', 0);
            e.set('Iztapalapa', 0);
            e.set('Magdalena Contreras', 0);
            e.set('Miguel Hidalgo', 0);
            e.set('Milpa Alta', 0);
            e.set('Tláhuac', 0);
            e.set('Tlalpan', 0);
            e.set('Venustiano Carranza', 0);
            e.set('Xochimilco', 0);
        });
    }
}
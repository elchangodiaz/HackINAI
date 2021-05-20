import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
//const array3 = array1.concat(array2);
export class FiltroUbicacion {
    alcaldiaSalario = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Álvaro Obregón,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Azcapotzalco
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Benito Juárez
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Coyoacán
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //cuajimalpa
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Cuahutémoc
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Gustavo A. Madero
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Iztacalco
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Iztapalapa
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Magdalena Contreras
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Miguel Hidalgo
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Milpa Alta
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Tláhuac
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Tlalpan
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Venustiano Carranza
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //Xochimilco

    ]

    constructor() { }
    //12 16
    transform(texto: string[]) {
        console.log('transformación de datos', texto.length);
        //this.registros.push([]);
        texto.forEach((e: string) => {//para cada elemento separamos por comas y guardamos todo en un arreglo
            let indice;
            let alcaldia: number = -1;
            let temp = parseInt(String(e[16]).replace(/['"]+/g, ''));
            if (temp >= 100000) {
                indice = 0;
            } else if (temp >= 90000) {
                indice = 1;
            } else if (temp >= 80000) {
                indice = 2;
            } else if (temp >= 70000) {
                indice = 3;
            } else if (temp >= 60000) {
                indice = 4;
            } else if (temp >= 50000) {
                indice = 5;
            } else if (temp >= 40000) {
                indice = 6;
            } else if (temp >= 30000) {
                indice = 7;
            } else if (temp >= 20000) {
                indice = 8;
            } else if (temp >= 10000) {
                indice = 9;
            } else {
                indice = 10;
            }
            //console.log('temp',temp);

            let temp2 = String(e[1]).replace(/['"]+/g, '');
            if (temp2== 'ALCALD�A ÁLVARO OBREGÓN') {           
                alcaldia = 0;
            } else if (temp2== 'ALCALD�A AZCAPOTZALCO') {
                alcaldia = 1;
            } else if (temp2== 'ALCALD�A BENITO JU�REZ') {

                alcaldia = 2;
            } else if (temp2==  'ALCALD�A COYOAC�N') {
                alcaldia = 3;
            } else if (temp2==  'ALCALD�A CUAJIMALPA') {
                alcaldia = 4;
            } else if (temp2== 'ALCALD�A CUAUHT�MOC') {
                console.log(temp2);
                alcaldia = 5;
            } else if (temp2== 'ALCALD�A GUSTAVO A. MADERO') {
                alcaldia = 6;
            } else if (temp2== 'ALCALD�A IZTACALCO') {
                //console.log('-------------');
                alcaldia = 7;
            } else if (temp2== 'ALCALD�A IZTAPALAPA') {
                alcaldia = 8;
            } else if (temp2== 'ALCALD�A MAGDALENA CONTRERAS') {
                alcaldia = 9;
            } else if (temp2== 'ALCALD�A MIGUEL HIDALGO') {
                alcaldia = 10;
            } else if (temp2== 'ALCALD�A MILPA ALTA') {
                alcaldia = 11;
            } else if (temp2==  'ALCALD�A TL�HUAC') {
                alcaldia = 12;
            } else if (temp2== 'ALCALD�A TLALPAN') {
                alcaldia = 13;
            } else if (temp2== 'ALCALD�A VENUSTIANO CARRANZA') {
                alcaldia = 14;
            } else if (temp2==  'ALCALD�A XOCHIMILCO') {
                alcaldia = 15;
            }
            // console.log('indice: ',parseInt(String(e[16]).replace(/['"]+/g, '')));
            if(alcaldia!=-1){
                this.alcaldiaSalario[alcaldia][indice] +=1;
            }

        });
        /* const resultado:any[] = []
         resultado.push(this.porAlcaldia);
         resultado.push(this.numeroPuestos);
         resultado.push(this.nombresPuestos);*/
        console.log('longitud', this.alcaldiaSalario.length);
        return this.alcaldiaSalario;
    }
}
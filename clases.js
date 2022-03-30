class Animal{       //clase padre

    // atributos clase padre
    nombre;
    alimentacion;
    #reproduccion;
    #númeroPatas;

    constructor (nombre,alimentacion,reproduccion,numeroPatas){ //constructor clase padre
        this.nombre = nombre;
        this.alimentacion = alimentacion;
        this.#reproduccion = reproduccion;
        this.#númeroPatas = numeroPatas;
    }

    // metodos para visualizar los valores de las popiedades de la clase padre.
    get getReproducción(){
        return this.#reproduccion;
    }

    get getNumeroPatas(){
        return this.#númeroPatas;
    }

    //metodos para modificad los valores de las propiedaddes de la clase padre
    set setReproduccion (reproduccion){
        this.#reproduccion = reproduccion;
    }

    set setNumeroPatas (numeroPatas){
        this.#númeroPatas = numeroPatas;
    }
}

class Perro extends Animal{ //clase hija 1

    //atributos clase hija 1
    #edad;
    #vacunacion;

    constructor (nombre,alimentacion,reproduccion,numeroPatas,edad,vacunacion){  //constructor clase hija 1
        super(nombre,alimentacion,reproduccion,numeroPatas);
        this.#edad = edad;
        this.#vacunacion = vacunacion;
    }

    // metodos para visualizar los valores de las popiedades de la clase hija 1
    get getEdad (){
        return this.#edad;
    }

    get getVacunacion(){
        return this.#vacunacion;
    }

    //metodos para modificad los valores de las propiedaddes de la clase hija 2
    set setEdad (edad){
        this.#edad = edad;
    }
    
    set setVacunacion (vacunacion){
        this.#vacunacion = vacunacion;

    }
}

class Gato extends Animal{ //clase hija 2

    //atributos clase hija 2
    #caracter;
    #esterilizacion;

    constructor (nombre,alimentacion,reproduccion,numeroPatas,caracter,esterilizacion){ //constructor clase hija 2
        super(nombre,alimentacion,reproduccion,numeroPatas);
        this.#caracter = caracter;
        this.#esterilizacion = esterilizacion;
    }

    // metodos para visualizar los valores de las popiedades de la clase hija 2
    get getCaracter (){
        return this.#caracter;
    }

    get getEsterilizacion(){
        return this.#esterilizacion;
    }

    //metodos para modificad los valores de las propiedaddes de la clase hija 2
    set setCaracter (caracter){
        this.#caracter = caracter;
    }
    
    set setEsterilizacion (esterilizacion){
        this.#esterilizacion = esterilizacion;

    }    
}

const perro = new Animal('perro','carnivoro','vivipara',4)

perro.setReproduccion= 'ovipara';
perro.setNumeroPatas= 5;

console.log(perro.getReproducción);
console.log(perro.getNumeroPatas);

console.log(perro);

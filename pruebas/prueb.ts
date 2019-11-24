class Prueba{
    public publico(){
        console.log('Soy un metodo publico');
        //this hace referencia a donde estoy en este caso Prueba
        this.privado();
    }
    protected protegido(){
        console.log('Soy un metodo protegido'); 
    }
    private privado(){
        console.log('Soy un metodo privado');
    }
}

class Prueba2 extends Prueba{
    public met1(){
        console.log('met1');
        //this.// aqui se puede ver aparte de met1, publico y protegido
    }
}

const prueba = new Prueba()
//rueba.privado();//tira error por que es privado si se pone publico si funciona
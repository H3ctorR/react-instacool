interface IPrueba{
    texto:string
    numero?:number
    boolean?:boolean
    obj?:{
        texto?:string
        numero?:number
        boolean?:boolean
    }
    arregloS?:string[]
    arregloN?:number[]
    arregloB?:boolean[]
}

interface IUser{
    name:string
}


//Se le asigna que tipo de dato resive pero tambien que tipo de dato sale
//const fn = (x:IPrueba) =>{// creo que tambien funciona asi sin asignar
//const fn = (x:IPrueba):number =>{
const fn = (x:IPrueba):IUser[] =>{//resive un dato que este en IPrueba per saca un valor que este en IUser
    return [{name:''}]
}
fn({texto:''});

//El nombre de la clase tira error ya que tiene que implementar todas las varaibles de IPrueba
// con el signo ? que esta en IPrueba se quito el error ya que signific aque esas variables son opcionales a usar
class ClasePrueba implements IPrueba{
    //texto = 555//aqui tira error por que ya s especifico que solo puede obtener estring
    texto = 'aaa'
}

//Declarar una interfaz tiene que iniciar con la letra I mayuscula


//---------------------------------------------------------------------------
interface IPrueba2{
    text:string
    func():number//void, string etc
    //func2(x:string):number
    func2(x:any):number
}

class ClasePrueba2 implements IPrueba2{
    public text = 'texto'
    public func(){
        return 1
    }
    public func2(x){
        return 1
    }
}


const x:number = 1
let y:string = 'aasda'

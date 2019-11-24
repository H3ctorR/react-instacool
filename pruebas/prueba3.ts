//Es como una funcion y va a resivir un argumento de tipo T
interface IPrueba<T>{
    data:T
}
/*
type ConBool = IPrueba<boolean>
type ConString = IPrueba<string>

const x: ConBool
const y:ConString
y.data
*/
interface IData<T>{
    name:string
    email:T
}

type UserState = IPrueba<IData<string>>


//const x:UserState
//x.data.
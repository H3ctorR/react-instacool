import React from 'react';
import Input from './Input';
import Button from './Button';
import Center from './Center';
import { Link } from 'react-router-dom';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
//import { ILogin } from "../ducks/Users";

/*class LoginForm extends React.Component<InjectedFormProps>{
    public render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <Input placeholder='Correo' label="Correo"/>
                <Input placeholder='Contraseña' label="Contraseña"/>
                <Button block={true}>Enviar</Button>
                <Center>
                    <Link to='/register'>Ir al registro</Link>
                </Center>
            </form>
        );
    }
}*/



//class LoginForm extends React.Component<InjectedFormProps<{email: string}>> {
//class LoginForm extends React.Component<InjectedFormProps<ILogin>> {
class LoginForm extends React.Component<InjectedFormProps>{
    public render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} />
                <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input} />
                <Button block={true}>Enviar</Button>
                <Center>
                    <Link to='/register'>Ir al registro</Link>
                </Center>
            </form>
        );
    }
}

//export default reduxForm<any,any>({
export default reduxForm({
    form:'login',
})(LoginForm)
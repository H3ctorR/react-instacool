import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface IInputProps{
    placeholder?:string,
    label:string
}
const style = {
    backgroundColor:'#fff',
    border:'1px solid #ddd',
    borderRadius:'4px',
    marginBottom:'10px',
    padding:'10px 15px',
    width:'calc(100% - 30px)',
}
const spanStyle={
    fontSize:'12px',   
    color:'#777',
    textTransform:'uppercase',
    fontWeight:900
} as React.CSSProperties;
/*
class Input extends React.Component<IInputProps>{
    public render(){
        const {label} = this.props;
        return(
            <div>
                <span style={spanStyle}>{label}</span>
                <input {...this.props} style={style}></input>
            </div>
        );
    }
}
export default Input;*/
const Input: React.StatelessComponent<WrappedFieldProps & IInputProps> = props =>{
    const { label } = props;
    return(
        <div>
            <span style={spanStyle}>{label}</span>
            <input {...props} style={style}></input>
        </div>
    )
}
export default Input;
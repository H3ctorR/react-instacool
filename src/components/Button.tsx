import React from 'react';

const style = (block:boolean) =>({
    backgroundColor:'#00D1B2',
    border:'0px',
    padding:'10px 15px',
    borderRadius:'4px',
    color:'#fff',
    marginBottom:'10px',
    width:block ? '100%': undefined
});
interface IButtonProps{
    block?:boolean
}
class Button extends React.Component<IButtonProps>{
    public render(){
        const { block = false } = this.props;
        return(
            <button {...this.props} style={style(block)}></button>
        );
    }
}

export default Button;
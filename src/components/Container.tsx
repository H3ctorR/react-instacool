import React from 'react';

const style = (center: boolean): React.CSSProperties => ({
    alignItems: center ? 'center': undefined,
    backgroundColor:'#E5E5E5',
    //height:'100%',
    justifyContent: center ? 'center': undefined,
    //paddingTop:'10px',
    //paddingBottom:'26%',
    padding:'10px 0px',
    //width:'calc(100vw - 30px)',
    width:'100%',
    display:'flex',
    flexDirection:'column'
}) ;
interface IContainerProps{
    center?:boolean
}
class Container extends React.Component<IContainerProps>{
    public render(){
        const { children, center=false } = this.props;
        return(
            <div style={style(center)}>
                { children }
            </div>
        )
    }
}

export default Container;
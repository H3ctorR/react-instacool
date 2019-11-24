import React from 'react';

const style = {
    textAlign:'center',
    width:'100%'
} as React.CSSProperties;


class Center extends React.Component{
    public render(){
        return(
            <div {...this.props} style={style}/>
        );
    }
}

export default Center;
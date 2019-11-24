import React from 'react';

const style = {
    img:{
        borderRadius:'100%'
    }
} ;

export default class ProfileImg extends React.Component{
    public render(){
        return(
            <div>
                <img style={style.img as React.CSSProperties} src='https://picsum.photos/id/237/100/100'/>
            </div>
        );
    }
}
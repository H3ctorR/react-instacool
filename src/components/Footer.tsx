import React from 'react';
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    footer:{
        display:'flex', 
        backgroundColor:'#eee',
        marginLeft:'-15px', 
        marginBottom:'-10px',
        width:'calc(100% + 30px)'
    },
    boton:{
        flex:1, 
        textAlign:'center', 
        padding:'10px 15px', 
        cursor:'pointer',
    } 
}
export default class Footer extends React.Component{
    public render(){
        return(
            <div style={style.footer}>
                <div style={style.boton as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp} />Like</div>
                <div style={style.boton as React.CSSProperties}><FontAwesomeIcon icon={faRetweet} />Compartir</div>
            </div>
        );
    }
}
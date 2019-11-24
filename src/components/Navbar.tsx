import React from 'react';
import { Link } from 'react-router-dom'

import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    navbar:{
        borderButtom:'solid 1px #aaa',
        padding:'10px 15px'
    },
    Link:{
        color:'#555', 
        textDecoration:'none'
    }
};

export default class Navbar extends React.Component{
    public render(){
        return(
            <div style={style.navbar}>
                <Link style={style.Link} to='/app/newsfeed'><FontAwesomeIcon icon={faNewspaper}/>Instacool</Link>
                <div style={{float:'right'}}>
                    <Link style={style.Link} to='/app/profile'><FontAwesomeIcon icon={faUser}/>Perfil</Link>
                </div>
            </div>
        );
    }
}
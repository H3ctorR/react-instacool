import React from 'react';
import ProfileImg from '../../components/ProfileImg';
import Button from '../../components/Button';
import Card from '../../components/Card';


const style = {
    row:{
        display:'flex',
        justifyContent:'space-between',
        paddingBottom:'10px'
    },
    container:{
        padding:'15px'
    }
} ;

export default class Profile extends React.Component{
    public render(){
        return(
            <div style={style.container}>
                <div style={style.row}>
                    <ProfileImg />
                    <Button>Agregar</Button>
                </div>
                <div style={style.row}>
                    <Card><img src='https://picsum.photos/id/1071/150/150'/></Card>
                    <Card><img src='https://picsum.photos/id/486/150/150'/></Card>
                    <Card><img src='https://picsum.photos/id/249/150/150'/></Card>
                </div>
                <div style={style.row}>
                    <Card><img src='https://picsum.photos/id/537/150/150'/></Card>
                    <Card><img src='https://picsum.photos/id/582/150/150'/></Card>
                    <Card><img src='https://picsum.photos/id/63/150/150'/></Card>
                </div>
            </div>
        );
    }
}
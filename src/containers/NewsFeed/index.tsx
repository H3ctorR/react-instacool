import React from 'react';
//import { render } from 'react-dom';
import Post from '../../components/Post';
import Container from '../../components/Container';

export default class NewsFeed extends React.Component{
    public render(){
        return(
            <Container>
                <div style={{margin:'0 auto'}}>
                    <Post image={'https://picsum.photos/id/237/300/200'} />
                </div>
                <div style={{margin:'0 auto'}}>
                    <Post image={'https://picsum.photos/id/237/300/200'} />
                </div>
                <div style={{margin:'0 auto'}}>
                    <Post image={'https://picsum.photos/id/237/300/200'} />
                </div>
            </Container>
        );
    }
}
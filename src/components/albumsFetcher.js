import _ from 'underscore';
import React, { Component } from 'react';
import AlbumComponent from './albumComponent';

class AlbumsFetcher extends Component {

    constructor(props){
        super();
        this.state = {
            isLoading: true,
            albums: []
        }
    }

    componentWillMount(){
        console.log('test');
        fetch('http://127.0.0.1:8000/api/albums')
        // fetch('https://swapi.co/api/people/69/')
            .then(res => res.json())
            .then(albums => {
                this.setState({
                    isLoading: false,
                    albums: albums.items
                });
            });
    }


    returnAlbums(albumList){
        return  _.map(albumList, function (album) {
            return (<AlbumComponent key={album.name} album={album} />)
        });

    }


    render() {
        if(this.state.isLoading === true){
            return (<div><h1>loading....</h1></div>)
        }
        else{
            console.log(this.state.albums);
            return (
                <div>
                    {this.returnAlbums(this.state.albums)}
                </div>
            );
        }

    }
}

export default AlbumsFetcher;


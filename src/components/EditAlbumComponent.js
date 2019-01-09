import React, { Component } from 'react';
import axios from 'axios';

class EditAlbumComponent extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            album: {}
        }
    }

    componentWillMount() {
        let albumId = this.props.match.params.album;
        console.log(albumId);

        axios.get('http://127.0.0.1:8000/api/albums/5c1001c0b4d91cb6b8c0aa60')
            .then(res => {
                console.log(res);
                let album = res.data;
                console.log(album);
                this.setState({
                    isLoading: false,
                    album: album
                });
                console.log(this.state);
            });
    }


    render() {
        if(this.state.isLoading === true){
            return (<div><h1>loading....</h1></div>)
        }
        else{
            return (
                <div>
                    <h1>{this.state.album.name}</h1>
                </div>
            );
        }
    }
}

export default EditAlbumComponent;
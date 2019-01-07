import React, { Component } from 'react';


class AlbumComponent extends Component {
    constructor(props){
        super();
        this.state = {
            isLoading: true,

        }
    }

    componentWillMount() {
        this.setState({
            isLoading: false,
            album: this.props.album
        })
    }




    render() {
        console.log(this.state);
        if(this.state.isLoading === true){
            return (<div><h1>loading....</h1></div>)
        }
        else{
            let album = this.state.album;
            return (
                <div>
                    <h1>{album.name}</h1>
                    <h3>{album.artist}</h3>
                </div>
            );
        }

    }
}
export default AlbumComponent;
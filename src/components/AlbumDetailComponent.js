import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from "axios/index";


class AlbumDetailComponent extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            album: []
        }
    }

    componentWillMount() {
        let albumId = this.props.match.params.album;

        axios.get('http://127.0.0.1:8000/api/albums/'+ albumId)
            .then(res => {
                console.log(res);
                let album = res.data;
                this.setState({
                    isLoading: false,
                    album: album
                });
            });
    }


    render() {
        if(this.state.isLoading === true){
            return (<div><h1>loading....</h1></div>)
        }
        else{
            let album = this.state.album;
            console.log(album);
            let newLink = {
                pathname: ("/edit/"+album._id),
                album: album
            };



            return (
                <Paper style={{
                    padding: '10px',
                    width: '25%',
                    margin: '20px',
                    marginLeft: '37%'
                }}>
                    <Typography variant="h5" component="h3">
                        {album.name}
                    </Typography>
                    <Typography component="p">
                        Artist: {album.artist} <br></br>
                        Genre: {album.genre} <br></br>
                        Year: {album.year}
                    </Typography>

                    <Link style={{textDecoration: 'none',  }}  to={newLink} >Edit</Link>

                </Paper>

                    );
        }

    }

}

export default AlbumDetailComponent;
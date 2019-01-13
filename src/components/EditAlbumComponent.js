import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';




class EditAlbumComponent extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            album: {},
            name: '',
            artist: '',
            year: '',
            genre: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        let albumId = this.props.match.params.album;

        event.preventDefault();

            const newAlbum = {
                name: this.state.name,
                artist: this.state.artist,
                genre: this.state.genre,
                year: this.state.year
            };

            axios.put('http://127.0.0.1:8000/api/albums/' + albumId, newAlbum)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
    };

    componentWillMount() {
        let albumId = this.props.match.params.album;
        axios.get('http://127.0.0.1:8000/api/albums/'+ albumId)
            .then(res => {
                let album = res.data;
                this.setState({
                    isLoading: false,
                    album: album,
                    name: album.name,
                    artist: album.artist,
                    year: album.year,
                    genre: album.genre

                });
            });
    }


    handleChange = event => {
        const name = event.target.name;
        const artist = event.target.artist;
        const year = event.target.year;
        const genre = event.target.genre;

            this.setState({
                [name]: event.target.value,
                [artist]: event.target.value,
                [year]: event.target.value,
                [genre]: event.target.value
            });
            console.log(this.state);

    };



    render() {
        if(this.state.isLoading === true){
            return (<div><h1>loading....</h1></div>)
        }
        else{
            let album = this.state.album;

            return (
                <Paper style={{
                    padding: '10px',
                    width: '25%',
                    margin: '20px',
                    marginLeft: '37%'
                }}>
                    <Typography variant="h5" component="h3">
                        {album.name} ({album.year})
                    </Typography>
                    <Divider light />
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            name="name"
                        />
                        <TextField
                            id="outlined-name"
                            label="Artist"
                            value={this.state.artist}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            name="artist"
                        />
                        <TextField
                            id="outlined-name"
                            label="Year"
                            value={this.state.year}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            name="year"
                        />
                        <TextField
                            id="outlined-name"
                            label="Genre"
                            value={this.state.genre}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            name="genre"
                        />
                        <br></br>
                        <Button style={{margin: '10px'}}
                                variant="outlined"
                                size="small"
                                color="secondary"
                                type='submit'>
                            Save
                    </Button>
                    </form>


                </Paper>
            );
        }
    }
}

export default EditAlbumComponent;
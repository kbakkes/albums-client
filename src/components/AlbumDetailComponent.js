import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


class AlbumDetailComponent extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            album: []
        }
    }

    componentWillMount() {
        this.setState({
            isLoading: false,
            album: this.props.location.album
        })
    }


    render() {
        if(this.state.isLoading === true){
            return (<div><h1>loading....</h1></div>)
        }
        else{

            let album = this.state.album;

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
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



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
        });


    }




    render() {
        if(this.state.isLoading === true){
            return (<div><h1>loading....</h1></div>)
        }
        else{
            let album = this.state.album;

            let newLink = {
                pathname: ("/album/"+album._id),
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
                        {album.name} ({album.year})
                    </Typography>
                    <Typography component="p">
                        {album.artist}
                    </Typography>





                    <Button
                        style={{margin: '10px'}} variant="outlined" size="small" color="secondary" >
                        <Link style={{textDecoration: 'none',  }}  to={newLink} >See More</Link></Button>

                </Paper>
            );
        }

    }
}
export default AlbumComponent;
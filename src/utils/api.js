import axios from 'axios';
import _ from "underscore";


 class Api  {


    baseUrl = 'http://127.0.0.1:8000/api/albums';

    getAllAlbums(){

      return axios.get(this.baseUrl)
            .then(res => {
                let albums = res.data.items;
                console.log(albums);
                return albums;
            });
    };




    getAlbum(){
       return axios.get(this.baseUrl);


    }

     returnAlbums(albumList){
         return  _.map(albumList, function (album) {
             return album.name
         });

     }
}

export default Api;






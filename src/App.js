import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AlbumFetcher from './components/albumsFetcher';
import AlbumDetailComponent from './components/AlbumDetailComponent';
import EditAlbumComponent from "./components/EditAlbumComponent";
import CreateAlbumComponent from './components/CreateAlbumComponent';

const Index = () => <h2>Welcome to my albums</h2>;

const AppRouter = () => (
    <Router>
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/albums/">Albums</Link>
                    </li>
                    <li>
                        <Link to="/new/">New Album</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/albums/" component={AlbumFetcher} />
            <Route name="detail" path="/album/:album/" component={AlbumDetailComponent} />
            <Route name="edit" path="/edit/:album/" component={EditAlbumComponent} />
            <Route name="new" path="/new/" component={CreateAlbumComponent} />
        </div>
    </Router>
);
export default AppRouter;

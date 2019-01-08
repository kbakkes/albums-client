import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AlbumFetcher from './components/albumsFetcher';
import AlbumDetailComponent from './components/AlbumDetailComponent';
import EditAlbumComponent from "./components/EditAlbumComponent";

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
                        <Link to="/edit/">Edit</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/albums/" component={AlbumFetcher} />
            <Route path="/albums/:name/" component={AlbumFetcher} />

            <Route path="/edit/" component={EditAlbumComponent} />

        </div>
    </Router>
);
export default AppRouter;

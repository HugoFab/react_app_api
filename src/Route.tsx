import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListCharacter from "./pages/list/List";
import CharacterDetail from "./pages/CharacterDetail";

export default function MyRoute() {


    return (
        <Router>
            <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/character?name=:name&page=:page">
                <ListCharacter/>
              </Route>
                <Route path="/characters?page=:page">
                    <ListCharacter/>
                </Route>
                <Route path="/character/:id">
                    <CharacterDetail/>
                </Route>
              <Route path="/">
                <ListCharacter/>
              </Route>
            </Switch>
        </div>
        </Router>

    );
}



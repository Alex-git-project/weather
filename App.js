import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import {Provider} from "react-redux"
import store from "./src/store";

function App() {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}

export default App;

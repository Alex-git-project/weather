import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import {Provider} from "react-redux"
import store from "./src/store";
import img from "./img/1.jpg";
import { ImageBackground ,Text} from 'react-native'

function App() {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}

export default App;
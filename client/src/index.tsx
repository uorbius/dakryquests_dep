import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store";
import "./sass/index.sass"
import 'swiper/css';
import * as serviceWorker from "./sw"

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})

const initSW = async () => {
    console.log('called!!!')
    await serviceWorker.register(null)
    console.log("called")
}

ReactDOM.render(
    <Context.Provider value={{
        store
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

initSW()



import 'antd/dist/antd.css';

import thunk from "redux-thunk";

import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';

import University from './components/University';
import { universityReducer } from './redux/reducer/universityReducer';


const store = createStore(universityReducer, applyMiddleware(thunk))

function App() {
  return (
    <div>
      <Provider store={store}>
        <University />
      </Provider>
    </div>
  );
}

export default App;

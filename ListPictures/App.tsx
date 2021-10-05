import React from 'react';
import ImagesScreen from './src/screens/ImagesScreen';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <ImagesScreen />
    </Provider>
  );
};

export default App;

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistdStore } from './store/store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistdStore}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;

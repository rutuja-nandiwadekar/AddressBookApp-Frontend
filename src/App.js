
import AddressBookForm from './Components/AddressBookForm';
import AddressBookHome from './Components/AddressBookHome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/form' component={AddressBookForm}></Route>
        <Route path='/' component={AddressBookHome}></Route>
        <Route path='/home' component={AddressBookHome}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

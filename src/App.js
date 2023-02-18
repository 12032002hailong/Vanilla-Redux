import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions";
import store from './redux/store';


function App(props) {

  const handleIncrease = () => {

    // dispatch actions
    props.increaseCounter()

    //fire actions: dispatch = fire
    // store.dispatch({
    //   type: 'test by Hai Long',
    //   payload: { 'name': "Hai Long" }
    // })
  }
  return (



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React</h1>
        <div>Count: {props.count}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

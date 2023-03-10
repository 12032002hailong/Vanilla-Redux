import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions";


import { useSelector, useDispatch } from "react-redux";

import Home from './components/Home';


const App = (props) => {
  // == const mapStateToProps = state => {
  //   return {
  //     count: state.counter.count,
  //   }
  // }
  const dispatch = useDispatch();
  const newCount = useSelector(
    (state) => { return state.counter.count }
  )


  const handleIncrease = () => {
    // == const mapDispatchToProps = dispatch => {
    //   return {
    //     increaseCounter: () => dispatch(increaseCounter()),

    //     decreaseCounter: () => dispatch(decreaseCounter()),
    //   }
    // }
    // export default connect(mapStateToProps, mapDispatchToProps)
    dispatch(increaseCounter());
  }




  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home />
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;

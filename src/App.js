
/*
* 应用级根组件
* */
import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
      return (
          <BrowserRouter>
              <Switch> {/*只匹配一个*/}
              <Route path='/login' component={Login} />
              <Route path='/' component={Admin} />
              </Switch>
          </BrowserRouter>
      );
  };

}

//默认的属性(可选)
App.defaultProps = {

};

//规定的属性(可选)
App.propTypes = {

};

export default App;

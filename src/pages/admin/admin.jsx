import React, {PureComponent} from 'react';

class Admin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render = () => {
      return (<div>admin</div>);
  };

}

//默认的属性(可选)
Admin.defaultProps = {

};

//规定的属性(可选)
Admin.propTypes = {

};

export default Admin;

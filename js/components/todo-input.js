import React from 'react'
import store from '../store/index.js'
import actions from '../actions/index.js'
/*
  Note about scoping: as of React .14, components no longer
  autobind `this` to methods.  Using ES7 arrow methods solves this by preserving the scope within the method. If you prefer to use older function declaration syntax, then ensure you bind `this` to each method that uses it.
*/
export default class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      text: ''
    }
  }
  /* Invoked immediately after the component is rendered and mounted */
  /* This marks the earliest point where you can safely interact with the DOM */
  componentDidMount = () => {
    Store.listen()
  }
  /* Called immediately before component is unmounted */
  /* Perform any necessary cleanup here */
  componentWillUnmount = () => {

  }
  _inputChange = (event) => {
    var text = event.target.value; 
    this.setState({ text: text});
    if (event.key === 'Enter' && text) {
      actions.addItem();
    }
  }
  render= () => {
    return(
      <li className="todo-input">
        <input type='text' onKeyPress={this._inputChange} />
      </li>
    )
  }
}

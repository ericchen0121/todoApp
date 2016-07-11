import React from 'react'
import TodoItem from './todo-item'
import TodoInput from './todo-input'
/*
  Note about scoping: as of React .14, components no longer
  autobind `this` to methods.  Using ES7 arrow methods solves this by preserving the scope within the method. If you prefer to use older function declaration syntax, then ensure you bind `this` to each method that uses it.
*/
export default class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {items:[]}
  }
  /* Invoked immediately after the component is rendered and mounted */
  /* This marks the earliest point where you can safely interact with the DOM */
  componentDidMount = () => {

  }
  /* Called immediately before component is unmounted */
  /* Perform any necessary cleanup here */
  componentWillUnmount = () => {

  }
  render(){
    return(
      <div className="todo-list">
        <ul>
          <TodoInput />
          <TodoItem />
        </ul>
      </div>
    )
  }
}

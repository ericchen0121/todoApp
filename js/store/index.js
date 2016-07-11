import Reflux from 'reflux'
import actions from '../actions/index'

export default Reflux.createStore({
  init(){
    this.todos = [];
    this.listenToMany(actions);
    console.log('go!')
  },
  onAddItem() {
  	console.log('Added item')
  }
})

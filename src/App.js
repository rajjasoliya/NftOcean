import React, {
  Component
} from 'react';
import './App.css';
import './index.css';
import Search from './components/search/Search'
import Home from './components/home/Home'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      search: ''
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(users => this.setState({
      category: users
    }));
  }
  render() {
    const { category, search} = this.state;
    const filteredNFTs = category.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    this.handleChange = e => (e => this.setState({ search: e.target.value}))
    return ( <div className = "App" >
      {/* <input type = "search"
      id = "search"
      placeholder = "search your NFTs"
      onChange = {
        (e) => { this.setState({ search: e.target.value }) }
      }
      /> */}
      <h1 className="heading">NFT Market</h1>
       <Search handleChange={this.handleChange()} />
       <Home category = {filteredNFTs}/> </div>
    );
  }
}
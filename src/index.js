import  React ,{Component}from 'react';
import ReactDom from 'react-dom';
import  Header from './components/header';
import './style/style.css';
import Footer from './components/Footer';
import JSON from './db.json';
import BookList from './components/BookList';


class App extends Component{
    constructor(){
        super()
        this.state = {
            books:JSON,
            footerText: 'am big foot',
            filtered: []

        }
    }
    getKeywords = (event)=>{
        let Keywords = event.target.value;
        let filtered = this.state.books.filtered((item) => {
            return item.title.indexOf(Keywords) > -1;
        })
     this.setState({
         filtered

     })
       
    };
    render(){
      const state = this.state
      console.log('state')
        return(
            <div>
            <Header getKeywords={this.getKeywords}/>
            <BookList books={this.state.filtered.length === 0 ? this.state.books:this.state.filtered}/>
            <Footer 
            footerText={this.state.footerText }/>

            </div>
        )
    }
}
     

ReactDom.render(<App/>,document.getElementById('root'))
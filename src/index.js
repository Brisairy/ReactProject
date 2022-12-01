import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import ProductList from './components/ProductList'
import DbData from './db.json'
class App extends Component
{
    constructor()
    {
        super();
        this.state={
           data : DbData ,
           filteredData : DbData
        }
    }
    filterProduct(product)
    {
     let output=this.state.data.filter((item)=>{
         return item.productName.toLowerCase().indexOf(product) >-1
     })
     this.setState({filteredData : output})
    }
    render()
    {
        console.log(this.state.data)
        return(
            <React.Fragment>
                <Header userSearchedProduct={(data)=>{this.filterProduct(data)}}></Header>
                <ProductList productList={this.state.filteredData}></ProductList>
                </React.Fragment>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))
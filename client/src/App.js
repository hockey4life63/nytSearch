import React, { Component } from 'react'
import {Container, Section} from "bloomer"
import Axios from 'axios'
import Header from "./components/Header"
import DisplayPage from './components/DisplayPage'
import './App.css'


class App extends Component {
  constructor(){
        super()
        this.state = {
            openTab:"Search",
            searchResults:[],
            savedArticles:[]
        }
        this.changeOpenTab = this.changeOpenTab.bind(this)
        this.getNYTsearchResults = this.getNYTsearchResults.bind(this)
        this.addSearchResultsToState = this.addSearchResultsToState.bind(this)
        this.getSaveArticles = this.getSaveArticles.bind(this)
    }

    componentDidMount(){
       this.getSaveArticles()
    }

    getSaveArticles(){
       Axios.get("/api/save").then(results=>{
          console.log("saved:", results)
           this.setState({
             savedArticles:results.data
           })
        })
    }

    changeOpenTab(openTab){
        this.setState({
            openTab
        })
    }

    addSearchResultsToState(searchResults){
     this.setState({
        searchResults
      })
    }

    getNYTsearchResults(){
      
    }

  render() {
    return (
      <Container isFluid>
        <Header {...this.state} changeOpenTab={this.changeOpenTab}/>
        <Section>
        <DisplayPage {...this.state} changeOpenTab={this.changeOpenTab} getSaveArticles={this.getSaveArticles} addSearchResultsToState={this.addSearchResultsToState}/>
        </Section>
      </Container>
    );
  }
}

export default App

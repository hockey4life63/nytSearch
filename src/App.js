import React, { Component } from 'react'
import {Container, Section} from "bloomer"
import Header from "./components/Header"
import DisplayPage from './components/DisplayPage'
import './App.css'


class App extends Component {
  constructor(){
        super()
        this.state = {
            openTab:"Search",
            searchResults:{},
            savedArticles:{}
        }
        this.changeOpenTab = this.changeOpenTab.bind(this)
        this.getNYTsearchResults = this.getNYTsearchResults.bind(this)
    }


    changeOpenTab(openTab){
        this.setState({
            openTab
        })
    }

    getNYTsearchResults(){
      
    }

  render() {
    return (
      <Container isFluid>
        <Header {...this.state} changeOpenTab={this.changeOpenTab}/>
        <Section>
        <DisplayPage {...this.state} />
        </Section>
      </Container>
    );
  }
}

export default App

import React, {Component} from 'react'
import {Container} from 'bloomer'
import Search from '../Search'
import Results from '../Results'
import Saved from '../Saved'


const tabs = ["Search", "Results", "Saved"]

class DisplayPage extends Component {

    render(){
        return(
            <Container>
            {tabs.filter(ele=>ele===this.props.openTab).map(ele=>{
                if(ele === "Search"){
                    return <Search {...this.props} addSearchResultsToState={this.props.addSearchResultsToState} key={"searchField"}/>
                } else if(ele === "Results"){
                    return <Results {...this.props} key={"resultsField"}/>
                }else if(ele === "Saved"){
                    return <Saved {...this.props} key={"savedField"}/>
                } else{
                    return <h1>Major Error </h1>
                }
            })}
            </Container>
            )
    }

}

export default DisplayPage
import React , { Component } from 'react';
import {Column, Field, Control, Label, Input, Select, Button } from "bloomer"
import Axios from 'axios'
import ContentBox from '../ContentBox'

let options = [];
for(let i = 1900; i<=2017;i++){
    options.push(<option key={i} value={i}>{i}</option>)
}
let revOptions =[...options].reverse()

class Search extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm:"",
            startYear: "1900",
            endYear: "2017"
        }
        this.setStartYear = this.setStartYear.bind(this)
        this.setEndYear = this.setEndYear.bind(this)
        this.setSearchTerm = this.setSearchTerm.bind(this)
        this.searchNYT = this.searchNYT.bind(this)
    }

    setStartYear(e){
        this.setState({
            startYear:e.target.value
        })
    }

    setEndYear(e){
        this.setState({
            endYear:e.target.value
        })
    }

    setSearchTerm(e){
        this.setState({
            searchTerm:e.target.value
        })
    }

    searchNYT(){
        Axios.get("/api/search",{
            'start-date': this.state.startYear,
            'end-date': this.state.endYear,
            q:this.state.searchTerm
        }).then((results)=>{
            console.log(results.data.response.docs)
            this.props.addSearchResultsToState(results.data.response.docs)
            this.props.changeOpenTab("Results")
        })
    }


    render(){
        return(
            <ContentBox openTab = {this.props.openTab}>
                <Field key={"name"}>
                    <Label>Search:</Label>
                    <Control>
                        <Input type="text" placeholder='What Do You Want To Search For?' name='searchParam'  onChange={this.setSearchTerm} value={this.state.searchTerm}/>
                    </Control>
                </Field>

                <Field key={"startYear"}>
                    <Label>Start Year:</Label>
                    <Control>
                        <Select onChange={this.setStartYear} value={this.state.startYear}>
                            {options}
                        </Select>
                    </Control>
                </Field>

                <Field key={"endYear"}>
                    <Label>End Year:</Label>
                    <Control>
                        <Select onChange={this.setEndYear} value={this.state.endYear}>
                            {revOptions}
                        </Select>
                    </Control>
                </Field>

                <Column hasTextAlign='centered'>
                    <Button isColor='success' onClick={this.searchNYT}>Search</Button>
                </Column>
            </ContentBox>
            )
    }
}

export default Search;
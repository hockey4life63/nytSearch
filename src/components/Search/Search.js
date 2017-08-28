import React , { Component } from 'react';
import {Column, Field, Control, Label, Input, Select, Button } from "bloomer"
import ContentBox from '../ContentBox'

let options = [];
for(let i = 1900; i<=2017;i++){
    options.push(<option key={i}>{i}</option>)
}
let revOptions =[...options].reverse()

class Search extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm:"",
            startYear: "",
            endYear: ""
        }
    }


    render(){
        return(
            <ContentBox openTab = {this.props.openTab}>
                <Field key={"name"}>
                    <Label>Search:</Label>
                    <Control>
                        <Input type="text" placeholder='What Do You Want To Search For?' name='searchParam' />
                    </Control>
                </Field>

                <Field key={"startYear"}>
                    <Label>Start Year:</Label>
                    <Control>
                        <Select>
                            {options}
                        </Select>
                    </Control>
                </Field>

                <Field key={"endYear"}>
                    <Label>End Year:</Label>
                    <Control>
                        <Select>
                            {revOptions}
                        </Select>
                    </Control>
                </Field>

                <Column hasTextAlign='centered'>
                    <Button isColor='success'>Search</Button>
                </Column>
            </ContentBox>
            )
    }
}

export default Search;
import React, {Component} from 'react'
import ContentBox from '../ContentBox'
import ResultItem from '../ResultItem'

let test=["Test1", "test2", "test3"]

class Results extends Component {
    constructor(){
        super()
        this.state = {
            page:0,
            perPage:10
        }
    }


    render(){
        return (
            <ContentBox openTab={this.props.openTab}>
                {/*this.props.searchResults
                    .slice(this.state.page*this.state.perPage, this.state.perPage)
                    .map(ele=><ResultItem title={ele.title} articleHref={ele.link} saveArticle = {this.props.saveArticle)
                    */}
                {test.map(ele=><ResultItem title={ele} saveArticle = {()=>alert("Saved " + ele)} key={ele}/>)}
            </ContentBox>
            )
    }
}

export default Results


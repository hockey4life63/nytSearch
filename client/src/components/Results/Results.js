import React, {Component} from 'react'
import Axios from 'axios'
import ContentBox from '../ContentBox'
import ResultItem from '../ResultItem'


class Results extends Component {
    constructor(){
        super()
        this.state = {
            page:0,
            perPage:10
        }
    }

    saveArticle(article){
       return ()=>{
            Axios({
              url:"/api/save", 
              method:"post",
              data: {
              title:article.headline.main,
              web_url:article.web_url,
              pub_date:article.pub_date
            }
          }).then(results =>{
                this.props.getSaveArticles()
            })
       } 
    }

    render(){
        return (
            <ContentBox openTab={this.props.openTab}>
                {
                    this.props.searchResults
                    .map((ele, index)=><ResultItem key={"result"+index} title={ele.headline.main} articleHref={ele.web_url} saveArticle = {this.saveArticle(ele)} />)
                    }
            </ContentBox>
            )
    }
}

export default Results


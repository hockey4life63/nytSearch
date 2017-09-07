import React, { Component } from 'react'
import Axios from 'axios'
import ContentBox from '../ContentBox'
import SavedItem from '../SavedItem'



class Saved extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.getSaveArticles()
  }

  deleteItem(_id){
   return ()=>{
     Axios({
      method:'delete',
      url:'/api/save',
      data:{
        _id
      }
    }).then(res=>{
      this.props.getSaveArticles()
    })
   }
  }

  render(){
    return (<ContentBox openTab={this.props.openTab}>
            {this.props.savedArticles.map(ele=><SavedItem delete={this.deleteItem(ele._id)} title={ele.title} notes={"Testing notes goes here"} key={ele.title} />)}
        </ContentBox>)
  }
} 
  


export default Saved
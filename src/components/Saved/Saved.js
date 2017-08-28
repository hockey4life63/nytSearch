import React from 'react'
import ContentBox from '../ContentBox'
import SavedItem from '../SavedItem'

let test=["Test1", "test2", "test3"]

const Saved = props =>
    <ContentBox openTab={props.openTab}>
        {test.map(ele=><SavedItem title={ele} notes={"Testing notes goes here"} key={ele}/>)}
    </ContentBox>


export default Saved
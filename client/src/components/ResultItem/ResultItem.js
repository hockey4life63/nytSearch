import React from 'react'
import {Message, MessageHeader, Button, Column} from 'bloomer'

const ResultItem = props =>
            <Message isColor={"success"} key={props.title}>
                    <MessageHeader>
                        <a target='_blank' href ={props.articleHref}>{props.title}</a>
                        <Column hasTextAlign='centered' isSize={3}>
                            <Button isColor='success' isInverted isOutlined onClick={props.saveArticle}>Save Article</Button>
                        </Column>
                    </MessageHeader>
                </Message>
            
    


export default ResultItem
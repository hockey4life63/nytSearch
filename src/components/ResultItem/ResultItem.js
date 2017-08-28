import React from 'react'
import {Message, MessageHeader, Button, Column} from 'bloomer'

const ResultItem = props =>
            <Message isColor={"success"} key={props.title}>
                    <MessageHeader>
                        <p>{props.title}</p>
                        <Column hasTextAlign='centered' isSize={3}>
                            <Button isColor='success' isInverted isOutlined href={props.articleHref} onClick={props.saveArticle}>Save Article</Button>
                        </Column>
                    </MessageHeader>
                </Message>
            
    


export default ResultItem
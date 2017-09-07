import React from 'react'
import {Message, MessageHeader, MessageBody, Delete} from 'bloomer'

const SavedItem = props=>
        <Message isColor={"success"} key={props.title}>
            <MessageHeader>
                <p>{props.title}</p>
                <Delete onClick={props.delete}/>
            </MessageHeader>
            <MessageBody>
                {props.notes}
            </MessageBody>
        </Message>

export default SavedItem
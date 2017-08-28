import React from 'react'
import {Message, MessageHeader, MessageBody, Delete} from 'bloomer'

const SavedItem = props=>
        <Message isColor={"success"} key={props.title}>
            <MessageHeader>
                <p>{props.title}</p>
                <Delete onClick={()=>alert("deleted")}/>
            </MessageHeader>
            <MessageBody>
                {props.notes}
            </MessageBody>
        </Message>

export default SavedItem
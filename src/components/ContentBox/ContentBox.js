 import React from 'react'
 import { Column, Columns, Box, Title } from 'bloomer'

 const ContentBox = props=> 
    <Columns isCentered>
        <Column isSize={6} hasTextAlign='centered'>
            <Box>
            <Title>{props.openTab}</Title>
                
            {props.children}
                
            </Box>
        </Column>
    </Columns>

export default ContentBox 

import React from 'react';
import {Container, TabList, TabLink, Tab} from "bloomer";

const tabs = ["Search", "Results", "Saved"]

const NavTabList = props =>
            <Container>
                <TabList>
                    {tabs.map(ele=>{
                        if(ele===props.openTab){
                            return <Tab key={ele} isActive><TabLink>{ele}</TabLink></Tab>
                        } else{
                            return <Tab key={ele}><TabLink  onClick={()=>props.changeOpenTab(ele)}>{ele}</TabLink></Tab>
                        }
                    })}
                </TabList>
            </Container>
            
    



export default NavTabList;
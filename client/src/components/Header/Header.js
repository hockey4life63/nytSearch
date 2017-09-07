import React, { Component } from 'react';
import {Container, Hero, HeroBody, Title, Tabs,  HeroFooter} from "bloomer";
import NavTabList from "../NavTabList"


class Header extends Component {

    render(){
        return(
            <Hero isColor='info' isSize='medium'>

                <HeroBody>
                    <Container hasTextAlign='centered'>
                        <Title>NYT Article Searcher</Title>
                    </Container>
                </HeroBody>

                <HeroFooter>
                    <Tabs isBoxed isFullWidth>
                        <NavTabList {...this.props}/>
                    </Tabs>
                </HeroFooter>
            </Hero>)
    }
}

export default Header;
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import  PropTypes  from 'prop-types';

export default class Card extends Component {

    static propTypes = {
        body: PropTypes.string,
        footer: PropTypes.string,
        header: PropTypes.string.isRequired,
        onLongPress: PropTypes.func,
        onPress: PropTypes.func,
        styles: PropTypes.object
    }

  render() {
    
    const {body, footer, header, onLongPress, onPress, styles} = this.props;

    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>{header}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {body}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>{footer}</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
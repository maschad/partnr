import { Component } from 'react';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Right
  } from "native-base";

export default class LoginScreen extends Component {
    render() {
        return (
          <Container>
            <Header>
              <Body>
                <Title>Login</Title>
              </Body>
              <Right />
            </Header>
            <Content padder>
              <Card>
                <CardItem>
                  <Body>
                    <Text>Welcome to Partnr</Text>
                  </Body>
                </CardItem>
              </Card>
              <Button
                full
                rounded
                dark
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("mnemonics")}
              >
                <Text>Generate a wallet</Text>
              </Button>
            </Content>
          </Container>
        );
      }
}
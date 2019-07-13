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
    Left,
    Icon,
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
                    <Text></Text>
                  </Body>
                </CardItem>
              </Card>
              <Button
                full
                rounded
                dark
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("Chat")}
              >
                <Text>Chat With People</Text>
              </Button>
              <Button
                full
                rounded
                primary
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("ProfileScreen")}
              >
                <Text>Goto Profiles</Text>
              </Button>
            </Content>
          </Container>
        );
      }
}
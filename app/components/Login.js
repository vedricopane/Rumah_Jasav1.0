import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from "native-base";

const Login = () => {
  return (
    <Container style={{ paddingTop: 100 }}>
      <Header>
        <Body>
          <Title>Best App Ever!</Title>
        </Body>
      </Header>
      <Form>
        <FormItem floatingLabel>
          <Label>Email</Label>
          <Input />
        </FormItem>
        <FormItem floatingLabel last>
          <Label>Password</Label>
          <Input secureTextEntry={true} />
        </FormItem>

        <Button full primary style={{ paddingBottom: 4 }}>
          <Text> Login </Text>
        </Button>
        <Button full light primary>
          <Text> Sign Up </Text>
        </Button>
      </Form>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#76a6ef'
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 6,
    color: "black",
    marginTop: 25,
  },
  saldo: {
    width: 250,
    height: 55,
    backgroundColor: "white",
    position: "relative",
    marginTop: 250,
    borderRadius: 69,
    elevation: 1,
  },
  cardJasa: {
    width: 106,
    height: 111,
    marginTop: 20,
    margin: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
  },
  wrapperCardJasa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Login;

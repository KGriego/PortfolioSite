import React, { Component } from "react";
// import axios from "axios";
import { Button, Form, Message, TextArea, Grid, Header } from "semantic-ui-react";

class ContactForm extends Component {
  state = {
    WindowSize: 0,
    name: "",
    errorForName: false,
    email: "",
    errorForEmail: false,
    phoneNumber: "",
    message: "",
    errorForMessage: false,
    sent: false,
    error: false
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleResize = () => {
    this.setState({ WindowSize: window.innerWidth });
  };
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };
  sendEmail = e => {
    e.preventDefault();
    //don't forget to add phonenumber back in here
    const { name, email, message } = this.state;
    if (name === "") {
      this.setState({
        errorForName: true,
        error: true
      });
      return false;
    } else if (email === "") {
      this.setState({
        errorForEmail: true,
        error: true
      });
      return false;
    } else if (message === "") {
      this.setState({
        errorForMessage: true,
        error: true
      });
      return false;
    } else {
      return false;
      // axios
      //   .post("/contact/sendEmail", {
      //     name,
      //     email,
      //     message,
      //     topic,
      //     phoneNumber
      //   })
      //   .then(res => {
      //     if (res.status === 202) {
      //       this.setState({
      //         errorForName: false,
      //         errorForEmail: false,
      //         errorForMessage: false,
      //         error: false,
      //         sent: true,
      //         name: "",
      //         email: "",
      //         message: "",
      //         phoneNumber: "",
      //         topic: ""
      //       });
      //     }
      //   })
      //   .catch(err => {
      //     this.setState({ error: true });
      //     console.log("err sending mail", err);
      //   });
    }
  };
  render() {
    const { WindowSize } = this.state;
    let menuClass;
    if (WindowSize <= 780) {
      menuClass = false;
    } else {
      menuClass = true;
    }
    const {
      name,
      errorForName,
      email,
      errorForEmail,
      phoneNumber,
      message,
      errorForMessage,
      sent,
      error
    } = this.state;
    return (
      <div className={menuClass ? "sizing" : ""}>
        <Grid centered>
          <Header style={{ margin: 20 }}>My email is: kev.gri98@gmail.com</Header>
          <Form
            success={sent}
            size="big"
            onSubmit={this.sendEmail}
            style={{ width: "80%" }}
            error={error}>
            <Grid.Row computer="14">
              <Form.Group widths="equal">
                <Form.Input
                  label="Name*"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  value={name}
                  fluid
                  onChange={this.handleChange}
                  error={errorForName}
                />
                <Form.Input
                  label="Email*"
                  type="email"
                  placeholder="JohnDoe@example.com"
                  name="email"
                  value={email}
                  fluid
                  onChange={this.handleChange}
                  error={errorForEmail}
                />
              </Form.Group>
              <Form.Input
                country="US"
                label="Phone Number"
                placeholder="(999)-999-9999"
                // control={PhoneInput}
                value={phoneNumber}
                name="phoneNumber"
                onChange={this.handleChange}
              />
              <Form.Field
                control={TextArea}
                label="More Info*"
                name="message"
                value={message}
                placeholder="Tell us more about you..."
                onChange={this.handleChange}
                error={errorForMessage}
              />
              <Message
                error
                header="Please Check The Form"
                content="Please make sure the required fields are filled"
              />
              <Message
                success
                header="Email Sent"
                content="I will get back to you as soon as possible"
              />
              <Button style={{ margin: 20 }} type="submit">
                Submit
              </Button>
            </Grid.Row>
          </Form>
        </Grid>
      </div>
    );
  }
}
export default ContactForm;

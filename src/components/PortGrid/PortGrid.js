import React, { Component } from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import Lightbox from "react-images";
import "./PortGrid.css";
import CoookieCollector from "../Images/cookieCollector";
import TriviaGame from "../Images/physicImage";
import NewYorkTimesSearch from "../Images/newYorkTimesSearch";
import AdminACPR from "../Images/adminAcpr";
import TimeCard from "../Images/TimeCard";
import GiphyRequester from "../Images/GiphyRequester.js";

let Images = [];
class PortGrid extends Component {
  state = {
    WindowSize: 0
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
  openLightbox = e => {
    //could grab which section it is to go to that
    //picture instead of clearing the array everytime
    Images = [];
    e.preventDefault();
    Images.push({ src: e.target.src });
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage + 1
    });
  };
  render() {
    const { WindowSize } = this.state;
    let menuClass;
    if (WindowSize <= 780) {
      menuClass = false;
    } else {
      menuClass = true;
    }
    return (
      <div className={menuClass ? "sizing" : ""}>
        <Header dividing textAlign="center" style={{ margin: 0, paddingTop: 25 }}>
          My Portfolio/Projects | @Midlu
        </Header>
        <Grid centered style={{ marginTop: 20, margin: 0 }} divided="vertically">
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <TriviaGame />
            </Grid.Column>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Psychic Game</Item.Header>
                <Item.Description>
                  The Psychic Game picks a letter from the alphabet, at random, for the user to
                  guess. The user inputs guesses one letter at a time via key press. The game is
                  similar to Hangman. The game accepts user input in the form of key press of any
                  alphabet character (a-z). Special characters and numbers are acceptable, but not
                  included. So be careful. It will display how many guesses are remaining and which
                  letters have already been guessed. One of the very first mini projects I ever did
                  while attending UofA Coding Bootcamp.
                </Item.Description>
                <br />
                <Item.Extra as="a" href="https://midlu.github.io/The-Psychic-Game/" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/The-Psychic-Game" target="_blank">
                  Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Cookie Collector</Item.Header>
                <Item.Description>
                  You will be given a random number at the start of the game. There are four cookies
                  below. By clicking on a cookie, you will add a specific amount of points to your
                  total score. You win the game by matching your total score to the random number,
                  you lose the game if your total score goes above the random number. The value of
                  each cookie is hidden form you until you click on it. Each time the game starts,
                  the game will change the values of each cookie.
                </Item.Description>
                <br />
                <Item.Extra as="a" href="https://midlu.github.io/Unit-4-Game/" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/Unit-4-Game" target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <CoookieCollector />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <NewYorkTimesSearch />
            </Grid.Column>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">New York Times Search</Item.Header>
                <Item.Description>
                  Here we can search for New York Times articles about a specific topic in a time
                  range specified by the user. Some future improvements would be to notify the guest
                  about updates over a specific topic that they would like.
                </Item.Description>
                <br />
                <Item.Extra
                  as="a"
                  href="https://midlu.github.io/NewYorkTimes_Search/"
                  target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/Midlu/NewYorkTimes_Search"
                  target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Giphy Requester</Item.Header>
                <Item.Description>
                  In this app we use the Giphy API to make requests. There are 5 predetermined
                  choices that you can choose from. You can add as many as you like that you can
                  then click on to search for that topic of gifs. In this project I learned that
                  dynamically adding elements to the page don't work as intended.
                </Item.Description>
                <br />
                <Item.Extra as="a" href="https://midlu.github.io/GiphyRequester/" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/GiphyRequester" target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <GiphyRequester />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <TimeCard />
            </Grid.Column>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Time Card</Item.Header>
                <Item.Description>
                  Here, we learned how to use the basic functionality of FireBase. We can add
                  Employees and keep track of their pay rate, the start date, their name, and their
                  role. Currently FireBase is not connected. Future improvements would be to add
                  when the next pay check for each employee is. To check off if they've been paid.
                  To update their roles.
                </Item.Description>
                <br />
                <Item.Extra as="a" href="https://midlu.github.io/TimeCard" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/TimeCard" target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Admin Apex Cell Phone Repair</Item.Header>
                <Item.Description>
                  An Adminastration Page to manage the phones you have to repair and/or repaired.
                  Here we can check in guests who need their devices repaired. We can see the date
                  they were added, the owner name of the device, their number, the name of the
                  device, the issue, and the status of the repair. We can update the status of the
                  device. Future improvements would be to notify the guest everytime the status of
                  their device is updated. This was made in React.
                </Item.Description>
                <br />
                <Item.Extra
                  as="a"
                  href="https://laughing-spence-6eaa46.netlify.com/"
                  target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/AdminACPRReact" target="_blank">
                  Backend Repo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/Midlu/AdminACPRReactFrontend"
                  target="_blank">
                  Frontend Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <AdminACPR />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <AdminACPR />
            </Grid.Column>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Chirpy</Item.Header>
                <Item.Description>
                  Working as a team at a internship held by IntraEdge, we made a twitter like
                  website called Chirpy. It was interesting working on as the frontend team. We
                  accomplished quite a bit, users can log in, make chirps, like, hate, and favorite
                  them. We ran into setbacks like changing frameworks, refactoring some of the
                  codebase, deciding how we wanted to structure the data. We also were testing as we
                  went along. It is interesting to see how things are deeply connected when you try
                  to isolate and test them.
                </Item.Description>
                <br />
                <Item.Extra
                  as="a"
                  href="http://kllll.s3-website-us-west-1.amazonaws.com"
                  target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/bytesizedxyz/nov-project-chirp-frontend"
                  target="_blank">
                  Frontend Repo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/bytesizedxyz/nov-project-chirp-backend"
                  target="_blank">
                  Backend Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Learntube</Item.Header>
                <Item.Description>
                  Working as a team at a internship held by IntraEdge, we made a youtube like
                  website called Learntube. Now having experienced working on a team, we switched
                  roles, with the frontend as the backend and the backend as the frontend. It wasn't
                  as difficult testing the backend once we started seperating everything out into
                  their own functions. It was very straightforward work. The only difficulties we
                  had we with the frontend needing help to finish because of difficulty
                  understanding the technologies being implemented. Towards the end managed to get a
                  MVP by the deadline of the project.
                </Item.Description>
                <br />
                <Item.Extra as="a" href="https://angry-euclid-4e89b9.netlify.com/" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/bytesizedxyz/dec-project-learntube"
                  target="_blank">
                  Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <AdminACPR />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <AdminACPR />
            </Grid.Column>
            <Grid.Column computer="10">
              <Item.Content>
                <Item.Header as="h2">User Roulette</Item.Header>
                <Item.Description>
                  In this project with the team. We made a mini-project within the span of two days
                  to get some MVP out that the entire group would end up working on. There was no
                  designated Frontend/Backend team. This was to make up for time lost learning on
                  the frontend part during the Learntube project. We have a feautured user on the
                  home page that changes every hour. There is a random user that you can look at by
                  clicking on the random user button.
                </Item.Description>
                <br />
                <Item.Extra
                  as="a"
                  href="https://inspiring-pare-aca877.netlify.com/"
                  target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/bytesizedxyz/userroulette-frontend"
                  target="_blank">
                  Frontend Repo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/bytesizedxyz/userroulette-backend"
                  target="_blank">
                  Backend Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="14">
              <Item.Content>
                <Item.Header as="h2">My Portfolio</Item.Header>
                <Item.Description>
                  Here I've made my portfolio site in React with Gatsby and also GraphQL. I've just
                  started using Gatsby and GraphQL. I would like to expanded upon this site and see
                  how far it can go.
                </Item.Description>
                <br />
                <Item.Extra>You're at the Demo!</Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/PortfolioSite" target="_blank">
                  Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row />
        </Grid>
        <Lightbox
          backdropClosesModal={true}
          images={Images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default PortGrid;

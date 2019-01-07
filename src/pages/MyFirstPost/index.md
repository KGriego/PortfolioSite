---
title: "Making an idle game using React and Redux"
description: This is a test post
date: "2019-01-01"
image: time.jpg
---

#First thoughts

After a little thinking and searching, I think it would be best to use
Redux to make an Idle Game since it will manage the state that will
constantly update.

#Technologies used

- Gatsby - For better SEO and static rendering.
- React
- Redux - For state management.

#Learning

> To connect Redux with Gatsby, we will connect our React app with the store that we will eventually create.
> We will make a createStore function that will make the store for our React App. After that we define it
> as the variable store and pass it into the Provider that will wrap our entire app. This file connects the store
> to the React App which then we call in later files to fully connect it.

```javascript
// ./wrap-with-provider.js
import React from "react";
import { Provider } from "react-redux";
import store from "./src/Redux/store/store";

export default ({ element }) => <Provider store={store}>{element}</Provider>;
```

> In the intial gatsby-ssr.js and gatsby-browser.js file, we will import wrapWithProvider from which
> the entire React app will then be connected to Redux. We use an if statement because when Gatsby builds,
> window is not defined. Wrapping it in a if statement lets it build so that then we can use the store function
> and the addLilyPads action to play with them in the development console.

```javascript
// ./gatsby-ssr.js & ./gatsby-browser.js
import wrapWithProvider from "./wrap-with-provider";
import store from "./src/Redux/store/store";
import { addLilyPads } from "./src/Redux/actions/lilypads";

export const wrapRootElement = wrapWithProvider;

if (typeof window === "object") {
  window.store = store;
  window.addLilyPads = addLilyPads;
}
```

> The store in Redux manages the entire state throughout your react application.
> That way, your component in React can use only the state it needs without having
> to pass the state through multiple layers of props, or without it needing a
> parent/child relationship with other components.

> First, you must have a store that holds your state. We can pass an intial state
> to the createStore when making the store, which is useful for server side rendering. But currently
> we are not worried about that. Here, we pass a rootReducer to make the intial state for our app.

```javascript
// ./src/Redux/store/store.js;
import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
```

> Next, is making a reducer to tell the store to make an intial state to keep in the
> store. A reducer takes in two parameters, the current state and a action. Which returns an
> updated state. Here, we pass our intial state of swamp which will hold all our values for
> our idle app.We then console log the state we recieved and the action just to double check
> that we are recieving the correct values that we want.

```javascript
// ./src/Redux/reducers/initial_state.js
import { ADD_LILYPADS } from "../constants/action_types";

const intialState = { swamp: { lilypads: 0 } };

export default function rootReducer(state = intialState, action) {
  console.log("action: ", action);
  console.log("prev state: ", state);
  switch (action.type) {
    case ADD_LILYPADS:
      return Object.assign({}, state, {
        swamp: { lilypads: state.swamp.lilypads + 1 }
      });
    default:
      return state;
  }
}
```

> We also need an action to let the reducer know what step to take next when making a new state.

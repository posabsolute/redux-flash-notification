# Redux Flash Notification Component for Redux
An es6 growl-like notification plugin for react and redux.

Demo: [Live Example](http://posabsolute.github.io/redux-flash-notification-example/) | [Source](https://github.com/posabsolute/redux-flash-notification-example)

Better Documentation: [http://posabsolute.github.io/redux-flash-notification](http://posabsolute.github.io/redux-flash-notification)

## Integration

**1** Install it
```
npm install react-redux-flash-notification --save
```

**2** Add thunk middleware
```
npm install redux-thunk --save
```

```javascript
 import thunk from 'redux-thunk'

 const store = createStore(rootReducer, applyMiddleware(thunk));
```

**3** Add the reducer to your root reducer

```javascript

import { GrowlerReducer as growler } from 'react-redux-flash-notification';

const rootReducer = combineReducers({
  growler,
});

export default rootReducer;
```

**4** Add the growler component to your app root component so it is always accessible

```javascript
import { GrowlerContainer } from 'react-redux-flash-notification';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <GrowlerContainer />
        {this.props.children}
      </section>
    );
  }
}
```

**5** You're done.

## Usage

### With the reducer

You can change the store state to show the growler.

Example:

```javascript
dispatch({
  type: 'GROWLER__SHOW',
  growler: {
    text: 'Please enter your JIRA url',
    type: 'growler--error',
  },
});
```

```javascript
dispatch({
  type: 'GROWLER__SHOW',
  growler: {
    text: 'You have succesfully logged in',
    type: 'growler--success',
  },
});
```

### With the actions

If made available in your components, you can use multiple actions to show the growler component,

Example:
```javascript
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {GrowlerActions} from 'actions/sprints.action';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(growlerActions, dispatch),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SprintsListContainer extends React.Component {
  render() {
    return <SprintsListComponent {...this.props} />;
  }
}
```
### Available Actions

### showGrowlerSuccess(text)

### showGrowlerError(text)

### showGrowler(text, type)

Used when you want to show custom messages. The type will be added as a CSS class.


## Options

Options are passed down when you add the component to your app root.

| Option | Default Value          | Default Value          | Description          |
| ------------- | ----------- | ----------- | ----------- |
| shownFor      | 3000| Milliseconds | Time the growler is shown |
| messages     | -     | Object | Localization in every supported languages of your messages |
| currentLocale     | enUS     | String |  Locale used to retrieve messages |

```javascript
import { GrowlerContainer } from 'flash-notification-react-redux';
import growlerMessages from 'locales/growler.locale.js';

export class App extends Component {
  render() {
    return (
      <section>
        <GrowlerContainer messages={growlerMessages} currentLocale='enUS' shownFor="9000" />
        {this.props.children}
      </section>
    );
  }
}
```

### Messages

By default the growler will show the text passed down by the action, however when mounting the component you can specify localized text. When shown, the component will verify if the text passed match a key.

```javascript
import { GrowlerContainer } from 'flash-notification-react-redux';
import growlerMessages from 'locales/growler.locale.js';

// usage in render
<GrowlerContainer messages={growlerMessages} currentLocale='enUS' />
```
#### currentLocale (default: enUS)
You can specify the language used by using the currentLocale option.


#### Messages object Example
```javascript
{
  enUS: {
    error: 'There was en error'
  },
  frCA: 
     error: 'Il y a eu une erreur'
}
```

### shownFor (default: 3000)
Time the growler is shown in milliseconds

```javascript
<GrowlerContainer shownFor="6000" />
```

## Limitations

No limitations! :tada:

## About this version
This repository is a fork of [redux-flash-notification](https://github.com/posabsolute/redux-flash-notification). The difference is that, instead of configuring webpack + babel to use the module (and add unwanted plugins, like transform-decorators-legacy) you just import it and use it at will.

Thank you very much [Cedric Dugas](https://github.com/posabsolute) for the amazing job in the original repository.

# Redux Flash Notification Component for Redux
An es6 growl-like notification plugin for react and redux.

Demo: [Live Example](http://posabsolute.github.io/redux-flash-notification-example/) | [Source](https://github.com/posabsolute/redux-flash-notification-example)

Better Documentation: [http://posabsolute.github.io/redux-flash-notification](http://posabsolute.github.io/redux-flash-notification)

## Integration


1 npm install 'flash-notification-react-redux' --save

2 Add redux-thunk middleware
```
npm install 'redux-thunk' --save
```

```javascript
 import redux-thunk from 'redux-thunk'

 const createStoreWithMiddleware = applyMiddleware(redux-thunk)(createStore);
 const store = createStoreWithMiddleware()
```

3 Add the reducer to your root reducer

```javascript

import { GrowlerReducer } from 'flash-notification-react-redux';

const rootReducer = combineReducers({
  growler: GrowlerReducer,
});

export default rootReducer;
```

4 Add the growler component to your app root component so it is always accessible
```javascript
import { GrowlerComponent } from 'flash-notification-react-redux';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <GrowlerComponent />
        {this.props.children}
      </section>
    );
  }
}
```

5 Add webpack loaders to load es6 files.
```javascript
  module: {
    loaders: [{
      test:[/\.jsx$/,  /\.js$/],
      loaders: ['react-hot', 'babel?stage=0&loose[]=es6.modules'],
      include: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "node_modules/flash-notification-react-redux")
      ],
    }, {
      test: [/\.scss$/, /\.css$/],
      loader: 'css?localIdentName=[path]!postcss-loader!sass',
    }],
  },
};
```

6 You're done.


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
import { GrowlerComponent } from 'flash-notification-react-redux';
import growlerMessages from 'locales/growler.locale.js';

export class App extends Component {
  render() {
    return (
      <section>
        <GrowlerComponent messages={growlerMessages} currentLocale='enUS' shownFor="9000" />
        {this.props.children}
      </section>
    );
  }
}
```

### Messages

By default the growler will show the text passed down by the action, however when mounting the component you can specify localized text. When shown, the component will verify if the text passed match a key.

```javascript
import { GrowlerComponent } from 'flash-notification-react-redux';
import growlerMessages from 'locales/growler.locale.js';

// usage in render
<GrowlerComponent messages={growlerMessages} currentLocale='enUS' />
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
<GrowlerComponent shownFor="6000" />
```

## Limitations

This component is based on the use of redux, react, es6 & es7 (decorators) and webpack for loading the css as an import module.

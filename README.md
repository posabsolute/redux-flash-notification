# flash-notification-react-redux
An es6 growl like notification plugin for react and redux.

## Integration

1. Add the reducer to your root reducer

```javascript

import GrowlerReducer from 'flash-notification-react-redux';

const rootReducer = combineReducers({
  growler: GrowlerReducer,
});

export default rootReducer;
```

2. Add the growler component to your app root component so it is always accessible
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

3. Add webpack loaders to load es6 files.
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

4. You're done.


## Usage

### With the reducer

You can change the state of the growler store to show the growler.

Example:

```javascript
dispatch({
  type: 'GROWLER__SHOW',
  content: {
    text: 'Please enter your JIRA url',
    type: 'growler--error',
  },
});
```

```javascript
dispatch({
  type: 'GROWLER__SHOW',
  content: {
    text: 'You have succesfully logged in',
    type: 'growler--success',
  },
});
```

### With the actions



If made available in your components, you can call the action showGrowler(text, status),

Example:
```javascript
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {growlerActions} from 'actions/sprints.action';

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
<GrowlerComponent shownFor="6000" messages={growlerMessages} currentLocale='enUS' />
```

## Limitations

This component is based on the use of redux, react, es6 & es7 (decorators) and webpack for loading the css as an import module.








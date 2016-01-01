import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Growler from './growler.jsx';
import * as growlerActionCreators from '../actions/growler.action';

const mapStateToProps = state => ({
  growler: state.growler,
});
const mapDispatchToProps = dispatch => bindActionCreators(growlerActionCreators, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class growlerContainer extends React.Component {

  getMessage() {
    const lang = this.props.currentLocale || "enUS";
    let message = this.props.growler.text;
    if(this.props.messages && this.props.messages[lang]){
      return this.props.messages[lang][message] || message;
    }
    return message;
  }

  render() {
    const message = this.getMessage();
    this.props.hideTimeOutGrowler(this.props.growler, this.props.showFor);
    return <Growler {...this.props} message={message} />;
  }
}

export default growlerContainer;

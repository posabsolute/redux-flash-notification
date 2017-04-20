import {GROWLER__HIDE, GROWLER__HIDDEN, GROWLER__SHOW} from './types/growler.types';
let hideTimeOut;
let hiddenTimeOut;
/*
 * action creators
 */
export function hideGrowler() {
  return dispatch => {
    dispatch({ type: GROWLER__HIDE });
    clearTimeout(hiddenTimeOut);
    clearTimeout(hideTimeOut);
    hiddenTimeOut = window.setTimeout(() =>{
      dispatch({
        type: GROWLER__HIDDEN,
      });
    }, 500);
  };
}

export function hideTimeOutGrowler(growler, time) {
  const timeoutTime = time || 3000;
  return dispatch => {
    if (growler && growler.status === 'show') {
      clearTimeout(hideTimeOut);
      hideTimeOut = window.setTimeout(() =>{
        dispatch({
          type: GROWLER__HIDE,
        });
      }, timeoutTime);
    }
  };
}

export function showGrowler(text, type) {
  return {
    type: GROWLER__SHOW,
    growler:{
      text,
      type
    }
  };
}


export function showGrowlerSuccess(text) {
  return {
    type: GROWLER__SHOW,
    growler:{
      text,
      type:'growler--success',
    }
  };
}

export function showGrowlerError(text) {
  return {
    type: GROWLER__SHOW,
    growler:{
      text,
      type:'growler--error',
    }
  };
}
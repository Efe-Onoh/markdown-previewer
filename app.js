"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// !! IMPORTANT README:
// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/
// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!
// Once you have read the above messages, you can delete all comments. 
//Jquery up and running
$(document).ready(function () {}); //marked set up

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function highlight(code, lang) {
    var language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlightAll();
  },
  breaks: true,
  gfm: true
}); //Redux up and running
//default state

var defaultState = "# H1 Heading \n## H2 Heading\n### H3 Heading\ncode: `<div></div>`\n\nmulti-line code\n```\n// comment\n\nfunction sample(x, y) {\n  if (x == a && y == b {\n    return sample;\n  }\n}\n```\n\n **bold text**\n _italic text_\n **_bold italic text_**\n ~~crossed out text~~\n \n [A link](https://www.freecodecamp.org)\n \n > Block Quote\n \n A table \n \n Header one | Header two | Header three\n------------ | ------------- | -------------\ncolumn 1 row 1 | column 2 row 1 | column 3 row 1\ncolumn 1 row 2 | column 2 row 2 | column 3 row 2\n\n- Lists.\n  - bulleted.\n     - Indented.\n        - Lists.\n        \n\n1. Numbered lists.\n1. List item.\n1. List item.  \n\nEmbedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
var UPDATE = "UPDATE"; //action type
//action creator

var _update = function update(text) {
  return {
    type: UPDATE,
    text: text //new text

  };
}; //store reducer


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE:
      return action.text;
      break;

    default:
      return state;
  }
}; //creating store


var store = Redux.createStore(reducer); //React up and running

var HeaderComponent = function HeaderComponent(props) {
  return /*#__PURE__*/React.createElement("header", {
    id: "header",
    "class": "row g-0 justify-content-center"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "title",
    "class": "col-4 p-3 text-center "
  }, "Markdown Previewer"));
}; //editor child component 


var EditorComponent = function EditorComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    "class": "col"
  }, /*#__PURE__*/React.createElement("h2", {
    "class": ""
  }, "Editor"), /*#__PURE__*/React.createElement("textarea", {
    id: "editor",
    "class": "w-100 h-50",
    onChange: props.update
  }, props.content));
}; //content is passed as props to PreviewComponent from the app which gets it from the redux state after connection is made


var PreviewComponent = function PreviewComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h2", {
    className: ""
  }, "Preview"), /*#__PURE__*/React.createElement("div", {
    id: "preview",
    className: "p-3",
    dangerouslySetInnerHTML: {
      __html: marked(props.content)
    }
  }));
};

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.updateEditor = _this.updateEditor.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "updateEditor",
    value: function updateEditor(event) {
      this.props.update(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "app",
        className: "row m-3"
      }, /*#__PURE__*/React.createElement(HeaderComponent, null), /*#__PURE__*/React.createElement(EditorComponent, {
        content: this.props.value,
        update: this.updateEditor
      }), /*#__PURE__*/React.createElement(PreviewComponent, {
        content: this.props.value
      }));
    }
  }]);

  return App;
}(React.Component); //react-redux


var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state //value is a prop of app in react now, while state is a string state from redux

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    update: function update(newtext) {
      dispatch(_update(newtext)); //update is a prop of app in react, dispatch is from redux, newtext is the 
    }
  };
};

var Provider = ReactRedux.Provider; //connects react to store

var connect = ReactRedux.connect; //connects state and dispatch of store to react app props

var ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App); //app now has props that include value-connecting redux state, and update-connecting redux action creator, update, which are all just js.

var AppWrapper = /*#__PURE__*/function (_React$Component2) {
  _inherits(AppWrapper, _React$Component2);

  var _super2 = _createSuper(AppWrapper);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _super2.apply(this, arguments);
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, /*#__PURE__*/React.createElement(ConnectedComponent, null));
    }
  }]);

  return AppWrapper;
}(React.Component);

;
ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.querySelector('#root'));



// !!! IMPORTANT README:

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
$(document).ready(()=>{
  
})

//marked set up

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlightAll();
  },
  breaks: true,
  gfm: true
});

//Redux up and running

//default state

let defaultState = `# H1 Heading 
## H2 Heading
### H3 Heading
code: \`<div></div>\`

multi-line code
\`\`\`
// comment

function sample(x, y) {
  if (x == a && y == b {
    return sample;
  }
}
\`\`\`

 **bold text**
 _italic text_
 **_bold italic text_**
 ~~crossed out text~~
 
 [A link](https://www.freecodecamp.org)
 
 > Block Quote
 
 A table 
 
 Header one | Header two | Header three
------------ | ------------- | -------------
column 1 row 1 | column 2 row 1 | column 3 row 1
column 1 row 2 | column 2 row 2 | column 3 row 2

- Lists.
  - bulleted.
     - Indented.
        - Lists.
        

1. Numbered lists.
1. List item.
1. List item.  

Embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


const UPDATE = "UPDATE"; //action type


//action creator
const update = (text)=>{
  return {
    type: UPDATE,
    text //new text
  }
}; 

//store reducer
const reducer = (state = defaultState, action) => {
  switch(action.type){
    case UPDATE:
      return action.text;
      break;
      
    default:
      return state
  }
  
};

//creating store
const store = Redux.createStore(reducer);

//React up and running

const HeaderComponent = (props) =>{
  return (
    <header id="header" class="row g-0 justify-content-center">
      <h1 id="title" class="col-4 p-3 text-center ">Markdown Previewer</h1>
    </header>
  )
};
//editor child component 

const EditorComponent = (props) =>{
  return (
    <div  class="col">
      <h2 class="">Editor</h2>
      <textarea id="editor" class="w-100 h-50"  onChange={props.update}>{props.content}</textarea>
      {//updateEditor fxn is passed as a prop called update to child EditorComponent via parent App.
      }
    </div>
  )
};

//content is passed as props to PreviewComponent from the app which gets it from the redux state after connection is made
const PreviewComponent = (props)=>{
  return (
    <div className="col">
      <h2 className="">Preview</h2>
      <div  id="preview" className="p-3" dangerouslySetInnerHTML={{__html: marked(props.content)}}></div>
    </div>
  )
};

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.updateEditor = this.updateEditor.bind(this);
  }
  
  updateEditor(event){

    this.props.update(event.target.value);
    
  }
  render(){
    return(
      <div id="app" className="row m-3">
        <HeaderComponent/>
        <EditorComponent content={this.props.value} update={this.updateEditor}/>
        <PreviewComponent content={this.props.value}/>
      </div>
    ) 
  }
}

//react-redux

const mapStateToProps = (state)=>({
  value: state //value is a prop of app in react now, while state is a string state from redux
});

const mapDispatchToProps = (dispatch)=>({
  update: (newtext)=>{
    dispatch(update(newtext)); //update is a prop of app in react, dispatch is from redux, newtext is the 
  }
});

const Provider = ReactRedux.Provider;//connects react to store
const connect = ReactRedux.connect; //connects state and dispatch of store to react app props

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App) //app now has props that include value-connecting redux state, and update-connecting redux action creator, update, which are all just js.

class AppWrapper extends React.Component {
  
  render() {
      return (
        <Provider store={store}>
          <ConnectedComponent/>
        </Provider>
      );
    }

};



ReactDOM.render(<AppWrapper/>, document.querySelector('#root'));

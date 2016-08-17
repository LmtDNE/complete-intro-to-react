var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./myTitle')
var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)
var cE = React.createElement

var MyFirstComponenet = (
  div({style: {color: 'red'}},
    MyTitleFactory({title: 'Props are great', color: 'rebeccapurple'}),
    cE(MyTitle, {title: 'Use props everywhere!', color: 'peru'}),
    cE(MyTitle, {title: 'Props are best!', color: 'mediumaquamarine'})
    )
  )

ReactDOM.render(MyFirstComponenet, document.getElementById('app'))

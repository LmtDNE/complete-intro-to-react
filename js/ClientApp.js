var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null, 
          h1(null, this.props.title)
        )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)
var cE = React.createElement


var MyFirstComponenet = (
  div({style:{color:'red'}},
      MyTitleFactory({title: 'Props are great'}),
      cE(MyTitle, {title: 'Use props everywhere!'}),
      cE(MyTitle, {title: 'Props are best!'})

    )
)

ReactDOM.render(MyFirstComponenet, document.getElementById('app'))
'use strict';

var React = require('react');
var basicStyle = require('../../sass/base.scss');

var TestOne = require('./TestOne.jsx');
var TestTwo = require('./TestTwo.jsx');

var Button = React.createClass({
    getInitialState: function() {
        return {
          switch: true
        };
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },
    render() {
        return (
            <div>
                <input className="button" type="button" onClick={this._toggle} value="Button"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}
            </div>
        );
    }
});

module.exports = Button
/*
'use strict';

var React = require('react');
var basicStyle = require('../../sass/base.scss');
var Content = require('./Content.jsx');
var ContentRed = require('./ContentRed.jsx');

var TestTwo = React.createClass({
    render() {
        return (
            <div className="base-content test-two-component">
                <p><Content /></p>
                <ContentRed />
            </div>
        );
    }
});

module.exports = TestTwo;
*/

'use strict';

var React = require('react');
var basicStyle = require('../../sass/base.scss');
var Content = require('./Content.jsx');
var ContentRed = require('./ContentRed.jsx');

var RippleEffect = require('ripple-effect');

var TestTwo = React.createClass({
    handleClick(){
        this.refs.ripplecon.handleClick();
    },
    render() {
        return (
            <div className="base-content test-two-component">
                <p><Content /></p>
                <RippleEffect ref="ripplecon" color="#fff" during={1300} >
                    <div onMouseEnter={this.handleClick}>
                        <ContentRed />
                    </div>
                </RippleEffect>
            </div>
        );
    }
});

module.exports = TestTwo;


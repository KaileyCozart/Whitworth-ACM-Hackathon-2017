'use strict';

var React = require('react');
var basicStyle = require('../../sass/base.scss');
var Content = require('./Content.jsx');
var ContentBlue = require('./ContentBlue.jsx');

var RippleEffect = require('ripple-effect');

var TestOne = React.createClass({
    handleClick(){
        this.refs.ripplecon.handleClick();
    },
    render() {
        return (
            <div className="base-content test-one-component">
                <p><Content /></p>
                <RippleEffect ref="ripplecon" color="#fff" during={1700} >
                    <div onMouseEnter={this.handleClick}>
                        <ContentBlue/>
                    </div>
                </RippleEffect>
            </div>
        );
    }
});

module.exports = TestOne;

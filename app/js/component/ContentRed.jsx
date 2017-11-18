'use strict';

var React = require('react');
var basicStyle = require('../../sass/base.scss');

var ContentRed = React.createClass({
    render() {
        return (
            <div className="base-content contentRed">
                <p>ContentRed</p>
            </div>
        );
    }
});

module.exports = ContentRed;

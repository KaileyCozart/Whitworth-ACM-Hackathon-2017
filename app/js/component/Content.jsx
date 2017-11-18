'use strict';

var React = require('react');
var basicStyle = require('../../sass/base.scss');

var Content = React.createClass({
    render() {
        return (
            <div className="base-content content">
                <p>Content</p>
            </div>
        );
    }
});

module.exports = Content;

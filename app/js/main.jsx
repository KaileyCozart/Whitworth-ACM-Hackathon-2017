'use strict';

var React = require('react');
var Button = require('./component/Button.jsx');

var Main = React.createClass({
    render() {
        return (
            <div>
                <Button />
            </div>
        );
    }
});


React.render(<Main />, document.body);

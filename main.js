import React from 'react';
import ReactDOM from 'react-dom';

let HelloWorld = React.createClass({
    render: function() {
        return (
            <h1> Hello world! </h1>
        );
    }
});

ReactDOM.render(
<HelloWorld />,
    document.getElementById('content')
);
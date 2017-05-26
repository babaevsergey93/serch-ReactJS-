let scotlandYard = {
    author: 'Billy Jean',
    title: 'Who like orangad?',
    body: 'Kell likes orangad'

};

const Input = React.createClass({
    getInitialState: function() {
        return this.state;
    },
    setState: function() {
        console.log(this.getInitialState());
    },
    render: function() {
        return <input className='text-field' type="text"/>
    }
});

const Show = React.createClass({
    render: function() {
        return <Input />
    }
});

ReactDOM.render(
    <Show />,
    document.getElementById('content')
);
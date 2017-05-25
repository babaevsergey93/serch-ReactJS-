const CONTACTS = [{
    id: 1,
    name: 'Rodion Adamenko',
    phoneNumber: '+380639999999',
    image: 'bender.jpg'
},{
    id: 2,
    name: 'Evgeniy Gladkih',
    phoneNumber: '+380633333333',
    image: 'fray.jpg'
},{
    id: 3,
    name: 'Nikolay White',
    phoneNumber: '+380632222222',
    image: 'zoidberg.jpg'
},{
    id: 4,
    name: 'Elena Pira',
    phoneNumber: '+380632222222',
    image: 'lila.jpg'
}];

let Contact = React.createClass({
    render: function() {
        return <li className="contact">
                    <img  className="contact-image" src={this.props.image} width="60px" height="60px"/>
                    <div className="contact-info">
                        <div className="contact-name">{this.props.name}</div>
                        <div className="contact-number">{this.props.phoneNumber}</div>
                    </div>
                </li>
    }
});

let ContactList = React.createClass({
    getInitialState: function() {
        return {
            displayedContacts: CONTACTS
        }
    },
    search: function(e) {
        let word = e.target.value.toLowerCase();
        let displayedContacts = CONTACTS.filter((el) => {
            let searchWord = el.name.toLowerCase();
            return searchWord.indexOf(word) !== -1;
        });
        this.setState({
            displayedContacts: displayedContacts
        });
        console.log(displayedContacts);
    },
    render: function() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.search}/>
                <ul className="contact-list">
                    {
                        this.state.displayedContacts.map((el) => {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber = {el.phoneNumber}
                                image = {el.image}

                        />})
                    }
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
    <ContactList />,
    document.getElementById('content')
);
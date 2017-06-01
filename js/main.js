const CONTACTS = [{
    id: 1,
    name: 'Rodion Adamenko',
    phoneNumber: '+380639999999',
    image: 'images/bender.jpg',
    description: 'I want to tell you little beat more...'
},{
    id: 2,
    name: 'Evgeniy Gladkih',
    phoneNumber: '+380633333333',
    image: 'images/fray.jpg',
    description: 'I want to tell you little beat more...'
},{
    id: 3,
    name: 'Nikolay White',
    phoneNumber: '+380632222222',
    image: 'images/zoidberg.jpg',
    description: 'I want to tell you little beat more...'
},{
    id: 4,
    name: 'Elena Pira',
    phoneNumber: '+380632222222',
    image: 'images/lila.jpg',
    description: 'I want to tell you little beat more...'
}];

let Contact = React.createClass({

    getInitialState: function() {
        return {
            visible: false
        }
    },
    showMore: function(e) {
        let more = e.target.parentNode.getElementsByClassName('more')[0];
        this.setState({
            visible: !this.state.visible
        });
        if (this.state.visible) {
            more.style.display = 'block';
        } else {
            more.style.display = 'none';
        }
    }
    ,
    render: function() {
        return <li className="contact">
                    <img  className="contact-image" src={this.props.image} width="60px" height="60px"/>
                    <div className="contact-info">
                        <div className="contact-name">{this.props.name}</div>
                        <div className="contact-number">{this.props.phoneNumber}</div>
                        <a href="#" className="read-more" onClick={this.showMore}>Подробнее</a>
                        <div className="more">{this.props.description}</div>
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
                                description={el.description}
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
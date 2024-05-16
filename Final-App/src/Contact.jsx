import React from 'react';
import './App.css'

class ContactInfoComponent extends React.Component {
  state = {
    selectedContact: null,
    name: '',
    email: '',
    productDescription: ''
  };

  handleTitleClick = (key) => {
    this.setState({ selectedContact: key });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, such as sending data to a backend server
    console.log("Form submitted:", this.state);
    // You can add your form submission logic here
    // Clear the form after submission
    this.setState({ name: '', email: '', productDescription: '' });
  };

  renderContactInfo() {
    let contactInfo = {
      laSource: {
        name: "La Source",
        website: "https://www.thesource.ca/fr-ca/store/540300",
        telephone: "+14506700366",
        email: "@laSource.com"
      },
      GameStop: {
        name: "GameStop",
        website: "http://www.ebgames.ca",
        telephone: "+14506460222",
        email: "help@gamestop.ca",
      },
      MasterVox: {
        name: "Master-Vox",
        website: "http://www.mastervox.com",
        telephone: "+14506701550",
        email: "info@mastervox.com",
      },
      XchangeZoneca: {
        name: "Xchange Zone.ca",
        website: "http://www.xchangezone.ca",
        telephone: "+14504420992",
        email: ""
      },
      Walmart: {
        name: "Walmart",
        website: "https://www.walmart.ca/en/stores-near-me/",
        telephone: "+14506705335",
        email: ""
      },
      JeuxVideoAccros: {
        name: "Jeux Video Accros",
        website: "https://flybuysold.com/",
        telephone: "+14506767005",
        email: "contact@flybuysold.com"
      },
      Imaginaire: {
        name: "Imaginaire",
        website: "http://imaginaire.com/",
        telephone: "+14502865389",
        email: "info@imaginaire.com"
      },
      CoinGameOver: {
        name: "Coin Game Over",
        website: "https://www.facebook.com/coingameover/",
        telephone: "+14506768420",
        email: "boutique@coingameover.com"
      },
      Awesome: {
        name: "Boutique Awesome",
        website: "http://www.boutiqueawesome.com/",
        telephone: "+14502864115",
        email: "store@boutiqueawesome.com"
      },
      BestBuy: {
        name: "Best Buy",
        website: "https://stores.bestbuy.ca",
        telephone: "+18662378289",
        email: ""
      }
    };

    const selectedContact = this.state.selectedContact;
    if (!selectedContact) return null;

    const contact = contactInfo[selectedContact];
    return (
      <div>
        <h2>{contact.name}</h2>
        <p>Website: <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
        <p>Telephone: {contact.telephone}</p>
        <p>Email: {contact.email}</p>
      </div>
    );
  }

  render() {
    let contactInfoKeys = Object.keys({
      laSource: "",
      GameStop: "",
      MasterVox: "",
      XchangeZoneca: "",
      Walmart: "",
      JeuxVideoAccros: "",
      Imaginaire: "",
      CoinGameOver: "",
      Awesome: "",
      BestBuy: ""
    });

    return (
      <div>
        <h2>Contact Titles</h2>
        <ul>
          {contactInfoKeys.map(key => (
            <li key={key} onClick={() => this.handleTitleClick(key)}>{key}</li>
          ))}
        </ul>
        {this.renderContactInfo()}
        
        {/* Contact Form */}
        {this.state.selectedContact && (
          <div>
            <h2>Contact Form</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
              </div>
              <div>
                <label htmlFor="productDescription">Product Description:</label>
                <textarea id="productDescription" name="productDescription" value={this.state.productDescription} onChange={this.handleInputChange} required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ContactInfoComponent;

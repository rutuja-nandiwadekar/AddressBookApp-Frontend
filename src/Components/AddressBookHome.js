import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import AddressbookService from "../Service/AddressbookService";
import "./AddressBookHome.css";

import delete1 from "../Assets/delete-black-18dp.svg"
import edit1 from "../Assets/create-black-18dp.svg"

export default function Home(props) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContactsApi();
  });

  function fetchContactsApi() {
    AddressbookService.getAllContacts()
      .then((result) => {
        setContacts(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let getProps = () => {
    console.log(props)
  }

  let deleteContact = (id) => {
    AddressbookService.delete(id);
    fetchContactsApi();
  }

  let updateContact = (id) => {
    props.history.push({
      pathname: "/form",
      state: id
    })

  }

  return (
    <div>
      <span></span>
      <header className="header-content header">
        <div className="logo-content">
          <img src="../Assets/aadressbookimage.png" alt="" className="logo-content-img" width="50px" onClick={getProps} />
          <div>
            <span className="addr-text">ADDRESS</span>
            <br />
            <span className="addr-text addr-book">BOOK</span>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="header-content">
          <div className="person-detail-text"> Person Details <div className="person-count"></div> </div>
          <Link to="/form" className="add-button"> <img src="../assets/icons/add+24px.svg" alt="" /> + Add Person </Link>
        </div>

        <div className="table-main">
          <table id="table-display" className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Phone Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {
                contacts.map((contact, i) => {
                  return (
                    <tr key={contact.personId}>

                      <td>{contact.personId}</td>
                      <td>{contact.name}</td>
                      <td>{contact.address}</td>
                      <td>{contact.city}</td>
                      <td>{contact.state}</td>
                      <td>{contact.zip}</td>
                      <td>{contact.phoneNumber}</td>
                      <td>

                        <img
                          className="edit"
                          name={contact.personId}
                          src={edit1}
                          alt="edit"
                          onClick={() => updateContact(contact.personId)}
                        />

                        <img
                          name={contact.personId}
                          src={delete1}
                          alt="delete"
                          onClick={() => deleteContact(contact.personId)}
                        />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

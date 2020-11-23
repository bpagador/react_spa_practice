import React from 'react'

const Contacts = ({ contacts }) =>  {

    return (
        <div>
            <h1>Contact List</h1>
            {contacts.map((contact) => (
                <div className="card">
                    <section className="card-body">
                        <h1 className="card-title">{contact.name}</h1>
                        <h2 className="card-email">{contact.email}</h2>
                        <h3 className="card-website">{contact.website}</h3>
                    </section>
                </div>
            ))}
            
        </div>
    )
}
export default Contacts;
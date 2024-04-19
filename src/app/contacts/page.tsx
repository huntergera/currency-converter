"use client";
import {notFound} from "next/navigation";
import {useEffect, useState} from "react";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    if(!contacts.length) {
        notFound();
    }

    const fetchContacts = async () => {
        try {
            const response = await fetch("https://...");
            setContacts(await response.json())
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div>
            <div className="text-h2 text-center">Contacts</div>
        </div>
    );
};

export default Contacts;
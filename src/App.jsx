import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactUpdate from './components/Contactupdate';
import Modal from './components/Modal';
import CreateContact from './components/CreateContact';
import useDisclosure from './hooks/useDisclosure';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const { isOpen, onClose, onOpen } = useDisclosure();
    //console.log("yes");

    useEffect(() => {
        const getContacts = async () => {
          try {
            const contactsRef = collection(db, "contacts");
    
            onSnapshot(contactsRef, (snapshot) => {
              const contactLists = snapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              });
              setContacts(contactLists);
              return contactLists;
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        getContacts();
      }, []);
    
      const filterContacts = (e) => {
        const value = e.target.value;
    
        const contactsRef = collection(db, "contacts");
    
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
    
          const filteredContacts = contactLists.filter((contact) =>
            contact.name.toLowerCase().includes(value.toLowerCase())
      );

            setContacts(filteredContacts);

            return filteredContacts;
        });
      };
    
    return (
        <div className= " absolute  h-screen mx-auto max-w-[370px] px-4 bg-black mb-4 "
          style={{ borderRadius: '70px', borderWidth: '6px', borderColor: 'green', borderStyle: 'solid' ,
          overflowY: 'auto' }}>
            <Navbar className=" relative mt-5"/>
            <div className="flex gap-2 mt-8">
                <div className="relative flex flex-grow items-center">
                    <FiSearch className="absolute ml-1 text-3xl text-white" />
                    <input
                        onChange={filterContacts}
                        type="text"
                        className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
                    />
                </div>
                <AiFillPlusCircle
                   onClick={onOpen}
                    className="cursor-pointer text-5xl text-white"
                />
                
            </div>
            <div className="mt-4 flex flex-col gap-3">
             {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactUpdate key={contact.id} contact={contact} setContacts={setContacts} />
            ))
          )}
        </div>
          
         
        <CreateContact onClose={onClose} isOpen={isOpen}/>
        <ToastContainer position="bottom-center"/>
                
        </div>
    

        
        
    );
};

export default App;

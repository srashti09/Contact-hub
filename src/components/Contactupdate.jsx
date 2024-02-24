import React from 'react';
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { deleteDoc ,doc } from 'firebase/firestore';
import CreateContact from './CreateContact';
import useDisclosure from '../hooks/useDisclosure';
import { db } from "../config/firebase";
import {toast} from "react-toastify";



const ContactUpdate = ({ contact }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
  
    const deleteContact = async (id) => {
      try {
        await deleteDoc(doc(db, "contacts", id));
        toast.success("Contact Deleted Successfully");
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div key={contact.id} className="flex items-center justify-between rounded-lg bg-laurel p-2">
            <div className="flex gap-5">
                <HiOutlineUserAdd className="text-4xl text-yellow" />
                <div>
                    <h2 className="font-medium">{contact.name}</h2>
                    <p className="text-sm">{contact.email}</p>
                </div>
            </div>
            <div className="flex text-3xl">
                <CiEdit className="cursor-pointer" onClick={onOpen} />
                <MdDelete onClick={() => deleteContact(contact.id)} className="cursor-pointer text-yellow" />
            </div>
            <CreateContact contact={contact} isOpen={isOpen} onClose={onClose} isUpdate/>
        </div>
    );
};

export default ContactUpdate;

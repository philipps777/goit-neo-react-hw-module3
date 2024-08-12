import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  const hasContacts = contacts.length > 0;

  return (
    <div>
      {hasContacts && (
        <ul className={styles.contactlist}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.contactitem} key={id}>
              <Contact
                id={id}
                name={name}
                phone={number}
                onDeleteContact={onDeleteContact}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasContacts && <p>Your contact list is empty</p>}
    </div>
  );
};

export default ContactList;

// import React, { useState } from "react";
// import styles from "./styles.module.css"; 

// const ContactList = ({ contacts, onDeleteContact }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   const hasContacts = contacts.length > 0;

//   return (
//     <>
//       <button onClick={toggleModal}>Show Contacts</button>

//       {isOpen && (
//         <div>
//           <div className={styles.modalBackground} onClick={toggleModal}></div>
//           <div className={styles.modal}>
//             {hasContacts ? (
//               <ul className={styles.contactlist}>
//                 {contacts.map(({ id, name, number }, index) => (
//                   <li key={id} style={{ backgroundColor: getRandomColor() }}>
//                     <Contact
//                       id={id}
//                       name={name}
//                       phone={number}
//                       onDeleteContact={onDeleteContact}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>Your contact list is empty</p>
//             )}
//             <button onClick={toggleModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const getRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// export default ContactList;

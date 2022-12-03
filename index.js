const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch(action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const aContact = await contacts.getContactById(id);
      console.log(aContact);
      break;
    case "add":
      const addContact = await contacts.add({ name, email, phone });
      console.log(addContact);
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.log("Uknown action")
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

// invokeAction({ action: "list" })
// invokeAction({action: "getContactById", id: "1"})
// invokeAction({action: "add", name: "Chaim Lewis", email: "dui.in@egetlacus.ca", phone: "(294) 840-6685"})
// invokeAction({action: "remove", id: "2"})

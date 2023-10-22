
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;




export const  selectVisibleContacts = state => {
 const items = selectContacts(state);
 const filterWord = selectFilter(state);
       return items.filter(contact => contact.name.toLowerCase()
        .includes(String(filterWord).toLowerCase()))
     }
    
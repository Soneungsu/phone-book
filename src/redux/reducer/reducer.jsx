const initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            id: Date.now(),
            name: action.payload.name,
            phoneNumber: action.payload.phoneNumber,
          },
        ],
      };
    case "DELETED_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default reducer;

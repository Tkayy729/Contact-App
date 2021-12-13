const initialState = [
  {
    id: 0,
    name: "Emmanuel",
    number: "1234567890",
    email: "e@gmail.com",
  },
  {
    id: 1,
    name: "Thomas",
    number: "0501654455",
    email: "t@gmail.com",
  },
  {
    id: 2,
    name: "Daniel",
    number: "123",
    email: "tk@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateContact = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateContact;
      return state;
      case "DELETE_CONTACT":
          const filterContact = state.filter(contact => contact.id !== action.payload  && contact);
          state = filterContact;
          return state;

    default:
      return state;
  }
};

export default contactReducer;

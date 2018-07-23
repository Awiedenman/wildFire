
export const currentFireReducer = (state={}, action) => {
  switch (action.type) {
    case 'STORE_CURRENT_FIRE_DATA':
    return action.parsedFiresData
  
    default:
      return state;
  }
}
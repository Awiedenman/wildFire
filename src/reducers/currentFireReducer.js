
export const currentFireReducer = (state={}, action) => {
  switch (action.type) {
    case 'STORE_CURRENT_FIRE_DATA':
    return  action.currentFireData 
  
    default:
      return state;
  }
}
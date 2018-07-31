export const storeCurrentFireData = (cleanedCurrentFireData, firesFromDb) => ({
  type: 'STORE_CURRENT_FIRE_DATA',
  cleanedCurrentFireData,
  firesFromDb
});

export const addUnverifiedFire = (unverifiedFiresFromDb) => ({
  type: 'ADD_UNVERIFIED_FIRE',
  unverifiedFiresFromDb
});
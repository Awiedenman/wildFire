export const fireDataCleaner = (fireData) => {
  const cleanFireData = fireData.rss.channel.item.reduce((currentFires, fire )=> {
    const fireObject = {};
    fireObject['fire_name'] = fire.title._text.split(',')[0],
    fireObject['image'] = fire.enclosure._attributes.url,
    fireObject['acres_burned'] = fire.description._text.split(',')[1],
    fireObject['last_update'] = fire.description._text.split(',')[0]
    fireObject['latitude'] = fire['geo:lat']._text,
    fireObject['longitude'] = fire['geo:long']._text,
    fireObject['verified'] = true,
    
    currentFires.push(fireObject);
    return currentFires;
  }, []);
  // console.log('out', cleanFireData);
  return cleanFireData;
};

export const fireDataCleaner = (fireData) => {
  console.log(fireData)
  const cleanFireData = fireData.rss.channel.item.reduce((currentFires, fire )=> {
    const fireObject = {};
    fireObject['name'] = fire.title._text.split(',')[0],
    fireObject['image'] = fire.enclosure._attributes.url,
    fireObject['acresBurned'] = fire.description._text.split(',')[1],
    fireObject['lastUpdate'] = fire.description._text.split(',')[0]
    fireObject['latitude'] = fire['geo:lat']._text,
    fireObject['longitude'] = fire['geo:long']._text
    currentFires.push(fireObject)
    return currentFires
  }, [])
  console.log('out', cleanFireData);
  return cleanFireData
}

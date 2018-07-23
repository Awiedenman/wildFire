export const fireDataCleaner = (fireData) => {
  const cleanFireData = fireData.rss.channel.item.reduce((fireObject, fire )=> {
    console.log(fire)
    // console.log(fire.title._text.split(',')[0]);
    fireObject['name'] = fire.title._text.split(',')[0],
    fireObject['image'] = fire.enclosure._attributes.url,
    fireObject['acresBurned'] = fire.description._text.split(',')[1],
    fireObject['lastUpdate'] = fire.description._text.split(',')[0]
    fireObject['latitude'] = fire['geo:lat']._text,
    fireObject['longitude'] = fire['geo:long']._text


    console.log(fireObject)
    return fireObject
  }, {})
}
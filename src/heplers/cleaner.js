export const fireDataCleaner = (fireData) => {
  const cleanFireData = fireData.rss.channel.item.map( fire => {
    console.log( fire )
  })
}
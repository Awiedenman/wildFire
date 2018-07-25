var convert = require('xml-js');
 
 export const currentFireRequest = async () => {
   const url = 'https://cors-anywhere.herokuapp.com/https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml';
   try{
     const xmlResponse = await fetch(url);
     const currentFireDataXml = await xmlResponse.text();
     var jsonData = convert.xml2json(
       currentFireDataXml, {
         compact: true,
         spaces: 2
        });
        // console.log(currentFireDataXml)
        // console.log(jsonData)
        return jsonData
      } catch(error){
        throw Error('Couldn\'t retreive the current fire')
      }
 }

 export const currentFireArticlesRequest = async () => {
   const url = 'https://cors-anywhere.herokuapp.com/http://inciweb.nwcg.gov/feeds/rss/articles/';
   try {
     const xmlResponse = await fetch(url);
     const currentFireArticlesXml = await xmlResponse.text();
     var jsonData = convert.xml2json(
       currentFireArticlesXml, {
         compact: true,
         spaces: 2
       });
    //  console.log(currentFireArticlesXml)
    //  console.log(jsonData)
     return jsonData
   } catch (error) {
     throw Error('Couldn\'t retreive the current fire')
   }
 }
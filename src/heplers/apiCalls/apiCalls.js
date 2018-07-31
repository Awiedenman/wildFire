var convert = require('xml-js');
 
export const currentFireRequest = async () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml';
  const xmlResponse = await fetch(url);
  const currentFireDataXml = await xmlResponse.text();
  //  console.log(currentFireDataXml);
  var jsonData = convert.xml2json(
    currentFireDataXml, {
      compact: true,
      spaces: 2
    });
  console.log(JSON.parse(jsonData));
        
  return JSON.parse(jsonData) ;
};

//  export const currentFireArticlesRequest = async () => {
//    const url = 'https://cors-anywhere.herokuapp.com/http://inciweb.nwcg.gov/feeds/rss/articles/';
//    try {
//      const xmlResponse = await fetch(url);
//      const currentFireArticlesXml = await xmlResponse.text();
//      var jsonData = convert.xml2json(
//        currentFireArticlesXml, {
//          compact: true,
//          spaces: 2
//        });
//      return jsonData
//    } catch (error) {
//      throw Error('Couldn\'t retreive the current fire')
//    }
//  }

export const getUnverifiedFires = async () => {
  const url = 'http://localhost:3000/api/v1/fires';
  const getFiresResponse = await fetch(url);
  const unverifiedFireData = await getFiresResponse.json();
  return unverifiedFireData;
};

export const postUnverifiedFires = async(unverifiedFire) => {
  const url = 'http://localhost:3000/api/v1/fires';
  const postFireRequest = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(unverifiedFire),
    headers: {
      'Content-Type': 'application/json'
    } 
  });
  const fireData = await postFireRequest.json();
  console.log(fireData);
  return fireData;
};
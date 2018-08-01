import convert from 'xml-js';
 
export const currentFireRequest = async () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml';
  const xmlResponse = await fetch(url);
  const currentFireDataXml = await xmlResponse.text();
  var jsonData = convert.xml2json(
    currentFireDataXml, {
      compact: true,
      spaces: 2
    });
  
  if (!xmlResponse.ok) {
    throw Error('Sorry, there was problem retreiving the current wildfires. Please try again later.');
  }
        
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

  if (!getFiresResponse.ok) {
    throw Error('Sorry, there was problem retreiving unverified fires. Please try again later.');
  }
  
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

  if (!postFireRequest.ok) {
    throw Error('Sorry, there was problem posting your fire. Please try again later.');
  }
  
  const fireData = await postFireRequest.json();
  return fireData;
};
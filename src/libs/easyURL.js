export default {
  "getQueries": getQueries,
  "setQueries": setQueries,
  "getClientData": getClientData,
  "gcd": getClientData,
  "getFrag": getFrag
}

/**
 * Return an easy query data manipulating object Ex.: obj.query = value
 *    |  Dont safely hold query order
 */
function getQueries(){
  let url = window.location.href
  // Separate the query section from the URL and return
  // an array strings that contain query pairs
  // Example: [ 'query1=value', 'query2=value', 'query3=value' ]
  let queryArray =  url.split("#")[0].split("?")[1]?.split("&")
  // An object to hold the querys
  let querys = {}
  // Fill the query object with query data for easy data manipulation
  // Example: querys.query = value;
  if (queryArray) queryArray.forEach(query =>{
    query = query.split("=")
    querys[`${query[0]}`] = query[1]
  })
  return querys    
}

/**
 * Safely inserts back your previusly edited queries from getQueries() in browser current URL
 */
function setQueries(queriesObject){
  //Throws possible errors
  if(!queriesObject || !queriesObject instanceof Object) throw Error("Invalid or empty query object")
  // get current brownser URL
  let url = window.location.href
  // save other parts of URL for recompose
  let prefix = url.split("?")[0]
  let sufix = url.split("#")[1]
  // deal with 
  sufix = sufix?"#"+sufix:""
  let entriesArray = Object.entries(queriesObject)
  let queryPairsArray = entriesArray.map((keyValuePair) => {
    return keyValuePair.join("=")
  })
  let queriesString = queryPairsArray.join('&')
  url = prefix+'?'+queriesString+sufix
  window.location.href = url
  return url
}

/**
 * Return an easy to use client URL data manipulating object extracted from the fragment part of a URL
 * OBJ USAGE: urldata.key = value
 * @param {string} joiner - '=' as default. Character that join key=value pairs
 * @param {string} separator - '&' as default. Character that separate key1=val1&key2=val2 p
 */
function getClientData(separator, joiner){
  if(!separator) separator = '&'
  if(!joiner) joiner = '='

  let url = window.location.href
  // Separate the query section from the URL and return
  // an array strings that contain query pairs
  // Example: [ 'query1=value', 'query2=value', 'query3=value' ]
  let dataArray =  url.split("#")[1]?.split(separator)
  return dataArray
  // An object to hold the querys
  let querys = {}
  // Fill the query object with query data for easy data manipulation
  // Example: querys.query = value;                      |
  if (queryArray) queryArray.forEach(query =>{
    query = query.split("=")
    querys[`${query[0]}`] = query[1]
  })
  return querys    
}

/** Gets the fragment of the current browser URL
 *  @param {string} separator - Default: '@' - needed if given url encodes client only data in url
 *  @param {boolean} isRetriveing - Default: false - if true gets data encoded part of the URL, after the id fragment. If false takes id part only.
 */
function getFrag(separator, isRetrieving){
  if(!separator) separator = '@'
  let part = isRetrieving ? 1 : 0
  let frag = window.location.href.split('#')[1]
  frag = frag?.split(separator)[part]
  return frag? frag : ""
}
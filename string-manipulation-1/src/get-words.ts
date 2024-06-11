/* exported getWords */
function getWords(string:string):string[]{
  if(string === ''){
    return [];
  } else {
  return string.split(' ');
}
}

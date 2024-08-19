/* exported truncate */
function truncate(length:number, string:string):string{
 for(let index:number =  length; index < string.length; index++){
  if(string.length > index){
    return string.slice(0, index) + "...";
  } else{
  string = "";
 }

}
 return string + '...';

}

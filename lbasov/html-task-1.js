/**
 * Created by prt on 20.11.13.
 */


function replaceHrefs(){
    var tagList = document.getElementsByTagName('a');
    for(var i=0; i < tagList.length; i++){
        var currentLink = tagList[i];
        if( currentLink.parentNode.id === 'container' ){
            currentLink.href = '#';
        }else if(currentLink.parentNode.id === 'secondContainer') {
            currentLink.innerText =  'Yahoo!';
        }
    }
}
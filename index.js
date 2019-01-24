
/*var x=0
function add(i){
    
    x=x+1;
    
    document.getElementById('afficheur'+i).innerHTML = x;

}
function remove(){

    x=x-1
    document.getElementById('afficheur').innerHTML = x;

}
// document.getElementById('afficheur').innerHTML = x;





/*var compteur = 0;
function incremente(){
compteur ++;
document.getElementById("compteur").firstChild.nodeValue = compteur;
}*/

function incrementValue(i)
{
    var value = parseInt(document.getElementById('number'+i).value );
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number'+i).value = value;
    document.getElementById('somme'+i).innerHTML = value * '549';
   var sbadri = document.getElementById('somme1');
   document.getElementById('total').innerHTML = sbadri;
 

}

function removeValue(i)
{
    
    var value = parseInt(document.getElementById('number'+i).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0 ){
    value--;
    document.getElementById('number'+i).value = value;
    document.getElementById('somme'+i).innerHTML = value * '549';

    var sbadri = parseInt( document.getElementById('somme1'));
   document.getElementById('total').innerHTML = sbadri;
 

    
}
    
    }



    // function sommetotal (){
    //     const sbadri = 549;
    //     const sneakers = 870;
    //     const scarf = 349 ;
    //     var sbadrinbr = document.getElementById('number1').value;
    //     var sneakersnbr = document.getElementById('number2').value;
    //     var scarfnbr = document.getElementById('number3').value;
        
        
    //     var somme = sbadri * sbadrinbr + sneakers * sneakersnbr + scarf * scarfnbr ;
        
    //     document.getElementById('somme').value.innerHTML = 'Shopping Bag total:',somme.value ;
    //     }
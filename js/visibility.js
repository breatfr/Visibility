function visibilite(id)	{
var divs = document.getElementsByTagName('div');
    for(var no=0;no<divs.length;no++){
        if(divs[ no].className=='divs'){ // on cible les divs dont la class est 'divs'
            divs[ no].style.display = "none"; // on les masque tous
        }
    }
    document.getElementById(id).style.display = "block"; // on affiche le div appelé
}

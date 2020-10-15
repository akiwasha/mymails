//mise en place du compteur de messages
var counter = document.getElementById("counter_row");
counter.textContent = "Messages total: " + document.getElementsByClassName("row").length;

//mécanique de suppression des messages
var poubelle = document.getElementsByClassName("poubelle");
for (var i = 0; i < poubelle.length; i++) {
  poubelle[i].addEventListener("click", function () {
    this.parentNode.remove();
    //Mise à jour du compteur de messages suite à suppression
    messages = document.getElementsByClassName("row").length;
    counter.textContent = "Messages total: " + messages;
  });
}


//apposer un ecouteur sur le bouton add pour créer un nouveau message 
var btnadd = document.getElementById("btn-add");
btnadd.addEventListener("click", function () {
  var newmessage = document.getElementById("new-message");   
  //création d'une nouvelle div qui générera une nouvelle row avec tous les éléments
  newdiv = document.createElement("div");
  newdiv.className = "row";
  //création d'un nouvel avatar et ajout dans la nouvelle div
  newavatar = newdiv.appendChild(document.createElement("img"));
  newavatar.className = "avatar";
  newavatar.src = "avatar-0.png";
  //création d'une sous div (newmsgbox) comprenant le nom prénom(auteur) et texte(nouveaumessage), puis ajout dans la nouvelle div
  newmsgbox = newdiv.appendChild(document.createElement("div"));
  newmsgbox.className = "texte";
  auteur = newmsgbox.appendChild(document.createElement("h6"));
  auteur.textContent = "Pierre-Laurent";
  nouveaumessage = newmsgbox.appendChild(document.createElement("p"));
  nouveaumessage.textContent = newmessage.value;
  //création d'une nouvelle poubelle et ajout dans la nouvelle div
  newpoubelle = newdiv.appendChild(document.createElement("img"));
  newpoubelle.className = "poubelle";
  newpoubelle.src = "trash.png";
  //Mise à jour du compteur de messages suite à ajout
  messages = document.getElementsByClassName("row").length;
  counter.textContent = "Messages total: " + messages;
  //réinitialisation du champ de saisie
  newmessage.value = "";
  //mécanique de suppression des messages
  newpoubelle.addEventListener("click", function () {
    this.parentNode.remove();
    //Mise à jour du compteur de messages suite à suppression
    messages = document.getElementsByClassName("row").length;
    counter.textContent = "Messages total: " + messages;
  });
  //pour insérer notre nouveau message au début de la liste
  var firstrow = document.getElementById('first_row');
  liste_mails.insertBefore(newdiv, firstrow);
}
);





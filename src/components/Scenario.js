
/*
function App() {
  return (
    <div className="App">
      <p> Salut</p>
    </div>
  );
}
*/

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import DialogBox from "./DialogBox";
import "./styles.css";

function Scenario() {
    let messages = [""];
    const speakers = ["", /*Narrateur, en italique?*/ "Paul", "Julie", "Intervenant","Amie"];
    const {id} = useParams();
    console.log(id);
        switch(id) {
            case "1":
                messages = [
{speaker: speakers[0], message: "*Musique étouffée*\n"+speakers[1]+" arrive à la soirée." },
{speaker: speakers[0], message: "*Musique de soirée* \nIl remarque son amie "+speakers[2]},
{speaker: speakers[2], message: "Hé "+speakers[1]+" viens voir ! Voyons si t’as une bonne mémoire, viens jouer au Mémor-IST !" },
{speaker: speakers[1], message: "Ça a l’air sympa, je vais essayer !" } //choix possible, ajouter action
                  ];
                break;
            case "2":
                messages = [
    {speaker: speakers[0], message: "*Musique romantique/caliente* \n Après s'être longuement tchatché, ils partent dans une chambre" },
    {speaker: speakers[0], message: "*Musique romantique/caliente* \n *Dans une chambre*" },
    {speaker: speakers[2], message: "Bon ... Tu es prêt?" },
    {speaker: speakers[1], message: "Oui... Mince ! J’ai failli oublier, tu as un préservatif ?" },
    {speaker: speakers[2], message: "*Fouille dans ses affaires* Non et toi?" },
    {speaker: speakers[1], message: "Non plus... et je ne me suis pas encore fait tester..." },
    {speaker: speakers[2], message: "Dommage..." },
    {speaker: speakers[0], message: "Ils sortent tous les deux de la pièce, déçus" },
    {speaker: speakers[0], message: "*Son de soirée étouffé* Paul part aux toilettes, récupère un journal et s'installe" },
        ];
                break;
            case "3": 
                messages = [
    {speaker: speakers[0], message: "*Son de soirée étouffé* \n "+speakers[1]+" finit son mot croisés et sort" },
    {speaker: speakers[1], message: "Il était pas si dur ce Mot Crois’Herpes”" },
    {speaker: speakers[3], message: "Des mots croisés au toilettes? Pendant que tout le monde est en train de s’amuser dehors? T’es sûr que ça va?" },
    {speaker: speakers[2], message: "Tout se passait super bien avec "+speakers[2]+"."
    +" Malheureusement je ne me suis pas fait tester et on n'avait de préservatif."
    +" Par sécurité on a décidé de ne pas aller plus loin." },
    {speaker: speakers[3], message: "Je peux te dépanner si tu veux. J’ai un autotest VIH qui est fiable si tu n’as pas pris de risque sur les 3 derniers mois." },    
    {speaker: speakers[1], message: "WOW merci! Je vais le faire et retrouver Julie !" },
    {speaker: speakers[0], message: "*Son de soirée étouffé* \n Paul et Julie de retrouvent" },
    {speaker: speakers[0], message: "Paul est heureux suite à sa rencontre avec l'intervenant" },
    {speaker: speakers[1], message: "*Montre l'auto-test* \n"+speakers[2]+" ! J’ai une bonne nouvelle, regarde ce que je viens de récupérer !" },
    {speaker: speakers[2], message: "Oh ! Un auto-test ? Comment t’as eu ça ? " },
    {speaker: speakers[1], message: "J’ai croisé l'intervenant aux toilettes, je lui raconté ce qu’il se passait et il me l’a donné" },
    {speaker: speakers[2], message: "Tu l’as déjà utilisé ?" },
    {speaker: speakers[1], message: "Oui, j’attends encore les résultats quelques minutes, et comme j’ai toujours été prudent ça devrait aller ! "},
    {speaker: speakers[2], message: "Moi aussi j’ai une bonne nouvelle : j’ai croisé une amie qui nous va nous rendre service" },
    {speaker: speakers[1], message: "Et alors ?" },
    {speaker: speakers[0], message: "Revenons en arrière, lorsque "+speakers[2]+" et "+speakers[1]+" se sont quittés, et voyons ce qu'il s'est passé de son côté" },
    {speaker: speakers[0], message: "....." },
    {speaker: speakers[0], message: speakers[2]+" sort de la chambre, elle aussi déçue\n"
    +"Elle va s'asseoir dans le canapé du salon et sort son portable pour jouer à son jeu favori : HépaShoot'it" }
                ]
                break;
            case "4": //après jeu shooter
                messages = [
    {speaker: speakers[0], message: "*Musique de soirée, bruits de discussion*\nl'amie de "+speakers[2]+"vient s'asseoir à côté d'elle" },
    {speaker: speakers[4], message: "Ça a pas l’air d’aller "+speakers[2]+"... Lâche ton téléphone et profite un peu de la soirée!"},
    {speaker: speakers[2], message: "Pas vraiment, on est montés avec "+speakers[1]+" et on avait pas de quoi se protéger, donc on n'a rien fait..." },
    {speaker: speakers[4], message: "Vous avez bien réagi. Mais t'as pas vu !? L'intervenant distribue des préservatifs gratuits!" },
    {speaker: speakers[2], message: "Ah ouais !? Tu me régales je vais direct en chercher !!" }, 
    {speaker: speakers[0], message: "*Musique étouffée*\nDe retour dans la chambre avec nos deux tourtereaux"
+"Cette fois ils sont équipés et testés" },
    {speaker: speakers[2], message: "Tu es toujours d'accord hein ?" },
    {speaker: speakers[1], message: "Bien sûr et toi ?" },
    {speaker: speakers[2], message: "Évidemment !" },
    {speaker: speakers[0], message: "....." },
    {speaker: speakers[0], message: "Ils vécurent heureux, n'eurent pas d'enfants ce soir là, et aucune IST."}
       ]
                break;
            default:
                break;
        }

    return(
        <div className="App">
            <DialogBox messages={messages} nextStep={id} navigate={useNavigate()} />
        </div>
    );
}

export default Scenario;
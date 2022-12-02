
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

import DialogBox from "./DialogBox";
import "./styles.css";


class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.id = 1;
        this.messages = [""];
        this.speakers = ["", /*Narrateur, en italique?*/ "Paul", "Julie", "Intervenant","Amie"];
        switch(this.id){//props.match?.params?.id) {
            case 1:
                this.messages = [
{speaker: this.speakers[0], message: "*Musique étouffée*\n"+this.speakers[1]+" arrive à la soirée." },
{speaker: this.speakers[0], message: "*Musique de soirée* \nIl remarque son amie "+this.speakers[2]},
{speaker: this.speakers[2], message: "Hé "+this.speakers[1]+" viens voir ! Voyons si t’as une bonne mémoire, viens jouer au Mémor-IST !" },
{speaker: this.speakers[1], message: "Ça a l’air sympa, je vais essayer !" } //choix possible, ajouter action
                  ];
                break;
            case 2:
                this.messages = [
    {speaker: this.speakers[0], message: "*Musique romantique/caliente* \n Après s'être longuement tchatché, ils partent dans une chambre" },
    {speaker: this.speakers[0], message: "*Musique romantique/caliente* \n *Dans une chambre*" },
    {speaker: this.speakers[2], message: "Bon ... Tu es prêt?" },
    {speaker: this.speakers[1], message: "Oui... Mince ! J’ai failli oublier, tu as un préservatif ?" },
    {speaker: this.speakers[2], message: "*Fouille dans ses affaires* Non et toi?" },
    {speaker: this.speakers[1], message: "Non plus... et je ne me suis pas encore fait tester..." },
    {speaker: this.speakers[2], message: "Dommage..." },
    {speaker: this.speakers[0], message: "Ils sortent tous les deux de la pièce, déçus" },
    {speaker: this.speakers[0], message: "*Son de soirée étouffé* Paul part aux toilettes, récupère un journal et s'installe" },
        ];
                break;
            case 3: 
                this.messages = [
    {speaker: this.speakers[0], message: "*Son de soirée étouffé* \n "+this.speakers[1]+" finit son mot croisés et sort" },
    {speaker: this.speakers[1], message: "Il était pas si dur ce Mot Crois’Herpes”" },
    {speaker: this.speakers[3], message: "Des mots croisés au toilettes? Pendant que tout le monde est en train de s’amuser dehors? T’es sûr que ça va?" },
    {speaker: this.speakers[2], message: "Tout se passait super bien avec "+this.speakers[2]+"."
    +" Malheureusement je ne me suis pas fait tester et on n'avait de préservatif."
    +" Par sécurité on a décidé de ne pas aller plus loin." },
    {speaker: this.speakers[3], message: "Je peux te dépanner si tu veux. J’ai un autotest VIH qui est fiable si tu n’as pas pris de risque sur les 3 derniers mois." },    
    {speaker: this.speakers[1], message: "WOW merci! Je vais le faire et retrouver Julie !" }
        ]
            case 3: 
                this.messages = [
    {speaker: this.speakers[0], message: "*Son de soirée étouffé* \n Paul et Julie de retrouvent" },
    {speaker: this.speakers[0], message: "Paul est heureux suite à sa rencontre avec l'intervenant" },
    {speaker: this.speakers[1], message: "*Montre l'auto-test* \n"+this.speakers[2]+" ! J’ai une bonne nouvelle, regarde ce que je viens de récupérer !" },
    {speaker: this.speakers[2], message: "Oh ! Un auto-test ? Comment t’as eu ça ? " },
    {speaker: this.speakers[1], message: "J’ai croisé l'intervenant aux toilettes, je lui raconté ce qu’il se passait et il me l’a donné" },
    {speaker: this.speakers[2], message: "Tu l’as déjà utilisé ?" },
    {speaker: this.speakers[1], message: "Oui, j’attends encore les résultats quelques minutes, et comme j’ai toujours été prudent ça devrait aller ! "},
    {speaker: this.speakers[2], message: "Moi aussi j’ai une bonne nouvelle : j’ai croisé une amie qui nous va nous rendre service" },
    {speaker: this.speakers[1], message: "Et alors ?" },
    {speaker: this.speakers[0], message: "Revenons en arrière, lorsque "+this.speakers[2]+" et "+this.speakers[1]+" se sont quittés, et voyons ce qu'il s'est passé de son côté" },
    {speaker: this.speakers[0], message: "....." },
    {speaker: this.speakers[0], message: this.speakers[2]+" sort de la chambre, elle aussi déçue\n"
    +"Elle va s'asseoir dans le canapé du salon et sort son portable pour jouer à son jeu favori : HépaShoot'it" }
                ]
            case 3: //après jeu shooter
                this.messages = [
    {speaker: this.speakers[0], message: "*Musique de soirée, bruits de discussion*\nl'amie de "+this.speakers[2]+"vient s'asseoir à côté d'elle" },
    {speaker: this.speakers[4], message: "Ça a pas l’air d’aller "+this.speakers[2]+"... Lâche ton téléphone et profite un peu de la soirée!"},
    {speaker: this.speakers[2], message: "Pas vraiment, on est montés avec "+this.speakers[1]+" et on avait pas de quoi se protéger, donc on n'a rien fait..." },
    {speaker: this.speakers[4], message: "Vous avez bien réagi. Mais t'as pas vu !? L'intervenant distribue des préservatifs gratuits!" },
    {speaker: this.speakers[2], message: "Ah ouais !? Tu me régales je vais direct en chercher !!" }, 
    {speaker: this.speakers[0], message: "*Musique étouffée*\nDe retour dans la chambre avec nos deux tourtereaux"
+"Cette fois ils sont équipés et testés" },
    {speaker: this.speakers[2], message: "Tu es toujours d'accord hein ?" },
    {speaker: this.speakers[1], message: "Bien sûr et toi ?" },
    {speaker: this.speakers[2], message: "Évidemment !" },
    {speaker: this.speakers[0], message: "....." },
    {speaker: this.speakers[0], message: "Ils vécurent heureux, n'eurent pas d'enfants ce soir là, et aucune IST."}
       ]
                break;
    default:
                break;
        }
    }

    render() {
        return(
            <div className="App">
                <DialogBox messages={this.messages} />
            </div>
        );
    }
};

export default Scenario;
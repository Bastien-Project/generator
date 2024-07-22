document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("excuse").innerText = generatorDelay();

    document.getElementById("neon").addEventListener("click", function () {
        document.getElementById("excuse").innerText = generatorDelay();
    });
});


var generatedDelay = [];

function generatorDelay() {
    var apology = [
        "J'ai eu un problème de transport ce matin.",
        "Mon réveil est tombé en panne, je suis désolé(e).",
        "Le trafic était incroyablement dense aujourd'hui.",
        "Il y a eu un accident sur la route qui a causé un énorme bouchon.",
        "Ma voiture est tombée en panne en route.",
        "Je ne me sentais pas bien ce matin, mais ça va mieux maintenant.",
        "J'ai eu un rendez-vous médical de dernière minute.",
        "Mon enfant était malade et j'ai dû m'occuper de lui/elle.",
        "J'ai eu un problème de plomberie à la maison.",
        "Il y a eu une coupure d'électricité chez moi.",
        "Mon alarme n'a pas sonné ce matin.",
        "Mes chiens se sont échappés et j'ai dû les chercher.",
        "J'ai dû attendre un serrurier car je me suis enfermé(e) dehors.",
        "Il y a eu un problème de chauffage et j'ai dû attendre le technicien.",
        "Les routes étaient bloquées par la neige.",
        "L'ascenseur était en panne et j'ai dû prendre les escaliers.",
        "Il y avait une grève des transports en commun aujourd'hui.",
        "J'ai perdu mes clés et j'ai dû les chercher.",
        "J'ai aidé un voisin en détresse ce matin.",
        "J'ai eu un problème informatique à la maison.",
        "J'ai mal planifié mon trajet ce matin.",
        "J'ai fait un rêve très réaliste qui m'a désorienté au réveil.",
        "J'ai eu un problème de santé soudain.",
        "J'ai dû emmener mon animal chez le vétérinaire en urgence.",
        "Ma babysitter a annulé à la dernière minute.",
        "J'ai eu un problème avec la serrure de ma porte.",
        "Le mauvais temps a rendu la conduite difficile.",
        "Ma voiture était prise dans la neige.",
        "Il y a eu une inondation dans ma rue.",
        "J'ai dormi trop profondément et j'ai raté mon réveil.",
        "Ma machine à café est tombée en panne.",
        "J'ai égaré certains de mes objets personnels ce matin.",
        "Les transports en commun se sont arrêtés de manière imprévue.",
        "J'ai eu un incident domestique.",
        "J'ai dû emmener un membre de ma famille à l'hôpital.",
        "J'ai eu un problème avec ma connexion internet.",
        "Mon téléphone était éteint et mon alarme n'a pas sonné.",
        "J'ai travaillé tard hier soir et j'ai eu du mal à me lever.",
        "Il y avait un embouteillage massif ce matin.",
        "Le plombier est venu en visite impromptue.",
        "J'ai oublié de remettre mon réveil.",
        "Les feux de circulation étaient en panne.",
        "Il y a eu un incident dans le métro.",
        "J'étais bloqué(e) dans un ascenseur.",
        "J'ai eu un problème avec ma chaudière.",
        "Ma voiture ne voulait pas démarrer.",
        "J'ai eu un incident avec mon animal domestique.",
        "J'ai pris une mauvaise route par inadvertance.",
        "J'ai eu un problème avec mon oreiller et je n'ai pas bien dormi.",
        "Mon enfant a fait une crise ce matin.",
        "J'ai eu un incident avec le système de sécurité de ma maison.",
        "Il y avait une fuite d'eau chez moi.",
        "J'étais bloqué(e) par un déménagement dans ma rue.",
        "Ma voiture était emprisonnée par une autre voiture.",
        "J'ai eu un incident dans mon garage.",
        "J'ai eu un pneu crevé en route.",
        "J'ai perdu mon portefeuille ce matin.",
        "J'ai dû aller chercher un colis important.",
        "J'ai oublié mes documents importants à la maison.",
        "Un ami est venu me rendre visite par surprise.",
        "J'ai eu un problème avec le système de ventilation.",
        "J'ai eu un incident ménager.",
        "J'ai perdu mes lunettes et j'ai dû les chercher.",
        "J'ai eu un problème de santé de dernière minute.",
        "J'ai eu un incident avec ma machine à laver.",
        "Ma voiture était bloquée par un chantier.",
        "J'ai dû déblayer la neige devant chez moi.",
        "J'ai eu un incident au supermarché ce matin.",
        "J'ai dû faire un détour pour éviter des travaux.",
        "Ma voiture était bloquée par un camion.",
        "J'ai eu un incident avec mes enfants à l'école.",
        "J'ai eu une panne d'internet à la maison.",
        "J'ai eu un incident avec mon système de chauffage.",
        "J'ai oublié de recharger mon téléphone et je n'avais pas d'alarme.",
        "J'ai eu un incident avec mon GPS.",
        "J'ai eu un accident mineur sur le trajet.",
        "J'ai eu un incident dans le parking.",
        "J'ai eu un problème avec le système de sécurité de ma voiture.",
        "J'ai oublié de mettre de l'essence hier soir.",
        "J'ai eu un incident avec un livreur.",
        "Ma voiture était bloquée par un arbre tombé.",
        "J'ai eu un problème avec mon garage automatique.",
        "J'ai dû chercher une nouvelle babysitter en urgence.",
        "J'ai eu un problème de santé inattendu.",
        "J'ai eu un incident avec un voisin ce matin.",
        "J'ai eu un incident sur le trottoir.",
        "J'ai oublié de régler mon réveil hier soir.",
        "J'ai eu un problème avec les freins de ma voiture.",
        "J'ai mal réglé mon alarme.",
        "J'ai eu un incident avec un colis.",
        "Ma voiture était bloquée par des travaux routiers.",
        "J'ai eu un incident avec un vélo.",
        "J'ai eu un incident à la banque ce matin.",
        "J'ai eu un problème avec ma porte d’entrée.",
        "J'ai eu un problème de tuyauterie.",
        "J'ai eu un problème avec une fenêtre chez moi.",
        "J'ai eu un incident avec mon petit-déjeuner.",
        "Ma voiture était prise dans la boue.",
        "J'ai eu un incident avec la porte de mon garage.",
        "J'ai perdu mon sac à main/portefeuille ce matin."
    ];

    if (generatedDelay.length == apology.length) {
        generatedDelay = [];
    }

    var choice;
    do {
        choice = Math.floor(Math.random() * apology.length);
    } while (generatedDelay.includes(choice));

    generatedDelay.push(choice);

    if (choice >= 0 && choice < apology.length) {
        return apology[choice];
    } else {
        return "You're juste en assohole, go to work.";
    }
}
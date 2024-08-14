document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("excuse").innerText = generatorDate();

    document.getElementById("neon").addEventListener("click", function () {
        document.getElementById("excuse").innerText = generatorDate();
    });
});


var generatedDate = [];

function generatorDate() {
    var beauf = [
        "Hé, jolies jambes. Elles ouvrent à quelle heure ?",
        "Ton corps doit être une carte au trésor, parce que je veux bien me perdre dessus.",
        "Si tu étais un légume, tu serais une cochonne.",
        "Ma chambre est en désordre, tu viens faire le ménage ?",
        "Tu ferais une bonne actrice porno, t'as le physique pour.",
        "Les bonnes filles vont au paradis, les comme toi vont chez moi.",
        "T'es tellement belle que tu me fais oublier ma femme.",
        "Peut-être que sans vêtements tu serais belle.",
        "Ton corps crie pour du sexe, ça tombe bien, je suis disponible.",
        "Je suis prêt à te payer une chambre pour qu'on règle ça.",
        "Tu devrais sourire plus, tu serais plus jolie.",
        "C'est quoi ton tarif pour une nuit ?",
        "Je pourrais te regarder toute la journée, mais je préfère te toucher.",
        "J'ai une place dans mon lit, ça te dit de l'occuper ?",
        "Tu veux voir ma collection de conquêtes ?",
        "Avec un corps comme le tien, tu n'as pas besoin d'avoir de personnalité.",
        "Tu es comme une carte de crédit, toujours prête à être utilisée.",
        "Viens chez moi et je te montrerai comment les vrais hommes traitent les femmes.",
        "Tu as l'air d'une bonne cuisinière, tu pourrais préparer quelque chose pour moi ?",
        "Avec un physique comme le tien, pas besoin d'être intelligente.",
        "Les filles comme toi, ça s'attrape facilement.",
        "Je te mettrais bien dans mon lit pour voir ce que tu sais faire.",
        "Les femmes comme toi, ça se prend sans réfléchir.",
        "Tu devrais être fière de te faire draguer par un mec comme moi.",
        "T'as un cul à rendre jaloux une Kardashian.",
        "Les femmes sont faites pour plaire aux hommes, et tu fais bien ton boulot.",
        "Je te ferais bien l'amour toute la nuit, mais j'ai pas autant de temps à perdre.",
        "T'es bonne, mais je préfère quand même ta copine.",
        "Je te prendrais bien pour une nuit, mais juste une nuit.",
        "Je suis sûr que tu ferais une excellente maîtresse de maison.",
        "Je te mettrais bien dans mon lit et dans ma vie, mais surtout dans mon lit.",
        "Je suis prêt à te faire des choses que tu n'as jamais osé imaginer.",
        "Je suis prêt à te faire des choses que tu n'as jamais vu, même dans les pires pornos.",
        "Je suis sûr que tu ferais une excellente addition à mon tableau de chasse.",
        "Je ne cherche pas une relation, juste une bonne baise.",
        "Ton corps crie sexe, ça tombe bien, j'ai des oreilles pour l'entendre.",
        "Viens chez moi, je te montrerai ce que c'est que d'être un trou à bite.",
        "Je suis sûr que tu es aussi bonne au lit que tu en as l'air.",
        "Je te mettrais bien dans mon lit, mais pas dans mon cœur.",
        "Je veux bien te donnerais une chance de me prouver que tu n'es pas qu'une jolie fille.",
        "Je suis sûr que tu es aussi sauvage au lit que tu en as l'air.",
        "Je te mettrais bien dans mon lit pour voir si tu es à la hauteur de tes courbes.",
        "Les filles comme toi, ça se drague facilement.",
        "Je suis sûr que tu es aussi salope au lit que tu en as l'air.",
        "Je te donnerais bien une fessée pour voir si tu aimes ça.",
        "Si tu étais une porte, je te claquerais toute la nuit.",
        "Je ne suis pas un photographe, mais je peux nous voir ensemble.",
        "Ton père doit être un arabe, parce que tu es une bombe.",
        "Tu es tellement chaude que tu ferais fondre l'Antarctique.",
        "J'ai beau ouvrir tout les frigos du monde, mais rien n'est auss fraîche que toi.",
        "Si tu étais un fruit, tu serais une belle pêche.",
        "Si tu étais un hamburger, tu serais un McMignonne.",
        "Je ne suis pas astrologue, mais je peux lire notre avenir dans tes globes.",
        "Es-tu un match de foot ? Parce que tu es tout ce que je veux voir.",
        "Si tu étais un légume, tu serais une courgette... parce que tu me rends fou.",
        "Si ton voeux est de faire l'amour, je suis ton génie.",
        "Tu es tellement chaude que je vais t'appeler radiateur.",
        "Je ne suis pas un plombier, mais je te limerais bien ton canal.",
        "Je ne suis pas ramnoeur, mais je peux te nettoyer les conduits.",
        "Si j'étais une mouche, je me poserais sur toi, parce que tu es bonne.",
        "Je ne suis pas une fusée, mais tu me fais décoller.",
        "Si tu étais une pizza, tu serais un régal.",
        "Je ne suis pas un pompier, mais j'ai ma lance qui s'agite en te voyant.",
        "Je ne suis pas un volcanologue, mais tu es en éruption dans mon cœur.",
        "Es-tu un fouet ? Parce que tu fouettes mon cœur.",
        "Je ne suis pas foeutteur, mais j'aimerais bien te fouetter.",
        "Je ne suis pas un astronaute, mais je t'emmènerais bien sur la lune.",
        "Je ne suis pas un chef, mais ta chatte es mon plat préféré.",
        "Je ne suis pas un tailleur, mais tu es taillée sur mesure pour moi.",
        "Es-tu un diamant ? Parce que tu es précieuse.",
        "Es-tu une sirène ? Parce que tu m’attires avec ta voix.",
        "Je ne suis pas un jongleur, mais tu es mon numéro d’équilibriste.",
        "Es-tu une gogo danseuse ? Parce que tu m'attrires avec ton cul.",
        "Es-tu un phare ? Parce que tu guides mon cœur.",
        "Je ne suis pas un guide touristique, mais tu es ma destination.",
        "Je ne suis pas un collectionneur, mais tu es ma pièce maîtresse.",
        "Des culs j'en ai vu, mais le tien est le plus beau.",
        "Des seins j'en ai vu, mais des comme les tiens, jamais.",
        "Je ne suis pas un photographe, mais tu es mon cliché préféré.",
        "Je ne suis pas un danseur, mais tu es ma partenaire idéale.",
        "Je ne suis pas un berger, mais tu es ma brebis égarée.",
        "Es-tu un éclat de soleil ? Parce que tu réchauffes ma vie.",
        "Je ne suis pas un guerrier, mais tu es mon combat.",
    ];

    if (generatedDate.length == beauf.length) {
        generatedDate = [];
    }

    var choice;
    do {
        choice = Math.floor(Math.random() * beauf.length);
    } while (generatedDate.includes(choice));

    generatedDate.push(choice);

    if (choice >= 0 && choice < beauf.length) {
        return beauf[choice];
    } else {
        return "You're juste en assohole, go to work.";
    }
}
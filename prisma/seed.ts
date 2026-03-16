import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const citations = [
  // ─── SAGESSE ───────────────────────────────────────────────
  {
    text: "Un vieillard qui meurt, c'est une bibliothèque qui brûle.",
    author: "Amadou Hampâté Bâ",
    authorDescription: "Écrivain, ethnologue & diplomate malien",
    category: "sagesse",
  },
  {
    text: "La patience est la mère de tous les caractères.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique de l'Ouest",
    category: "sagesse",
  },
  {
    text: "L'eau qui dort est plus dangereuse que l'eau qui court.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale du continent africain",
    category: "sagesse",
  },
  {
    text: "La parole est comme l'eau : quand elle se répand, elle est difficile à rassembler.",
    author: "Proverbe wolof",
    authorDescription: "Sagesse ancestrale du peuple wolof, Sénégal",
    category: "sagesse",
  },
  {
    text: "Ce qui est dit dans la nuit doit être examiné à la lumière du jour.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique centrale",
    category: "sagesse",
  },
  {
    text: "La connaissance est comme un jardin : si elle n'est pas cultivée, elle ne peut être récoltée.",
    author: "Proverbe guinéen",
    authorDescription: "Sagesse ancestrale du peuple mandingue, Guinée",
    category: "sagesse",
  },
  {
    text: "Nul ne peut saisir l'aube avec ses mains.",
    author: "Amadou Hampâté Bâ",
    authorDescription: "Écrivain, ethnologue & diplomate malien",
    category: "sagesse",
  },
  {
    text: "La vérité, comme l'huile, remonte toujours à la surface.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale du continent africain",
    category: "sagesse",
  },
  {
    text: "L'arbre qui donne des fruits se fait jeter des pierres.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique de l'Ouest",
    category: "sagesse",
  },
  {
    text: "En Afrique, une chose n'est jamais terminée : elle attend sa suite.",
    author: "Léopold Sédar Senghor",
    authorDescription: "Poète, président & académicien sénégalais",
    category: "sagesse",
  },
  {
    text: "L'homme ne vaut que par la valeur de son âme.",
    author: "Cheikh Anta Diop",
    authorDescription: "Historien, anthropologue & physicien sénégalais",
    category: "sagesse",
  },
  {
    text: "Ce n'est pas l'œil qui voit, c'est l'esprit.",
    author: "Proverbe haoussa",
    authorDescription: "Sagesse ancestrale du peuple haoussa, Niger & Nigeria",
    category: "sagesse",
  },
  {
    text: "La rivière ignore-t-elle ses propres rives ?",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique sub-saharienne",
    category: "sagesse",
  },
  {
    text: "Quand deux éléphants se battent, c'est l'herbe qui souffre.",
    author: "Proverbe africain",
    authorDescription: "Proverbe répandu dans toute l'Afrique subsaharienne",
    category: "sagesse",
  },
  {
    text: "Le soleil ne refuse pas de briller sur un village parce qu'il est petit.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique de l'Est",
    category: "sagesse",
  },

  // ─── PROVERBE-CI ───────────────────────────────────────────
  {
    text: "Quand la musique change, la danse change aussi.",
    author: "Proverbe ivoirien",
    authorDescription: "Sagesse ancestrale de Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "On ne bat pas le tam-tam avec un seul doigt.",
    author: "Proverbe baoulé",
    authorDescription: "Sagesse ancestrale du peuple baoulé, Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "L'arbre ne grandit pas en un seul jour.",
    author: "Proverbe dioula",
    authorDescription: "Sagesse ancestrale du peuple dioula, Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "La forêt ne se plaint pas de ce que le vent y souffle.",
    author: "Proverbe bété",
    authorDescription: "Sagesse ancestrale du peuple bété, Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "Ce n'est pas la même chose de dire 'je viendrai' et de venir.",
    author: "Proverbe sénoufo",
    authorDescription: "Sagesse ancestrale du peuple sénoufo, nord de Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "La honte est pire que la mort.",
    author: "Proverbe malinké",
    authorDescription: "Sagesse ancestrale du peuple malinké, Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "Celui qui crache en l'air reçoit sa salive sur le visage.",
    author: "Proverbe ivoirien",
    authorDescription: "Proverbe populaire de Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "Le poisson ne sait pas qu'il est dans l'eau jusqu'à ce qu'il en sorte.",
    author: "Proverbe akan",
    authorDescription: "Sagesse ancestrale du peuple akan, Côte d'Ivoire & Ghana",
    category: "proverbe-ci",
  },
  {
    text: "La bouche qui mange ne parle pas.",
    author: "Proverbe ivoirien",
    authorDescription: "Sagesse populaire de Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "Un seul bracelet ne fait pas de bruit.",
    author: "Proverbe baoulé",
    authorDescription: "Sagesse ancestrale du peuple baoulé, Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "Le mensonge court vite, mais la vérité le rattrape.",
    author: "Proverbe guéré",
    authorDescription: "Sagesse ancestrale du peuple guéré, ouest de Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "Quand on ne sait pas où l'on va, qu'on regarde d'où l'on vient.",
    author: "Proverbe ivoirien",
    authorDescription: "Sagesse populaire répandue en Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "La case du chef ne brûle jamais par hasard.",
    author: "Proverbe abron",
    authorDescription: "Sagesse ancestrale du peuple abron, Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "L'enfant qui n'a pas été élevé par sa mère pleure la nuit.",
    author: "Proverbe agni",
    authorDescription: "Sagesse ancestrale du peuple agni, Côte d'Ivoire",
    category: "proverbe-ci",
  },
  {
    text: "Le lion ne se retourne pas quand un petit chien aboie.",
    author: "Proverbe dioula",
    authorDescription: "Sagesse ancestrale du peuple dioula, Côte d'Ivoire",
    category: "proverbe-ci",
  },

  // ─── MOTIVATION ────────────────────────────────────────────
  {
    text: "Tombe sept fois, lève-toi huit.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale du continent africain",
    category: "motivation",
  },
  {
    text: "Cela semble toujours impossible jusqu'à ce que ce soit fait.",
    author: "Nelson Mandela",
    authorDescription: "Avocat, militant & premier président noir d'Afrique du Sud",
    category: "motivation",
  },
  {
    text: "L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde.",
    author: "Nelson Mandela",
    authorDescription: "Avocat, militant & premier président noir d'Afrique du Sud",
    category: "motivation",
  },
  {
    text: "La lenteur n'est pas la paresse. C'est la sagesse du chemin.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique subsaharienne",
    category: "motivation",
  },
  {
    text: "Ose inventer l'avenir.",
    author: "Thomas Sankara",
    authorDescription: "Révolutionnaire, officier & président du Burkina Faso",
    category: "motivation",
  },
  {
    text: "On ne naît pas femme forte, on le devient.",
    author: "Wangari Maathai",
    authorDescription: "Militante écologiste kényane, Prix Nobel de la Paix 2004",
    category: "motivation",
  },
  {
    text: "La route est longue, mais elle ne résiste pas à ceux qui marchent.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale du continent africain",
    category: "motivation",
  },
  {
    text: "Le courage n'est pas l'absence de peur, mais la capacité de la surmonter.",
    author: "Nelson Mandela",
    authorDescription: "Avocat, militant & premier président noir d'Afrique du Sud",
    category: "motivation",
  },
  {
    text: "Une forêt naît d'une seule graine.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique de l'Ouest",
    category: "motivation",
  },
  {
    text: "Nous devons utiliser le temps sagement et réaliser que le temps est toujours mûr pour faire ce qui est juste.",
    author: "Nelson Mandela",
    authorDescription: "Avocat, militant & premier président noir d'Afrique du Sud",
    category: "motivation",
  },
  {
    text: "Celui qui pose des questions ne se perd jamais.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique de l'Ouest",
    category: "motivation",
  },
  {
    text: "Ne regarde pas là où tu es tombé, mais là où tu as glissé.",
    author: "Proverbe africain",
    authorDescription: "Proverbe répandu en Afrique subsaharienne",
    category: "motivation",
  },

  // ─── LEADERSHIP ────────────────────────────────────────────
  {
    text: "Si tu veux aller vite, marche seul. Si tu veux aller loin, marche ensemble.",
    author: "Proverbe africain",
    authorDescription: "Proverbe répandu dans toute l'Afrique subsaharienne",
    category: "leadership",
  },
  {
    text: "Un dirigeant est jugé par le bien-être de son peuple.",
    author: "Julius Nyerere",
    authorDescription: "Philosophe, enseignant & premier président de la Tanzanie",
    category: "leadership",
  },
  {
    text: "L'Afrique doit s'unir.",
    author: "Kwame Nkrumah",
    authorDescription: "Philosophe & premier président du Ghana, père du panafricanisme",
    category: "leadership",
  },
  {
    text: "Ce n'est pas parce que quelqu'un vous dit de faire quelque chose que vous devez le faire. Pensez par vous-même.",
    author: "Thomas Sankara",
    authorDescription: "Révolutionnaire, officier & président du Burkina Faso",
    category: "leadership",
  },
  {
    text: "Le dialogue est la meilleure arme contre la guerre.",
    author: "Félix Houphouët-Boigny",
    authorDescription: "Médecin, planteur & premier président de la Côte d'Ivoire",
    category: "leadership",
  },
  {
    text: "On ne construit pas une nation sans les femmes.",
    author: "Thomas Sankara",
    authorDescription: "Révolutionnaire, officier & président du Burkina Faso",
    category: "leadership",
  },
  {
    text: "Un chef n'est pas celui qui commande, mais celui qui sert.",
    author: "Proverbe africain",
    authorDescription: "Sagesse ancestrale d'Afrique subsaharienne",
    category: "leadership",
  },
  {
    text: "Soyez le changement que vous souhaitez voir dans le monde.",
    author: "Kofi Annan",
    authorDescription: "Diplomate ghanéen & Secrétaire général de l'ONU, Prix Nobel de la Paix 2001",
    category: "leadership",
  },
  {
    text: "Mieux vaut allumer une bougie que de maudire l'obscurité.",
    author: "Desmond Tutu",
    authorDescription: "Archevêque, théologien & militant anti-apartheid sud-africain",
    category: "leadership",
  },
  {
    text: "Lorsque vous prenez le pouvoir, vous devez l'exercer avec humilité.",
    author: "Julius Nyerere",
    authorDescription: "Philosophe, enseignant & premier président de la Tanzanie",
    category: "leadership",
  },
  {
    text: "Il ne suffit pas d'être élu pour avoir le droit de gouverner.",
    author: "Patrice Lumumba",
    authorDescription: "Militant nationaliste & premier ministre du Congo-Kinshasa",
    category: "leadership",
  },
  {
    text: "Nous préférons la liberté dans la pauvreté à l'opulence dans l'esclavage.",
    author: "Sékou Touré",
    authorDescription: "Syndicaliste & premier président de la Guinée",
    category: "leadership",
  },
  {
    text: "La vraie richesse d'une nation réside dans ses hommes et ses femmes.",
    author: "Julius Nyerere",
    authorDescription: "Philosophe, enseignant & premier président de la Tanzanie",
    category: "leadership",
  },
];

async function main() {
  console.log('🌱 Seeding database with African citations...');

  await prisma.citation.deleteMany();

  const result = await prisma.citation.createMany({
    data: citations,
  });

  console.log(`✅ ${result.count} citations inserted successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

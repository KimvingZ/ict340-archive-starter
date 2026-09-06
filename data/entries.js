// ============================================================
//  ENTRIES — Khmer Traditional Games
//
//  READ THIS BEFORE YOU SUBMIT
//  The games below are real and the Khmer names are real. What is
//  NOT here is a real person. No contributor has been interviewed
//  yet, so `contributor` is null on every entry and `source` says
//  so out loud. Do not fill those nulls with a plausible-sounding
//  name. Fill them with someone you actually sat down with, and
//  put the village or district you sat down in into `place`.
//
//  ENTRY SHAPE — decide changes here, in week 3, not in week 10:
//    id           string       stable slug, used as the React key
//    title        string       romanised name
//    khmerTitle   string       Khmer script name — never transliterate this away
//    description  string       what the game is, and why it is worth keeping
//    howToPlay    string       the rules, as you would explain them to a child
//    players      string       how many people it takes
//    materials    string       what you need to play it
//    occasion     string       when it is played
//    place        string       where THIS telling comes from
//    contributor  string|null  who told it to you. null = nobody yet.
//    source       string       provenance of this entry, in plain words
// ============================================================

const NOT_YET_SOURCED = "Commonly known game — no contributor interviewed yet";

const entries = [
  {
    id: "chol-chhoung",
    title: "Chol Chhoung",
    khmerTitle: "ចោលឈូង",
    description:
      "A New Year throwing game played between two lines, one of young men and one of young women, on the open ground in front of a pagoda or a house. The chhoung itself is nothing but a krama (ក្រមា) rolled up and knotted tight into a ball, which is rather the point: the game costs nothing and needs nothing anybody has to buy.",
    howToPlay:
      "The two lines stand about ten metres apart. One side throws the chhoung across; if someone opposite catches it, they throw it straight back. If it hits the ground, the side that missed has lost the round and has to sing and dance in front of the other line before play restarts. Rounds go on for as long as people are willing to be laughed at.",
    players: "Two lines, usually 10–20 people each",
    materials: "One krama, rolled and knotted into a ball",
    occasion: "Khmer New Year (បុណ្យចូលឆ្នាំថ្មី)",
    place: "Played nationwide",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
  {
    id: "bos-angkunh",
    title: "Bos Angkunh",
    khmerTitle: "បោះអង្គុញ",
    description:
      "A New Year throwing game played with angkunh — the big flat brown seeds of a forest vine, heavy enough to knock another seed flat and hard enough to sting. Losing has a price: the winning side taps the losers' knees with the seeds, a forfeit called thveu bay (ធ្វើបាយ), \"cooking rice\".",
    howToPlay:
      "Two teams. Each side stands its angkunh seeds upright on the ground as targets. Players take turns throwing their own seed from a line to knock the opponents' seeds down. In most versions the throw gets harder as the rounds go on — first from the hand, then with the seed balanced on the elbow, the knee, the shoulder. The team that fails takes thveu bay on the knees.",
    players: "Two teams, 3–10 players each",
    materials: "Angkunh seeds (អង្គុញ), a few per player",
    occasion: "Khmer New Year",
    place: "Played nationwide",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
  {
    id: "leak-kanseng",
    title: "Leak Kanseng",
    khmerTitle: "លាក់កន្សែង",
    description:
      "\"Hide the scarf\" — a circle game for children that runs on nerves rather than strength. Everyone sits facing inward and sings while one player walks the outside of the circle with a twisted krama held behind their back, deciding who to drop it on.",
    howToPlay:
      "Players sit in a circle and sing. One walks around the outside holding a knotted krama and quietly drops it behind somebody's back. If that player notices, they snatch it up and chase the dropper around the circle, swatting at them until the dropper reaches the empty place and sits down. If they do not notice before the dropper comes all the way round, they take the swats instead — and become the next one to walk.",
    players: "6 or more, any age",
    materials: "One krama, twisted into a rope",
    occasion: "Any time — schoolyards, family gatherings, New Year",
    place: "Played nationwide",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
  {
    id: "teanh-prot",
    title: "Teanh Prot",
    khmerTitle: "ទាញព្រ័ត្រ",
    description:
      "Tug of war, but not only sport. In many villages it is pulled at Khmer New Year and at pagoda festivals as a rain and harvest rite, the two sides standing for forces that have to be made to pull against each other before the rains will come. The rope is the ritual; who wins is secondary.",
    howToPlay:
      "Two teams take opposite ends of a long rope with a marker tied at the centre. On the call, both sides pull; the team that drags the marker past their own line takes the pull. Matches are usually best of three, and in the ceremonial version the sides are fixed by village, by sex, or by age group rather than by who is strongest.",
    players: "Two teams, 5–20 or more a side",
    materials: "One long rope, and something to mark the centre",
    occasion: "Khmer New Year and pagoda festivals",
    place: "Played nationwide, strongest in village and pagoda settings",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
  {
    id: "bay-khom",
    title: "Bay Khom",
    khmerTitle: "បាយខុម",
    description:
      "A two-player counting game of the mancala family, played on a carved wooden board or, just as often, on holes scooped straight into the dirt. It is a quiet game — two people, a handful of seeds, no noise except counting — which is why it survives in corners the loud New Year games never reach.",
    howToPlay:
      "The board has two rows of small holes facing each other and one larger hole at each end belonging to a player. Each small hole starts with the same number of seeds. On your turn you lift every seed out of one of your holes and drop them one at a time into the holes that follow, going round the board, into your own end hole but never your opponent's. Capture and ending rules vary from family to family; play stops when one side can no longer move, and the seeds are counted.",
    players: "Two",
    materials: "A board, or holes in the ground, plus seeds, pebbles, or marbles",
    occasion: "Any time",
    place: "Played nationwide",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
  {
    id: "klah-klok",
    title: "Klah Klok",
    khmerTitle: "ខ្លាឃ្លោក",
    description:
      "\"Tiger–gourd\", the betting game that appears on a mat at every festival ground. A cloth is painted with six pictures — tiger, gourd, fish, shrimp, crab, chicken — and three dice carry the same six faces. It sits on the line between a game and gambling, and how much it is played for depends entirely on who has sat down.",
    howToPlay:
      "The dealer spreads the cloth and players put their stakes on the pictures they choose. Three dice are shaken under a bowl or a basket, then uncovered. Anyone who backed a picture is paid once for every die showing it; stakes on pictures that did not come up go to the dealer.",
    players: "One dealer and any number of players",
    materials:
      "A painted cloth, three picture dice, a bowl to shake them under, small stakes",
    occasion: "Khmer New Year and pagoda festivals",
    place: "Festival grounds nationwide",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
  {
    id: "chab-kon-kleng",
    title: "Chab Kon Kleng",
    khmerTitle: "ចាប់កូនខ្លែង",
    description:
      "\"Catching the kite's chicks\" — a chasing game in which one child is a kite (ខ្លែង), one is the mother hen, and everyone else is a chick strung out in a line behind her, each holding the waist of the one in front. The whole game is the line trying not to break.",
    howToPlay:
      "The kite and the hen trade a set of spoken lines first — the kite says it is hungry and has come for a chick, the hen refuses it. Then the kite goes for the chicks. The hen spreads her arms to block and the line swings behind her to stay clear. Any chick pulled off the end, or any chick who lets go, is caught and stands out. Play runs until the kite has taken them all.",
    players: "5 or more children",
    materials: "None",
    occasion: "Any time — schoolyards and village lanes",
    place: "Played nationwide",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
  {
    id: "sey",
    title: "Sey",
    khmerTitle: "សី",
    description:
      "Kick shuttlecock — the one game on this list you can still find being played on an ordinary weekday evening, in a car park or on a pavement, by whoever happens to be standing around. The sey is a small weighted base with feathers or plastic strips set into the top, and it is kept up with the inside of the foot.",
    howToPlay:
      "Players stand in a loose circle and keep the sey in the air with the inside of the foot, the heel, the knee, the shoulder — anything except the hands. The street version has no formal scoring: the group counts how many kicks it can string together before the sey touches the ground, then starts again. A competitive version over a net is also played.",
    players: "2 or more, best with 4–6",
    materials:
      "One sey (សី) — feathers or plastic strips set into a small weighted base",
    occasion: "Any time, year round",
    place: "Streets, parks, and school grounds nationwide",
    contributor: null,
    source: NOT_YET_SOURCED,
  },
];

export default entries;

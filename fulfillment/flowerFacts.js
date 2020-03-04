'use strict';
const {
    dialogflow,
    Suggestions,
    BasicCard,
    Image,
    Table,
    Carousel,
} = require('actions-on-google');

const f_photosynthesis = [
    "Some facts about flowers are that flowers get their food from sunlight, water, and minerals in the soil; flowers are the reproductive parts of a plant, and plants make their own food by photosynthesis.",
    "Plants can photosynthesize due to cells called chloroplasts that contain chlorophyll; this is what makes plants green. Sun strikes the chloroplasts and combines with carbon dioxide that plants get from their leaves, and water that plants get through their roots, to produce sugar, or glucose. This is the plant's food, and this gives the plant energy to grow and produce flowers.",
    "Plants take in carbon dioxide, or CO 2 ,through little holes in their leaves, which are called stomata. They then produce and release oxygen through the stomata. Plants and animals were meant to live together! Animals need the oxygen that plants put out, and plants need the carbon dioxide that animals put out.",
    "Sometimes people add fertilizer, or plant food, to give plants extra minerals and nutrients so that they can grow better. Fertilizer does not take the place of sunlight and water.",
    "Without sunlight and water, plants will die.",
]

const f_partsOfFlower = [
    "The outside of a flower that can be seen easily consists of petals, the colored part of the flower, and the sepals, the small green structures that look like little petals at the base of the flower.",
    "Inside a flower is the pistil, or the female parts of the flower. The pistil looks like a vase with a long neck. The top of this \"vase\" is called the stigma. The long neck is called the style. The bottom, fatter part of the vase is the ovary and contains the ovules, or eggs.",
    "Also inside the flower are the male parts of the flower, called the stamens. The stamen consists of the anther and the filament. The filament looks like a stiff, standing piece of string. On top of the filament is a rounded ball of pollen called the anther. The pollen is usually a bright yellow or orange color.",
    "Pollinators like bees, animals, and birds come and gather pollen from the flowers. The pollen sticks to their bodies. When they go to visit another flower to gather more pollen, the pollen from the previous flower drops into the pistil of the new flower, fertilizes the eggs inside the ovary, and seeds are made.",
]

const f_facts = [
    "Flowers did not always exist; they first appeared 140 million years ago. Before that, ferns and cone bearing trees dominated the earth.",
    "Several centuries ago in Holland, tulips were more valuable than gold.",
    "Broccoli is actually a flower.",
    "Some plants such as orchids do not need soil to grow-they get all of their nutrients from the air.",
    "Some plants produce toxic substances that kill other plants around them-the sunflower is an example.",
    "Carnivorous plants are flowering plants that eat bugs and small animals! For example, the Venus fly trap has leaves covered by little hairs. When a bug lands on the hairs, the trap snaps shut and digestive juices digest the bug. Other carnivorous plants such as pitcher plants have leaves that form pitchers that are full of digestive fluids. Insects, frogs, and other small creatures are attracted to the nectar and bright colors on the pitchers and flowers. Some unfortunate critters fall in, drown, and are digested.",
]

const f_weirdFlowers = [
    "Not all flowers smell good. One of the world's rarest, largest, smelliest, and strangest looking flower is the titan arum, or the corpse flower. It is called the corpse flower because it smells like a rotting dead body. The bloom is over 8 foot tall and 12 feet in circumference. They smell like rotting flesh in order to attract flies, their preferred pollinator. People have been known to pass out from the smell!",
    "The largest Flower in the world is the flower of the Puya raimondii, which has a flower stalk 35,000 feet tall and bears over 8,000 white flowers.",
    "Mimosa punica, or sensitive plant, will actually fold up its leaves when it is touched. It has whitish pink fuzzy flowers that look like little pom poms.",
    "The Bird of Paradise is a beautiful, oddly shaped plant that resembles a colorful tropical bird.",
    "Corkscrew vine flower, Vigna Caracalla, has a flower shaped like nautilus shells.",
]

const f_funActivities = [
    "Snap Dragon flowers look like little mouths. If you squeeze the sides of the flower, the mouth will open and it can \"eat\" things. When you release the sides of the flower, it will close again.",
    "Lunaria, or money plant, has purple flowers that turn into silver papery quarter shaped seedpods that can be used like play money or jewelry.",
    "False dragonhead or obedient plant has a spike full of flowers that can be bent into position.",
    "Hollyhocks are fun flowers for kids. They have large beautiful flowers that can be made into dolls. Cut off a flower, bud and all for the body and skirt and then choose a bud for the head. Attach it with a toothpick. Draw a face with markers.",
    "Press and dry flowers and make crafts. Pick flowers that can be flattened, like violets and put them between the pages of very heavy books. The pressed flowers can be made into placemats, jewelry, and other crafts.",
    "One of the fun facts about flowers is that some flowers can be eaten! Flowers of the squash flowers, such as pumpkin blossoms, can be fried in a batter and eaten. Violas, nasturtiums, pansies, and violets can be candied or frozen into ice cubes. Dandelion flowers can be made into jellies, added to salads, or made into tea. Before you eat any flower, make sure an adult has said it is safe. Some plants are poisonous or have been sprayed with poisonous pesticides.",
    "Make a daisy chain of flowers by picking flowers with long stems, making a slit in the stem, and pulling the stem of the second stem through until the flower head can't be pulled through. Continue this to make a chain which can be made into jewelry or garlands.",
]

var allFacts = [
    f_facts, f_funActivities, f_partsOfFlower, f_photosynthesis, f_weirdFlowers
]


const app = dialogflow({
    clientId: '1056163294496-8cducrn97mtok2vrqoku9eqrs24emnve.apps.googleusercontent.com',
});

app.intent('Default Welcome Intent', (conv) => {
    conv.ask(" To most humans, flowers are seen as objects to decorate homes, gardens, bodies, and more. " +
    "However, flowers have a much more important purpose than decorating. " +
    "The facts about flowers are that without them, we would not have food, medicines, dyes, textiles, and other necessities of daily living. " +
    "There are so many interesting facts about flowers, do you want more?");
    conv.ask(new Suggestions(["More!", "Exit"]))
});

app.intent('giveFact', (conv) => {
    conv.ask(giveRandomFromAllFacts() + " Do you want more?");
    conv.ask(new Suggestions(["More!", "Exit"]))
});

function giveRandomFromAllFacts(){
    var category = allFacts[Math.floor(Math.random() * allFacts.length)];

    return category[Math.floor(Math.random() * category.length)];
}




module.exports = {
    app: app
}
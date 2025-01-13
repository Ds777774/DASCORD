const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require('discord.js');
const express = require('express');

// Use environment variable for the bot token
const TOKEN = process.env.DISCORD_TOKEN;

if (!TOKEN) {
  console.error('Error: DISCORD_TOKEN environment variable is not set.');
  process.exit(1); // Exit the app if the token is missing
}

// Create a new client instance with correct intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

// Express server setup to keep the bot alive
const app = express();
app.get('/', (req, res) => {
  res.send('Bot is running!');
});

// Start Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// List of 20 German words and their meanings
const words = [
  { word: 'Apfel', meaning: 'Apple', options: ['A: Apple', 'B: House', 'C: Dog', 'D: Cat'], correct: '🇦' },
  { word: 'Haus', meaning: 'House', options: ['A: Apple', 'B: House', 'C: Dog', 'D: Cat'], correct: '🇧' },
  { word: 'Katze', meaning: 'Cat', options: ['A: Apple', 'B: House', 'C: Cat', 'D: Dog'], correct: '🇨' },
  { word: 'Hund', meaning: 'Dog', options: ['A: Dog', 'B: Cat', 'C: Apple', 'D: House'], correct: '🇦' },
  { word: 'Buch', meaning: 'Book', options: ['A: Book', 'B: Table', 'C: Chair', 'D: Pen'], correct: '🇦' },
  { word: 'Tisch', meaning: 'Table', options: ['A: Book', 'B: Table', 'C: Chair', 'D: Bed'], correct: '🇧' },
  { word: 'Stuhl', meaning: 'Chair', options: ['A: Table', 'B: Bed', 'C: Chair', 'D: Window'], correct: '🇨' },
  { word: 'Fenster', meaning: 'Window', options: ['A: Door', 'B: Table', 'C: Chair', 'D: Window'], correct: '🇩' },
  { word: 'Tür', meaning: 'Door', options: ['A: Door', 'B: Table', 'C: Chair', 'D: Window'], correct: '🇦' },
  { word: 'Schule', meaning: 'School', options: ['A: School', 'B: Office', 'C: University', 'D: Library'], correct: '🇦' },
  { word: 'Auto', meaning: 'Car', options: ['A: Bicycle', 'B: Car', 'C: Train', 'D: Bus'], correct: '🇧' },
  { word: 'Zug', meaning: 'Train', options: ['A: Train', 'B: Bus', 'C: Car', 'D: Bicycle'], correct: '🇦' },
  { word: 'Fahrrad', meaning: 'Bicycle', options: ['A: Train', 'B: Bus', 'C: Bicycle', 'D: Car'], correct: '🇨' },
  { word: 'Bus', meaning: 'Bus', options: ['A: Car', 'B: Train', 'C: Bicycle', 'D: Bus'], correct: '🇩' },
  { word: 'Straße', meaning: 'Street', options: ['A: Street', 'B: Road', 'C: Path', 'D: Alley'], correct: '🇦' },
  { word: 'Brücke', meaning: 'Bridge', options: ['A: Tunnel', 'B: Bridge', 'C: Highway', 'D: Path'], correct: '🇧' },
  { word: 'Fluss', meaning: 'River', options: ['A: Lake', 'B: Ocean', 'C: River', 'D: Pond'], correct: '🇨' },
  { word: 'Berg', meaning: 'Mountain', options: ['A: Valley', 'B: Mountain', 'C: Hill', 'D: Peak'], correct: '🇧' },
  { word: 'See', meaning: 'Lake', options: ['A: Lake', 'B: River', 'C: Ocean', 'D: Pond'], correct: '🇦' },
  { word: 'Meer', meaning: 'Ocean', options: ['A: River', 'B: Ocean', 'C: Lake', 'D: Pond'], correct: '🇧' },
  { word: 'Baum', meaning: 'Tree', options: ['A: Tree', 'B: Grass', 'C: Bush', 'D: Flower'], correct: '🇦' },
  { word: 'Blume', meaning: 'Flower', options: ['A: Grass', 'B: Flower', 'C: Tree', 'D: Bush'], correct: '🇧' },
  { word: 'Gras', meaning: 'Grass', options: ['A: Tree', 'B: Bush', 'C: Grass', 'D: Flower'], correct: '🇨' },
  { word: 'Busch', meaning: 'Bush', options: ['A: Flower', 'B: Grass', 'C: Bush', 'D: Tree'], correct: '🇨' },
  { word: 'Sonne', meaning: 'Sun', options: ['A: Moon', 'B: Star', 'C: Sun', 'D: Planet'], correct: '🇩' },
  { word: 'Mond', meaning: 'Moon', options: ['A: Moon', 'B: Sun', 'C: Planet', 'D: Star'], correct: '🇦' },
  { word: 'Stern', meaning: 'Star', options: ['A: Planet', 'B: Star', 'C: Moon', 'D: Sun'], correct: '🇧' },
  { word: 'Planet', meaning: 'Planet', options: ['A: Star', 'B: Moon', 'C: Planet', 'D: Sun'], correct: '🇨' },
  { word: 'Tasche', meaning: 'Bag', options: ['A: Bag', 'B: Box', 'C: Case', 'D: Pocket'], correct: '🇦' },
  { word: 'Koffer', meaning: 'Suitcase', options: ['A: Bag', 'B: Suitcase', 'C: Box', 'D: Backpack'], correct: '🇧' },
  { word: 'Rucksack', meaning: 'Backpack', options: ['A: Bag', 'B: Suitcase', 'C: Backpack', 'D: Case'], correct: '🇨' },
  { word: 'Schrank', meaning: 'Cupboard', options: ['A: Cupboard', 'B: Wardrobe', 'C: Drawer', 'D: Shelf'], correct: '🇦' },
  { word: 'Regal', meaning: 'Shelf', options: ['A: Shelf', 'B: Drawer', 'C: Cupboard', 'D: Table'], correct: '🇦' },
  { word: 'Schublade', meaning: 'Drawer', options: ['A: Shelf', 'B: Drawer', 'C: Cupboard', 'D: Wardrobe'], correct: '🇧' },
  { word: 'Küche', meaning: 'Kitchen', options: ['A: Kitchen', 'B: Bedroom', 'C: Bathroom', 'D: Living Room'], correct: '🇦' },
  { word: 'Bad', meaning: 'Bathroom', options: ['A: Kitchen', 'B: Bathroom', 'C: Living Room', 'D: Bedroom'], correct: '🇧' },
  { word: 'Schlafzimmer', meaning: 'Bedroom', options: ['A: Living Room', 'B: Kitchen', 'C: Bedroom', 'D: Bathroom'], correct: '🇨' },
  { word: 'Wohnzimmer', meaning: 'Living Room', options: ['A: Kitchen', 'B: Bathroom', 'C: Living Room', 'D: Bedroom'], correct: '🇨' },
  { word: 'Apfelbaum', meaning: 'Apple tree', options: ['A: Pear tree', 'B: Apple tree', 'C: Cherry tree', 'D: Pine tree'], correct: '🇧' },
  { word: 'Eichhörnchen', meaning: 'Squirrel', options: ['A: Dog', 'B: Cat', 'C: Rabbit', 'D: Squirrel'], correct: '🇩' },
  { word: 'Himmel', meaning: 'Sky', options: ['A: Ground', 'B: Cloud', 'C: Sky', 'D: Ocean'], correct: '🇩' },
  { word: 'Wald', meaning: 'Forest', options: ['A: Desert', 'B: Forest', 'C: Meadow', 'D: Sea'], correct: '🇧' },
  { word: 'Baumhaus', meaning: 'Treehouse', options: ['A: Treehouse', 'B: Hut', 'C: Tent', 'D: Cabin'], correct: '🇦' },
  { word: 'Löffel', meaning: 'Spoon', options: ['A: Fork', 'B: Knife', 'C: Spoon', 'D: Plate'], correct: '🇩' },
  { word: 'Gabel', meaning: 'Fork', options: ['A: Spoon', 'B: Plate', 'C: Fork', 'D: Knife'], correct: '🇩' },
  { word: 'Messer', meaning: 'Knife', options: ['A: Knife', 'B: Spoon', 'C: Fork', 'D: Plate'], correct: '🇦' },
  { word: 'Teller', meaning: 'Plate', options: ['A: Fork', 'B: Spoon', 'C: Knife', 'D: Plate'], correct: '🇩' },
  { word: 'Stuhlgang', meaning: 'Bowel movement', options: ['A: Cough', 'B: Stomachache', 'C: Bowel movement', 'D: Headache'], correct: '🇩' },
  { word: 'Hose', meaning: 'Pants', options: ['A: Shirt', 'B: Pants', 'C: Shoes', 'D: Hat'], correct: '🇧' },
  { word: 'Jacke', meaning: 'Jacket', options: ['A: Shirt', 'B: Jacket', 'C: Pants', 'D: Sweater'], correct: '🇧' },
  { word: 'Pullover', meaning: 'Sweater', options: ['A: Pants', 'B: Jacket', 'C: Sweater', 'D: Scarf'], correct: '🇩' },
  { word: 'Schuhe', meaning: 'Shoes', options: ['A: Hat', 'B: Shoes', 'C: Pants', 'D: Socks'], correct: '🇧' },
  { word: 'Socken', meaning: 'Socks', options: ['A: Pants', 'B: Hat', 'C: Shoes', 'D: Socks'], correct: '🇩' },
  { word: 'Brille', meaning: 'Glasses', options: ['A: Hat', 'B: Glasses', 'C: Jacket', 'D: Sweater'], correct: '🇧' },
  { word: 'Mütze', meaning: 'Cap', options: ['A: Gloves', 'B: Shoes', 'C: Cap', 'D: Jacket'], correct: '🇩' },
  { word: 'Handschuh', meaning: 'Glove', options: ['A: Socks', 'B: Shoes', 'C: Gloves', 'D: Hat'], correct: '🇨' },
  { word: 'Regenschirm', meaning: 'Umbrella', options: ['A: Hat', 'B: Umbrella', 'C: Jacket', 'D: Shoes'], correct: '🇧' },
  { word: 'Kopf', meaning: 'Head', options: ['A: Arm', 'B: Leg', 'C: Head', 'D: Foot'], correct: '🇩' },
  { word: 'Arm', meaning: 'Arm', options: ['A: Hand', 'B: Arm', 'C: Foot', 'D: Head'], correct: '🇧' },
  { word: 'Bein', meaning: 'Leg', options: ['A: Foot', 'B: Leg',
];

// Shuffle the questions
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Quiz management variables
let quizInProgress = false;
let score = 0;
let incorrectResults = []; // Store incorrect answers

// Function to send a quiz message
const sendQuizMessage = async (channel, question, options) => {
  const embed = new EmbedBuilder()
    .setTitle('**German Vocabulary Quiz**')
    .setDescription(question)
    .addFields(options.map((opt, index) => ({ name: opt, value: '\u200B', inline: true })))
    .setColor('#0099ff')
    .setFooter({ text: 'React with the emoji corresponding to your answer' });

  const quizMessage = await channel.send({ embeds: [embed] });

  for (const option of ['🇦', '🇧', '🇨', '🇩']) {
    await quizMessage.react(option);
  }

  return quizMessage;
};

// Event listener when the bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Event listener for messages
client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === '!quiz') {
    if (quizInProgress) {
      return message.reply('A quiz is already in progress. Please wait until it finishes.');
    }

    quizInProgress = true;
    score = 0;
    incorrectResults = []; // Reset the incorrect results

    // Shuffle questions and select the first 5
    shuffleArray(words);
    const selectedWords = words.slice(0, 5);

    for (let i = 0; i < selectedWords.length; i++) {
      const currentWord = selectedWords[i];
      const question = `What is the English meaning of the German word "${currentWord.word}"?`;

      const quizMessage = await sendQuizMessage(message.channel, question, currentWord.options);

      const filter = (reaction, user) =>
        ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name) && !user.bot;

      try {
        const collected = await quizMessage.awaitReactions({ filter, max: 1, time: 15000 });
        const reaction = collected.first();

        const isCorrect = reaction?.emoji.name === currentWord.correct;
        if (isCorrect) {
          score++;
        } else {
          // Store the incorrect answer with the correct word
          incorrectResults.push({
            word: currentWord.word,
            options: currentWord.options,
            userAnswer: reaction ? reaction.emoji.name : 'No reaction',
            correct: currentWord.correct
          });
        }
      } catch (error) {
        console.error('Reaction collection failed:', error);
      }

      await quizMessage.delete();
    }

    quizInProgress = false;

    // Send results with only incorrect answers and correct answers
    const resultEmbed = new EmbedBuilder()
      .setTitle('Quiz Results')
      .setDescription(`You scored ${score} out of 5!`)
      .setColor('#00FF00');

    let resultsDetail = '';

    // Show correct answers if chosen correctly
    selectedWords.forEach((word) => {
      const isIncorrect = incorrectResults.some(result => result.word === word.word);
      if (!isIncorrect) {
        resultsDetail += `**Correct Answer:**\n` +
        `German word: "${word.word}"\n` +
        `Options: ${word.options.join(', ')}\n\n`;
      }
    });

    // Show incorrect answers with their correct word
    incorrectResults.forEach((result) => {
      resultsDetail += `**Incorrect Answer:**\n` +
      `German word: "${result.word}"\n` +
      `Your answer: ${result.userAnswer}\n` +
      `Correct answer: ${result.correct}\n` +
      `Options: ${result.options.join(', ')}\n\n`;
    });

    resultEmbed.addFields({ name: 'Detailed Results', value: resultsDetail });

    await message.channel.send({ embeds: [resultEmbed] });
  }
});

// Log in to Discord with the app's token
client.login(TOKEN);


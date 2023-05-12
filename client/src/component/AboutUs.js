import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const CARD_VALUES = [
  "🐶",
  "🐱",
  "🐻",
  "🦁",
  "🐵",
  "🦄",
  "🐘",
  "🐊",
  "🐍",
  "🦈",
  "🐠",
  "🐙",
];
const CARD_PAIRS = CARD_VALUES.length;

const AboutUs = () => {
  const [cards, setCards] = useState(shuffle([...CARD_VALUES, ...CARD_VALUES]));
  const [selectedCards, setSelectedCards] = useState([]);
  const [message, setMessage] = useState("Click on a card to start the game!");

  const handleCardClick = (cardIndex) => {
    const card = cards[cardIndex];
    if (selectedCards.includes(cardIndex)) {
      setMessage("You already clicked on this card!");
    } else if (selectedCards.length === 1) {
      setSelectedCards([...selectedCards, cardIndex]);
      if (cards[selectedCards[0]] === card) {
        setMessage("You found a pair!");
      } else {
        setTimeout(() => {
          setSelectedCards([]);
          setMessage("No match! Try again.");
        }, 1000);
      }
    } else {
      setSelectedCards([cardIndex]);
      setMessage("");
    }
  };

  const handleReset = () => {
    setCards(shuffle([...CARD_VALUES, ...CARD_VALUES]));
    setSelectedCards([]);
    setMessage("Click on a card to start the game!");
  };

  return (
    <Box py={4} textAlign="center">
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Memory Game
      </Text>
      <Box mb={4}>
        {cards.map((card, index) => (
          <Button
            key={index}
            mx={2}
            my={1}
            size="lg"
            colorScheme={selectedCards.includes(index) ? "pink" : "gray"}
            onClick={() => handleCardClick(index)}
            disabled={selectedCards.includes(index)}
          >
            {selectedCards.includes(index) ||
            message === "Click on a card to start the game!"
              ? card
              : "❓"}
          </Button>
        ))}
      </Box>
      {message && (
        <Box mb={4}>
          <Text fontSize="2xl" mb={2}>
            {message}
          </Text>
        </Box>
      )}
      {selectedCards.length === CARD_PAIRS && (
        <Box mt={4}>
          <Button size="lg" colorScheme="green" onClick={handleReset}>
            Play Again
          </Button>
        </Box>
      )}
    </Box>
  );
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default AboutUs;

import { useState } from "react";
import { Button, Grid, GridItem, Text, Box } from "@chakra-ui/react";

const PageNotFound = () => {
  const [cards, setCards] = useState([
    { id: 1, value: "🐶", flipped: false },
    { id: 2, value: "🐱", flipped: false },
    { id: 3, value: "🐭", flipped: false },
    { id: 4, value: "🐰", flipped: false },
    { id: 5, value: "🦊", flipped: false },
    { id: 6, value: "🐻", flipped: false },
    { id: 7, value: "🐼", flipped: false },
    { id: 8, value: "🐨", flipped: false },
  ]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [message, setMessage] = useState("");

  const handleCardClick = (id) => {
    if (flippedCards.length === 2) {
      return;
    }

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [card1, card2] = newFlippedCards;
      const matched =
        cards.find((card) => card.id === card1).value ===
        cards.find((card) => card.id === card2).value;
      if (matched) {
        setMatchedCards([...matchedCards, card1, card2]);
        setMessage("You found a match!");
      } else {
        setMessage("Try again...");
      }
      setFlippedCards([]);
      setTurns(turns + 1);
    }
  };

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={2}>
      {cards.map((card) => (
        <GridItem key={card.id}>
          <Box
            w={20}
            h={20}
            borderWidth={1}
            borderRadius={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="4xl"
            cursor="pointer"
            onClick={() =>
              !matchedCards.includes(card.id) && handleCardClick(card.id)
            }
            bg={
              matchedCards.includes(card.id)
                ? "gray.400"
                : card.flipped
                ? "white"
                : "gray.100"
            }
          >
            {matchedCards.includes(card.id) || card.flipped ? card.value : "❓"}
          </Box>
        </GridItem>
      ))}
      <GridItem colSpan={4}>
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          {message}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          Turns: {turns}
        </Text>
        <Button colorScheme="blue" onClick={() => window.location.reload()}>
          Play Again
        </Button>
      </GridItem>
    </Grid>
  );
};

export default PageNotFound;

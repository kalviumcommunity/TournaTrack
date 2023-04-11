import { useState } from "react";
import {
  Button,
  Container,
  Heading,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

function Sechdule() {
  const [teams, setTeams] = useState([
    "Team A",
    "Team B",
    "Team C",
    "Team D",
    "Team E",
    "Team F",
  ]);
  const [matches, setMatches] = useState([]);
  const [matchIndex, setMatchIndex] = useState(0);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  function handleAddMatch() {
    if (!team1 || !team2 || team1 === team2) {
      alert("Please select two different teams.");
      return;
    }

    const matchExists = matches.some(
      (match) => match.team1 === team1 && match.team2 === team2
    );
    if (matchExists) {
      alert("Match already exists.");
      return;
    }

    const newMatch = {
      team1,
      team2,
    };
    setMatches([...matches, newMatch]);
    setTeam1("");
    setTeam2("");
  }

  function handlePrevMatch() {
    if (matchIndex > 0) {
      setMatchIndex(matchIndex - 1);
    } else {
      alert("No more previous matches!");
    }
  }

  function handleNextMatch() {
    if (matchIndex < matches.length - 1) {
      setMatchIndex(matchIndex + 1);
    } else {
      alert("No more matches!");
    }
  }

  function handleResetMatches() {
    setMatches([]);
    setMatchIndex(0);
  }

  const availableTeams = teams.filter((team) => {
    return !matches.some((match) => match.team1 === team || match.team2 === team);
  });

  return (
    <Container maxW="xl" centerContent>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Sports Match Scheduler
        </Heading>
        <Stack direction="row" spacing={4}>
          <Select
            placeholder="Select Team 1"
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
          >
            {availableTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </Select>
          <Select
            placeholder="Select Team 2"
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
          >
            {availableTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </Select>
          <Button onClick={handleAddMatch}>Add Match</Button>
        </Stack>
        <VStack>
          {matches.map((match, index) => (
            <Text key={`${match.team1}-${match.team2}`}>
              {index + 1}. {match.team1} vs {match.team2}
            </Text>
          ))}
        </VStack>
        {matches.length > 0 && (
          <>
            <Text>
              Current Match: {matchIndex + 1} of {matches.length}
            </Text>
            <Text>
              {matches[matchIndex].team1} vs {matches[matchIndex].team2}
            </Text>
            <Stack direction="row" spacing={4}>
              <Button onClick={handlePrevMatch}>Previous Match</Button>

              <Button onClick={handleResetMatches}>Reset</Button>
              <Button onClick={handleNextMatch}>Next Match</Button>
            </Stack>
          </>
        )}
      </VStack>
    </Container>
  );
}

export default Sechdule;

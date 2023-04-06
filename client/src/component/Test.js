import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";

function Test() {
  const [rules, setRules] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRule = event.target.rule.value;
    if (newRule.trim() !== "") {
      setRules([...rules, newRule]);
      event.target.reset();
    }
  };

  return (
    <Box m={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel textAlign={'center'}>Enter a rules and other details</FormLabel>
          <Input maxW="40vh" type="text" name="rule" placeholder="Type your rule here"  wid/>
        </FormControl>
        <Button type="submit" mt={2}>
          Add rule
        </Button>
      </form>
      <List mt={4}>
        {rules.map((rule, index) => (
          <ListItem key={index}>{rule}</ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Test;

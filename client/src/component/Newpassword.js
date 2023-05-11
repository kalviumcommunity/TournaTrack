import React, { useState } from "react";
import { Box, Input, Button, Text, FormControl } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import "../component/css/Reset.css";
const Newpassword = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const { id, token } = useParams();
  const PostData = async (e) => {
    if (password !== cpassword) {
      toast.error("both password should match");
      return;
    }
    const res = await fetch(
      `${process.env.REACT_APP_API}/newpassword/${id}/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          cpassword,
        }),
      }
    );
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };
  return (
    <>
      <Box
        className="reset-div"
        bgGradient="linear(to-b, #00ff75, #3700ff)"
        transition="all .3s"
        sx={{
          "&:hover": {
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.30)",
          },
        }}
      >
        <Box
          border-radius="0"
          transition="all .2s"
          sx={{
            "&:hover": {
              transform: "scale(0.98)",
              borderRadius: "20px",
            },
          }}
        >
          {/* Your form elements here */}
          <FormControl
            direction="column"
            spacing={10}
            pl="2em"
            pr="2em"
            pb="0.4em"
            bg="#171717"
            borderRadius="20px"
          >
            <Text
              text-alig="center"
              margin="2em"
              color="rgb(0, 255, 200)"
              font-size="1.2em"
            >
              Reset Password
            </Text>
            <Input
              background="none"
              border="none"
              outline="none"
              width="100%"
              color="rgb(0, 255, 200)"
              className="reset-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
            <Input
              background="none"
              border="none"
              outline="none"
              width="100%"
              color="rgb(0, 255, 200)"
              className="reset-input"
              type="password"
              onChange={(e) => setcpassword(e.target.value)}
              placeholder="Confirm password"
            />
            <Button
              margin-bottom="3em"
              padding="0.5em"
              border-radius="5px"
              border=" none"
              outline="none"
              transition=".4s ease-in-out"
              background-image="linear-gradient(163deg, #00ff75 0%, #3700ff 100%)"
              color="rgb(0, 0, 0)"
              className="reset-button "
              sx={{
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(163deg, #a00000fa 0%, #d10050 100%)",
                  color: "#fff",
                },
              }}
              onClick={PostData}
            >
              Submit
            </Button>
            <ToastContainer />
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Newpassword;

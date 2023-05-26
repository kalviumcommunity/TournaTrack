import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  HStack,
  IconButton,
  Link,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import img from "../assest/shubham.jpg";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const AboutUs = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box p={8}>
      <Center>
        <HStack spacing={8}>
          {!isMobile && (
            <Box flex="0 0 auto">
              <Image
                src={img}
                alt="About Us Image"
                borderRadius="full"
                boxSize="400px"
                objectFit="cover"
              />
              <Text fontSize="1.5rem" fontWeight="600" marginTop="1rem">
                Shubham kumar <br /> Founder of TournaTrack
              </Text>

              <HStack spacing={4} display={"flex"} marginTop={"3rem"}>
                <IconButton
                  as={Link}
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  size="lg"
                  colorScheme="twitter"
                  marginLeft={"4vw"}
                />
                <IconButton
                  as={Link}
                  href="https://facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  size="lg"
                  colorScheme="facebook"
                />
                <IconButton
                  as={Link}
                  href="https://github.com/ImShubhK"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  icon={<FaGithub />}
                  size="lg"
                  colorScheme="gray"
                />
                <IconButton
                  as={Link}
                  href="https://instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  size="lg"
                  colorScheme="pink"
                />
                <IconButton
                  as={Link}
                  href="https://www.linkedin.com/in/shubham-kumar-9667b8226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  size="lg"
                  colorScheme="linkedin"
                />
              </HStack>
            </Box>
          )}
          <VStack spacing={4} align={!isMobile ? "flex-start" : "center"}>
            {isMobile && (
              <Box
                display={"flex"}
                alignItem={"center"}
                flexDirection={"column"}
              >
                <Image
                  src={img}
                  alt="About Us Image"
                  borderRadius="full"
                  boxSize="200px"
                  objectFit="cover"
                />
                <Text>
                  Shubham kumar <br /> Founder of TournaTrack
                </Text>
                <Heading as="h3">contact Us</Heading>
                <HStack spacing={4} display={"flex"} marginTop={"2vh"}>
                  <IconButton
                    as={Link}
                    href="https://twitter.com/im_shubhk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    size="lg"
                    colorScheme="twitter"
                    marginLeft={"4vw"}
                  />
                  <IconButton
                    as={Link}
                    href="https://www.facebook.com/people/Shubham-Rai/pfbid0LuqU4s5gpfc3UU1wpxJuKkQ9J7gvUiYrDuH8s615FhcLw4egEzDif9nfZSYEo6UWl/?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    size="lg"
                    colorScheme="facebook"
                  />
                  <IconButton
                    as={Link}
                    href="https://github.com/ImShubhK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    size="lg"
                    colorScheme="gray"
                  />
                  <IconButton
                    as={Link}
                    href="https://www.instagram.com/i_mshubhamk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    size="lg"
                    colorScheme="pink"
                  />
                  <IconButton
                    as={Link}
                    href="https://www.linkedin.com/in/shubham-kumar-9667b8226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    size="lg"
                    colorScheme="linkedin"
                  />
                </HStack>
              </Box>
            )}

            <Heading as="h3" size="lg">
              About Us
            </Heading>
            <Text fontSize="1rem" textAlign={!isMobile ? "left" : "center"}>
              Welcome to our website, the ultimate platform for sports
              enthusiasts and tournament organizers! Whether you're an avid
              player or a passionate organizer, our platform provides a seamless
              experience to explore the sports world, showcase your talents, and
              create unforgettable tournaments. Get ready to embark on an
              exciting journey filled with competition, camaraderie, and endless
              opportunities for growth.
            </Text>
            <Heading as="h3" size="lg">
              For Players
            </Heading>
            <Text fontSize="1rem" textAlign={!isMobile ? "left" : "center"}>
              Our website empowers athletes of all skill levels to participate
              in a wide range of tournaments across various sports disciplines.
              Whether you're a seasoned professional or a rookie looking to make
              your mark, you'll find a plethora of tournaments that cater to
              your interests.Joining a tournament is a breeze! Simply browse
              through the available tournaments, select the one that captivates
              your attention, and register yourself or your team. With a
              user-friendly interface, you can easily register your team. Show
              off your talents, and relish the thrill of competitive sports.
            </Text>

            <Heading as="h3" size="lg">
              For Organisers
            </Heading>
            <Text fontSize="1rem" textAlign={!isMobile ? "left" : "center"}>
              If you're a sports enthusiast with a knack for event planning, our
              website is your perfect companion. As an organizer, you can create
              and host your own tournaments with ease. From local community
              leagues to grand leval competitions, our platform offers the tools
              and support you need to bring your vision to life. With our
              intuitive tournament management system, you can effortlessly set
              up brackets, establish rules and regulations, and handle team
              registrations. Promote your tournaments to a vast community of
              sports lovers, attract top talent, and make your mark in the
              sports world. Our platform also provides secure payment
              processing, ensuring a seamless and transparent experience for
              participants.
            </Text>

            <Heading as="h3" size="lg">
              What will you get in the future ?
            </Heading>
            <Text fontSize="1rem" textAlign={!isMobile ? "left" : "center"}>
              Our website goes beyond just tournaments. We understand that
              sports are not just about competition; they're about fostering
              personal growth, building connections, and creating memorable
              experiences. To enhance your journey, we are plannig to offer
              additional features such as training resources, coaching
              opportunities, and sports news updates. By further you can also
              open challenge to someone for one-one match , Stay informed,
              enhance your skills, and unlock your true potential.
            </Text>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default AboutUs;

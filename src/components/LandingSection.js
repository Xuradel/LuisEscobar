import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Luis!"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection id="landingPage" 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
   
   
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center" > 
       <Avatar id="avatar"
         src="https://media.licdn.com/dms/image/D4E03AQHjVVie2aVQng/profile-displayphoto-shrink_800_800/0/1675815517347?e=1687392000&v=beta&t=-sMpF7L_x0upETaM6pJol361I1010NSRamjr_pakc1Q"
         size="2xl" 
         name="Luis Escobar" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1} className="h2land"> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;
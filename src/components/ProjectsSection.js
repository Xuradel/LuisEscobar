import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "Organic Coffee Shop", 
   description: 
     "Landing page for the Organic Coffee Shop, made with HTML5, CSS using a combination of flex and grid.", 
   getImageSrc: () => require("../images/photo1.jpg"), 
   url: "https://xuradel.github.io/cafe/",
 }, 
 { 
   title: "Little Lemon Restaurant", 
   description: 
     "Landing page for the Little Lemon Restaurant, made with HTML5, CSS using flexbox.", 
   getImageSrc: () => require("../images/photo2.jpg"), 
   url: "https://xuradel.github.io/lemon/",
 }, 
 { 
   title: "Weather App", 
   description: 
     "Coming Soon", 
   getImageSrc: () => require("../images/photo3.jpg"), 
   url: "https://instagram.com",
 }, 
 { 
   title: "Crypto Currency App", 
   description: 
     "Coming Soon", 
   getImageSrc: () => require("../images/photo4.jpg"), 
   url: "https://youtube.com",
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection id="projectPage"
     backgroundColor="#19376D" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       My Work 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url={project.url}
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;
import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
} from "@chakra-ui/react";            
      function ContentText7() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
<Image    
borderRadius="lg"    
width={{ md: 40 }}    
src=" https:bafybeialwa63jqrxffkz2lha3bflwdumqoctqdimezknsfrm5jdgyeqjm4.ipfs.infura-ipfs.io "  
alt=" MetaGame "  
/>
        </Box>    
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>    
<Text    
fontWeight="bold"    
textTransform="uppercase"    
fontSize="sm"    
letterSpacing="wide"    
color="teal.600"    
>
MetaGame   
        </Text>    
<Link    
mt={1}    
display="block"    
fontSize="lg"    
lineHeight="normal"    
fontWeight="semibold"    
href=" # "  
>
Finding Players and Patrons for MetaGame   
        </Link>    
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways MetaGame participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default ContentText7;              

import React from "react";            
import {            
 Box,           
 Tab,           
 Tabs,           
 TabList,           
 TabPanel,           
 TabPanels,           
} from "@chakra-ui/react";            
      function Tabs5() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
        <Tabs isfitted size="md" variant="enclosed-color" colorScheme="green">    
        <TabList mb="1em">    
        <Tab> W3S 1 </Tab>  
        <Tab> W3S 2 </Tab>  
        </TabList>    
        <TabPanels>    
        <TabPanel>    
<p> Five MetaGame provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        <TabPanel>    
<p> Two MetaGame provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        <TabPanel>    
<p> Three MetaGame provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems. </p>  
        </TabPanel>    
        <TabPanel>    
<p> four! </p>  
        </TabPanel>    
        </TabPanels>    
        </Tabs>    
        </Box>    
        </Box>    
);
}
export default Tabs5;              

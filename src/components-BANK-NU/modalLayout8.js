import React from "react";            
import {            
 useDisclosure,           
 Lorem,           
 Modal,           
 ModalOverlay,           
 ModalContent,           
 ModalHeader,           
 ModalFooter,           
 ModalBody,           
 ModalCloseButton,           
 Radio,           
 RadioGroup,           
 Stack,           
 Button,           
} from "@chakra-ui/react";            
      function ModalLayout8() {      
   const { isOpen, onOpen, onClose } = useDisclosure();         
   const [scrollBehavior, setScrollBehavior] = React.useState("inside");         
   const btnRef = React.useRef();         
       return (     
        <>    
        <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>    
        <Stack direction="row">    
        <Radio value="inside"> inside </Radio>  
        <Radio value="outside"> outside </Radio>  
        </Stack>    
        </RadioGroup>    
        <Button mt={3} ref={btnRef} onClick={onOpen}>    
Trigger modal   
        </Button>    
        <Modal    
onClose={onClose}    
finalFocusRef={btnRef}    
isOpen={isOpen}    
scrollBehavior={scrollBehavior}    
>
        <ModalOverlay />    
        <ModalContent>    
        <ModalHeader> Modal Title </ModalHeader>  
        <ModalCloseButton />    
        <ModalBody>    
        <Lorem count={15} />    
        </ModalBody>    
        <ModalFooter>    
        <Button onClick={onClose}> Close </Button>  
        </ModalFooter>    
        </ModalContent>    
        </Modal>    
</>               
);
}
export default ModalLayout8;              

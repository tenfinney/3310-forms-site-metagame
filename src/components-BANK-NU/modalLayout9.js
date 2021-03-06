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
 Button,           
} from "@chakra-ui/react";            
      function ModalLayout9() {      
   const { isOpen, onOpen, onClose } = useDisclosure();         
       return (     
        <>    
        <Button onClick={onOpen}> Open Modal </Button>  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>    
        <ModalOverlay />    
        <ModalContent>    
        <ModalHeader> Create your account </ModalHeader>  
        <ModalCloseButton />    
        <ModalBody pb={6}>    
        <Lorem count={2} />    
        </ModalBody>    
        <ModalFooter>    
        <Button colorScheme="blue" mr={3}>    
Save   
        </Button>    
        <Button onClick={onClose}> Cancel </Button>  
        </ModalFooter>    
        </ModalContent>    
        </Modal>    
</>               
);
}
export default ModalLayout9;              

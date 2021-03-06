import React, { useState } from 'react'            
import {            
 initIPFS, initOrbitDB, getDB, getAllDatabases,           
} from '../libs/databaseLib'            
import { actions, useStateValue } from '../state'            
import {            
 Spinner, HStack, VStack, Box, Text, IconButton,           
} from '@chakra-ui/react'            
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'            
import CopyableText from './commons/copyableText'            
// import { useWeb3Context } from '../libs/Web3Context'    
    const Systems = () => {        
   const [appState, dispatch] = useStateValue()         
   const [completeUser, setCompleteUser] = useState(false)         
// const { providerChainId, account } = useWeb3Context()    
    const fetchDB = async (address, type) => {        
   const db = await getDB(address)         
if (db) {    
let entries    
if (db.type === 'eventlog' || db.type === 'feed') {    
entries = await (    
db.iterator({ limit: 5 })    
.collect()    
.reverse()    
)
} else if (db.type === 'counter') {    
     entries = [{ payload: { value: db.value } }]       
} else if (db.type === 'keyvalue') {    
entries = Object.keys(db.all).map((e) => ({    
payload: { value: {key: e, value: db.get(e)} }    
}))
// } else if (db.type === 'docstore') {    
// entries = db.query((e) => (    
// e !== null, { fullOp: true }).reverse()    
// } else if (db.type === 'docstore'){    
// entries = db.query((e) => (e !== null, {fullOp: true}).reverse())    
} else {    
     entries = [{ payload: { value: 'TODO' } }]       
}
switch (type) {    
case 'access.manager':    
dispatch({ type: actions.DBGUIDE.SET_DBGUIDE, db, entries })    
break    
case 'ipfsDAG':    
dispatch({ type: actions.DBDAGTEST.SET_DBDAGTEST, db, entries })    
break    
case 'kvTests':    
dispatch({ type: actions.DBUSERS.SET_DBUSERS, db, entries })    
break    
case 'ipfsObject':    
dispatch({ type: actions.DB.SET_DB, db, entries })    
break    
     default:       
console.warn(`Unknown DB Type: '${type}'`)    
break    
}
}else{    
console.log(address, ' couldnt be found')    
}
}
// function copyToClipboard() {    
// var copyText = document.querySelector("#user")    
// var range = document.createRange()    
// range.selectNode(copyText)    
// window.getSelection().addRange(range)    
// console.log('Copied ',copyText.textContent,' to the clipboard')    
// document.execCommand("copy")    
async function initDatabases(){    
await fetchDB('/orbitdb/zdpuB2TjWHFxPnxng4EUYX3B6s67EjcfXGf2J6uFZE7PbazCF/ipfsObject', 'ipfsObject')    
await fetchDB('/orbitdb/zdpuAsWPoMa1tGvB83f8Kw17DzKnw7jQBE5NmfpFzRMJRE6Tk/ipfsDAG', 'ipfsDAG')    
await fetchDB('/orbitdb/zdpuAwtDbBCfDK7sDpxZn7Jgzj9WxfPgS8STaxWadKtnmTwrk/access.manager', 'access.manager')    
await fetchDB('/orbitdb/zdpuB1HfZEqMk4Fu2M72Zef7tx3tpFJzcNdsUVCjfng6MtunB/kvTests', 'kvTests')    
}
// useEffect(() => {    
// fetchDB(address)    
React.useEffect(() => {    
(async () => {    
await (    
initIPFS().then(async (ipfs) => {    
dispatch({ type: actions.SYSTEMS.SET_IPFS, ipfsStatus: 'Started'})    
await (    
initOrbitDB(ipfs).then(async (databases) => {    
dispatch({ type: actions.SYSTEMS.SET_ORBITDB, orbitdbStatus: 'Started' })    
let publicKey = databases.identity.id    
dispatch({type: actions.USER.SET_USER, publicKey})    
await initDatabases()    
   const programs = await getAllDatabases()         
dispatch({ type: actions.PROGRAMS.SET_PROGRAMS, programs: programs.reverse() })    
dispatch({ type: actions.PROGRAMS.SET_PROGRAMS_LOADING, loading: false })    
})
)
})
)
})()
}, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps    
    const SystemElement = (props) => (        
        <HStack fontSize='sm' spacing={1} fontWeight='semibold'>    
<Text>{props.name}</Text>{''}    
{props.isLoading ? (    
        <Spinner color="yellow" />    
) : (    
        <CheckCircleIcon color="lime" />    
)}
{props.data && (    
        <Box>    
{props.func ? (    
<IconButton    
colorScheme="white"    
icon={< LinkIcon />}  
isDisabled = {props.isLoading}    
onClick={()=>initDatabases()}>    
        </IconButton>    
) : (    
        <Box>    
{completeUser ? (    
        <CopyableText text={props.data}/> // handle close    
) : (    
<Text onClick={()=>setCompleteUser(!completeUser)}>{props.data.slice(0,7)}...</Text>    
)}
        </Box>    
)}
        </Box>    
)}
        </HStack>    
)
    const SystemElement2 = (props) => (        
        <HStack fontSize='sm' spacing={1} fontWeight='semibold'>    
<Text>{props.name}</Text>{''}    
{props.isLoading ? (    
        <CheckCircleIcon color="yellow" />    
) : (    
        <CheckCircleIcon color="cyan"/>    
)}
{props.data && (    
        <Box>    
{props.func ? (    
<IconButton    
colorScheme="white"    
color="cyan"    
icon={< LinkIcon />}  
isDisabled = {props.isLoading}    
onClick={()=>initDatabases()}>    
        </IconButton>    
) : (    
        <Box>    
{completeUser ? (    
        <CopyableText text={props.data}/> // handle close    
) : (    
<Text onClick={()=>setCompleteUser(!completeUser)}>{props.data.slice(0,7)}...</Text>    
)}
        </Box>    
)}
        </Box>    
)}
        </HStack>    
)
// return (    
// <Box w='30%' border='1px solid lightgray'>    
// <VStack alignItems='left'>    
// <SystemElement    
// name = 'IPFS'    
// isLoading = {appState.ipfsStatus !== 'Started'}    
// />    
// <SystemElement    
// name = 'OrbitDB'    
// isLoading = {appState.orbitdbStatus !== 'Started'}    
// />    
// <SystemElement    
// name = 'User'    
// isLoading = {!appState.user}    
// data = {appState.user}    
// />    
// <SystemElement    
// name = 'Shared DBs'    
// isLoading = {!appState.db}    
// data = 'Refresh'    
// func = {true}    
// />    
// <SystemElement    
// name = 'Web3'    
// isLoading = {!account}    
// data = {providerChainId !== 1 ? (    
// 'Connect to xdai'    
// account    
// />    
// </VStack>    
// </Box>    
       return (     
        <Box w='30%' border='1px solid lightgray'>    
        <VStack alignItems='left'  ml='2' mt='2'>    
<Text color="gray"  fontWeight="semibold" > ContentLoader </Text>  
        <SystemElement    
name = 'IPFS Loader'    
isLoading = {appState.ipfsStatus !== 'Started'}    
/>
        <SystemElement    
name = 'Database Loader (OrbitDb)'    
isLoading = {appState.orbitdbStatus !== 'Started'}    
/>
        <SystemElement    
name = 'User Loader'    
isLoading = {!appState.user}    
data = {appState.user}    
/>
        <SystemElement2    
name = 'Using Shared Databases'    
isLoading = {!appState.db}    
data = 'Refresh'    
func = {true}    
/>
        </VStack>    
        </Box>    
)
}
export default Systems              

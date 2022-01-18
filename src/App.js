import './App.css';
import { useState } from 'react'

import Ceramic from '@ceramicnetwork/http-client'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'



import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect'
import { DID } from 'dids'
import { IDX } from '@ceramicstudio/idx'

const endpoint = "https://ceramic-clay.3boxlabs.com"

function App() {


  async function authenticate() {  
    const ethereum = window.ethereum;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    const addresses = await ethereum.request({ method: 'eth_requestAccounts' })
    const address = addresses[0] 

    const threeIdConnect = new ThreeIdConnect()
    const authProvider = new EthereumAuthProvider(window.ethereum, address)

    await threeIdConnect.connect(authProvider)

    const ceramic = new Ceramic(endpoint)
    const did = new DID({
      provider: threeIdConnect.getDidProvider(),
      resolver: ThreeIdResolver.getResolver(ceramic)
    })

    await did.authenticate()
    ceramic.setDID(did)
    console.log(did.id)
  }

  return (
    <div className="App">
      <button onClick={authenticate}>Read Profile</button>
    </div>
  );
}

export default App;
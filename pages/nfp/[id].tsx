import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NfpDrop() {
  const adress = useAddress()
  const disconnect = useDisconnect()
  const connectWithMetamask = useMetamask()
  console.log(connectWithMetamask)
  return (
    <div className="flex h-screen flex-col lg:grid  lg:grid-cols-10 ">
      {/* left */}
      <div className=" bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4  ">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl border-cyan-100 object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="space-y-6 p-5 text-center ">
            <h1 className="text-4xl font-bold text-white">Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of PAPAFAM Apes who lives & breathe React
            </h2>
          </div>
        </div>
      </div>
      <div className=" flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex  items-center justify-between p-5 ">
          <h1 className="w-52 flex-1 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              PAPAFAM
            </span>{' '}
            NFT market place
          </h1>
          <button
            onClick={() => (adress ? disconnect() : connectWithMetamask())}
            className=" rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            type="button"
          >
            {adress ? 'Sign Out' : 'Sign In'}
          </button>
        </header>
        <hr className="my-2 border" />
        {adress ? (
          <p className=" pt-2 text-center text-red-400">
            You´re logged in with wallet{adress.substring(0, 5)}...
            {adress.substring(adress.length - 5)}
          </p>
        ) : (
          ''
        )}
        {/* middle */}
        <div className="mt-10 flex flex-1 flex-col items-center  space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            alt=""
            className="w-80  object-cover pb-10 lg:h-40"
          />
          <h1 className="text-center text-3xl font-bold lg:text-5xl">
            The Ape Coding club | NFT Drop
          </h1>
          <p className="p-2 text-xl  text-green-500">13/21/NFT´sclaimded</p>
        </div>
        <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Min NFT (0.01ETH)
        </button>
      </div>
      {/* button */}
    </div>
  )
}

export default NfpDrop

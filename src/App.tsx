import React, { useState } from 'react'
import './App.css'
import { initialPokemon } from './defaultData'
import { Pokemon } from './Pokemon'
import { x } from '@xstyled/styled-components'

function App() {
  const [name, setName] = useState('')
  const [pokemons, setPokemons] = useState(initialPokemon)

  const onChangeName = (e: any) => setName(e.target.value)

  const handleAddPokemon = () => {
    if (name === '') return
    const newPokemons = [...pokemons, name]
    setPokemons(newPokemons)
    setName('')
  }
  return (
    <x.div className="App">
      <x.div mt="20px">
        <x.input
          height="2.4rem"
          w="20%"
          p="10px 16px"
          borderRadius="4px"
          boxShadow="0 0 0 1px #ccc inset"
          placeholder="ポケモンの名前を入力してください"
          value={name}
          onChange={onChangeName}
        />
        <x.button
          ml="10px"
          color="#fff"
          background="#f56500"
          borderRadius="100vh"
          onClick={handleAddPokemon}
        >
          ポケモン追加
        </x.button>
      </x.div>
      <x.div w="80%" m="0 auto">
        <x.div display="flex">
          {pokemons.map((pokemon, index) => (
            <Pokemon key={index} pokemonName={pokemon} />
          ))}
        </x.div>
      </x.div>
    </x.div>
  )
}

export default App

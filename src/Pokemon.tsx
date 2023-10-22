import { x } from '@xstyled/styled-components'
import { useGetPokemonByNameQuery } from './services/pokemon'

type PokemonProps = {
  pokemonName: string
}

export const Pokemon = ({ pokemonName }: PokemonProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName)
  return (
    <>
      {error ? (
        <p>申しわけありません。通信エラーが発生しました。</p>
      ) : isLoading ? (
        <p>Loading中です。</p>
      ) : data ? (
        <x.div w="20%">
          <x.h3>{data.species.name}</x.h3>
          <x.div>
            <x.img src={data.sprites.front_shiny} alt={data.species.name} />
          </x.div>
        </x.div>
      ) : null}
    </>
  )
}

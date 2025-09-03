import { useEffect, useState } from 'react';
import { getCharactersList } from '../../services/charList'
import { CharactersPageWrapper } from './styles'

export const CharactersPage = () => {
	const [characters, setCharacters] = useState()

	useEffect(() => {
		try{ 
			const res = getCharactersList()
			setCharacters(res);
		} catch {
			console.log('Ошибка');
		}
	}, []);


	return (
		<CharactersPageWrapper>
			{true ? <div>ВАГРАМ</div> : <div>РУСИК</div>}
		</CharactersPageWrapper>
	)
}
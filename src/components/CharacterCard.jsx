import './CharacterCard.css'

const CharacterCard = ({ characters }) => {

    return (
        <>
            <div className='card-container'>
                {characters.map((character) => (

                    <div id={character.id} className='card'>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                        <p>Status: {character.status}</p>
                        <p>Localização:{character.origin.name} </p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default CharacterCard
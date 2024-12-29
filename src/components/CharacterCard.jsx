import './CharacterCard.css'

const CharacterCard = ({ characters }) => {

    return (
        <>
            <div className='card-container'>
                {characters.map((character) => (

                    <div id={character.id} className='card'>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                        <p>{character.status}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default CharacterCard
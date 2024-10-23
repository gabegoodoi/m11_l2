import React, { useState } from 'react';

const MovieList = () => {

    const ulStyle = {
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: '30px'
    };

    const liStyle = {
        padding: "15px",
        cursor: 'pointer'
    };

    const buttonStyle = {
        fontSize: '15px',
        marginLeft: '20px',
        marginRight: '20px',
        backgroundColor: "green"
    };


    const pStyle = {
        color: 'yellow',
        fontSize: '20px'
    };

    const [movies, setMovies] = useState([
        { title: 'The Elephant Man', description: 'Dr. Frederic Treves (Anthony Hopkins) discovers Joseph (John) Merrick (John Hurt) in a sideshow. Born with a congenital disorder, Merrick uses his disfigurement to earn a living as the "Elephant Man." Treves brings Merrick into his home, discovering that his rough exterior hides a refined soul, and that Merrick can teach the stodgy British upper class of the time a lesson about dignity. Merrick becomes the toast of London and charms a caring actress (Anne Bancroft) before his death at 27.', genre: 'drama'},
        { title: 'Princess Bride', description: 'A fairy tale adventure about a beautiful young woman and her one true love. He must find her after a long separation and save her. They must battle the evils of the mythical kingdom of Florin to be reunited with each other. Based on the William Goldman novel "The Princess Bride" which earned its own loyal audience.', genre: 'adventure'},
        { title: 'The Adventures of Baron Munchausen', description: 'During the "Age of Reason" of the late 18th century, the Turkish army lays siege to a European city where a theater production about the extraordinary heroics of famed German aristocrat Baron Münchhausen is underway. A man steps forward to object that the performance is full of inaccuracies, claiming that he is the real Baron Münchhausen (John Neville). When the Turkish army approaches with gunfire, the baron undertakes his latest adventure with his promise to defend the city.', genre: 'adventure'},
        { title: 'Sullivan\'s Travels', description: "Successful movie director John L. Sullivan (Joel McCrea), convinced he won't be able to film his ambitious masterpiece until he has suffered, dons a hobo disguise and sets off on a journey, aiming to 'know trouble' first-hand. When all he finds is a train ride back to Hollywood and a beautiful blonde companion (Veronica Lake), he redoubles his efforts, managing to land himself in more trouble than he bargained for when he loses his memory and ends up a prisoner on a chain gang.", genre: 'adventure'},
        { title: 'Monsters Inc.', description: 'Monsters Incorporated is the largest scare factory in the monster world, and James P. Sullivan (John Goodman) is one of its top scarers. Sullivan is a huge, intimidating monster with blue fur, large purple spots and horns. His scare assistant, best friend and roommate is Mike Wazowski (Billy Crystal), a green, opinionated, feisty little one-eyed monster. Visiting from the human world is Boo (Mary Gibbs), a tiny girl who goes where no human has ever gone before.', genre: 'animation'}
      ]);

    const [visible, setVisible] = useState(Array(movies.length).fill(false));
    const [showAdventureOnly, setShowAdventureOnly] = useState(false);


    const toggle = (index) => {
        setVisible(previous =>
          previous.map((show, i) => (i === index ? !show : show))
        );
      };

    const removie = (index) => {
        setMovies(previousMovies => 
          previousMovies.filter((_, i) => i !== index)
        );
        setVisible(previousVisible => 
          previousVisible.filter((_, i) => i !== index)
        );
      };

    const toggleAdventure = () => {
        setShowAdventureOnly((prev) => !prev);
    };

    return (
    <div>
        <h1>Movie List</h1>

        <button style={buttonStyle} onClick={toggleAdventure}>
            {showAdventureOnly ? 'Show All' : 'Adventurers Only'}
        </button>

        <ul style={ulStyle}>

            {movies.filter((movie) => !showAdventureOnly || movie.genre == 'adventure') .map((movie, index) => (
                
                <li key={index} onClick={() => toggle(index)} style={liStyle}>

                    {movie.title}

                    {visible[index] && <p style={pStyle}>{movie.description}</p>}
                    
                    <button style={buttonStyle} onClick={(event) => {event.stopPropagation(); removie(index);}}>Remove</button>

                </li>
            ))}
        </ul>
    </div>
    );
}
    export default MovieList;
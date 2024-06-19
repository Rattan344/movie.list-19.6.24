const movies = [
    { title: "Inception", poster: "https://image.tmdb.org/t/p/w500//qOa5ewP1oNLCG8H3j4nBQwH5A7k.jpg", description: "A thief who steals corporate secrets through the use of dream-sharing technology." },
    { title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500//1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg", description: "Batman raises the stakes in his war on crime." },
    { title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
    { title: "Parasite", poster: "https://image.tmdb.org/t/p/w500//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", description: "Greed and class discrimination threaten the newly formed symbiotic relationship." },
    { title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers." },
];

const movieContainer = document.getElementById('movie-container');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    movieCard.innerHTML = `
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-description">${movie.description}</p>
        </div>
    `;

    movieContainer.appendChild(movieCard);
});

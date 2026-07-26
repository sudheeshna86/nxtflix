const moviesData = [
  {
    id: 1,
    title: "Shadow Protocol",
    genre: "Action",
    year: 2005,
    rating: "6.0",
    duration: "90 min",
    poster: "https://picsum.photos/seed/nxtflix1/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd1/1280/500",
    overview: "Shadow Protocol is a gripping action story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 2,
    title: "Silent Horizon",
    genre: "Drama",
    year: 2006,
    rating: "6.7",
    duration: "91 min",
    poster: "https://picsum.photos/seed/nxtflix2/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd2/1280/500",
    overview: "Silent Horizon is a gripping drama story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 3,
    title: "Crimson Dawn",
    genre: "Comedy",
    year: 2007,
    rating: "7.4",
    duration: "92 min",
    poster: "https://picsum.photos/seed/nxtflix3/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd3/1280/500",
    overview: "Crimson Dawn is a gripping comedy story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 4,
    title: "Neon Streets",
    genre: "Thriller",
    year: 2008,
    rating: "8.1",
    duration: "93 min",
    poster: "https://picsum.photos/seed/nxtflix4/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd4/1280/500",
    overview: "Neon Streets is a gripping thriller story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 5,
    title: "The Last Signal",
    genre: "Sci-Fi",
    year: 2009,
    rating: "8.8",
    duration: "94 min",
    poster: "https://picsum.photos/seed/nxtflix5/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd5/1280/500",
    overview: "The Last Signal is a gripping sci-fi story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 6,
    title: "Broken Chains",
    genre: "Romance",
    year: 2010,
    rating: "9.5",
    duration: "95 min",
    poster: "https://picsum.photos/seed/nxtflix6/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd6/1280/500",
    overview: "Broken Chains is a gripping romance story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 7,
    title: "Velvet Nights",
    genre: "Horror",
    year: 2011,
    rating: "6.2",
    duration: "96 min",
    poster: "https://picsum.photos/seed/nxtflix7/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd7/1280/500",
    overview: "Velvet Nights is a gripping horror story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 8,
    title: "Iron Verdict",
    genre: "Fantasy",
    year: 2012,
    rating: "6.9",
    duration: "97 min",
    poster: "https://picsum.photos/seed/nxtflix8/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd8/1280/500",
    overview: "Iron Verdict is a gripping fantasy story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 9,
    title: "Echoes of Tomorrow",
    genre: "Action",
    year: 2013,
    rating: "7.6",
    duration: "98 min",
    poster: "https://picsum.photos/seed/nxtflix9/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd9/1280/500",
    overview: "Echoes of Tomorrow is a gripping action story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 10,
    title: "Gravity Rift",
    genre: "Drama",
    year: 2014,
    rating: "8.3",
    duration: "99 min",
    poster: "https://picsum.photos/seed/nxtflix10/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd10/1280/500",
    overview: "Gravity Rift is a gripping drama story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 11,
    title: "Midnight Runner",
    genre: "Comedy",
    year: 2015,
    rating: "9.0",
    duration: "100 min",
    poster: "https://picsum.photos/seed/nxtflix11/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd11/1280/500",
    overview: "Midnight Runner is a gripping comedy story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 12,
    title: "Fractured Sky",
    genre: "Thriller",
    year: 2016,
    rating: "9.7",
    duration: "101 min",
    poster: "https://picsum.photos/seed/nxtflix12/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd12/1280/500",
    overview: "Fractured Sky is a gripping thriller story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 13,
    title: "Wild Frontier",
    genre: "Sci-Fi",
    year: 2017,
    rating: "6.4",
    duration: "102 min",
    poster: "https://picsum.photos/seed/nxtflix13/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd13/1280/500",
    overview: "Wild Frontier is a gripping sci-fi story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 14,
    title: "The Silent Oath",
    genre: "Romance",
    year: 2018,
    rating: "7.1",
    duration: "103 min",
    poster: "https://picsum.photos/seed/nxtflix14/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd14/1280/500",
    overview: "The Silent Oath is a gripping romance story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 15,
    title: "Burning Embers",
    genre: "Horror",
    year: 2019,
    rating: "7.8",
    duration: "104 min",
    poster: "https://picsum.photos/seed/nxtflix15/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd15/1280/500",
    overview: "Burning Embers is a gripping horror story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 16,
    title: "Cosmic Drift",
    genre: "Fantasy",
    year: 2020,
    rating: "8.5",
    duration: "105 min",
    poster: "https://picsum.photos/seed/nxtflix16/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd16/1280/500",
    overview: "Cosmic Drift is a gripping fantasy story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 17,
    title: "Hidden Truth",
    genre: "Action",
    year: 2021,
    rating: "9.2",
    duration: "106 min",
    poster: "https://picsum.photos/seed/nxtflix17/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd17/1280/500",
    overview: "Hidden Truth is a gripping action story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 18,
    title: "Storm Chasers",
    genre: "Drama",
    year: 2022,
    rating: "9.9",
    duration: "107 min",
    poster: "https://picsum.photos/seed/nxtflix18/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd18/1280/500",
    overview: "Storm Chasers is a gripping drama story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 19,
    title: "Golden Hour",
    genre: "Comedy",
    year: 2023,
    rating: "6.6",
    duration: "108 min",
    poster: "https://picsum.photos/seed/nxtflix19/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd19/1280/500",
    overview: "Golden Hour is a gripping comedy story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  },
  {
    id: 20,
    title: "The Quiet Room",
    genre: "Thriller",
    year: 2024,
    rating: "7.3",
    duration: "109 min",
    poster: "https://picsum.photos/seed/nxtflix20/400/560",
    backdrop: "https://picsum.photos/seed/nxtflixbd20/1280/500",
    overview: "The Quiet Room is a gripping thriller story that follows unforgettable characters through a journey of tension, discovery, and consequence. Critically acclaimed for its direction and performances."
  }
];

export default moviesData;

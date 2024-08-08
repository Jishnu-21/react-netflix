const Key='c77e89f8efafc825a967c3f4b84241bc'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=2`,
    requestHoror: `https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=the&page=1&include_ad`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
}

export default requests
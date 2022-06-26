import { API_KEY } from "./constants/constants"

export const Trending = `trending/all/day?api_key=${API_KEY}&language=en-US'`
export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const tv = `tv/popular?api_key=${API_KEY}&language=en-US&page=1`
import { get, post } from '$lib/helpers/request'

export const getAdvertisements = options => post('https://evial.000webhostapp.com/index.php?page=advertisements', options)
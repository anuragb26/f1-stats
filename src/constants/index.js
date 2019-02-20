const BASE_API_URL = 'https://ergast.com/api/f1'
const RESPONSE_TYPE = '.json'
const WINNERS_API_ENDPOINT = 'driverstandings/1'
const RACE_WINNERS_API_SUFFIX = 'results/1'
export const TOAST_TIMER = 1000

export const getWinnersListApiEndpoint = querySting =>
  `${BASE_API_URL}/${WINNERS_API_ENDPOINT}${RESPONSE_TYPE}?${querySting}`

export const getRaceWinnersApiEndpoint = year =>
  `${BASE_API_URL}/${year}/${RACE_WINNERS_API_SUFFIX}${RESPONSE_TYPE}`

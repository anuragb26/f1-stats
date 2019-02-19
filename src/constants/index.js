const BASE_API_URL = 'http://ergast.com/api/f1'
const RESPONSE_TYPE = '.json'
const WINNERS_API_ENDPOINT = 'driverstandings/1'

export const TOAST_TIMER = 1000

export const getWinnersListApiEndpoint = querySting =>
  `${BASE_API_URL}/${WINNERS_API_ENDPOINT}${RESPONSE_TYPE}?${querySting}`

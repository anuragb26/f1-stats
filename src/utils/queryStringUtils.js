const queryStringUtils = {
  createQueryString: params =>
    Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&'),
  getQueryParams: url => {
    const params = {}
    const parser = document.createElement('a')
    parser.href = url
    const query = parser.search.substring(1)
    const keyValueInfo = query.split('&')
    keyValueInfo.forEach(elem => {
      const pair = elem.split('=')
      params[pair[0]] = decodeURIComponent(pair[1])
    })
    return params
  }
}

export default queryStringUtils

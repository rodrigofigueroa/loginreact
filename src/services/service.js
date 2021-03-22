export const URL = 'http://localhost:8080/login'

const loginUser = async credentials => {
  const conf = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( credentials )
  }
  const send = fetch( URL, conf ).then( raw => raw.json() )
  return send
}

export default loginUser
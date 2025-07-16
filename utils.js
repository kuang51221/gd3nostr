export const alloc = (n, f) => Array(n).fill().map(f)

const charSet = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'

export const genId = n =>
  alloc(n, () => charSet[Math.floor(Math.random() * charSet.length)]).join('')

export const selfId = genId(20)
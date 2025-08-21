export const delay = (time = 800, msg: false | string = false, force = false): Promise<void> => {
  if (!force && import.meta.env.MODE === 'test') {
    if (msg) console.log(`${msg} - ${time}ms delay (skipped in test mode)`)
    return Promise.resolve()
  }
  if (msg) console.log(`${msg} - ${time}ms delay`)
  return new Promise((resolve) => setTimeout(resolve, time))
}

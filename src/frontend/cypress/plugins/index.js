/* eslint-disable @typescript-eslint/no-var-requires */
export default (on, config) => {
  on('task', require('@cypress/code-coverage/task'))
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))

  return config
}

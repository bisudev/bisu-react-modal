module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'BisuReactModal',
      externals: {
        react: 'React'
      }
    }
  }
}

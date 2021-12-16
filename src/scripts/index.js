(function iife($) {
  $(document).ready(() => {
    const test = {
      transpiling: 'Transpiled!',
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    console.log(test?.transpiling)
  })
}(window.jQuery))

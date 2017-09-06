function appendOp (url, op) {
  if (!url) return url
  if (url.indexOf('ucarecdn') === -1) return url

  var parts = url.split('/')

  if (url[url.length - 1] === '/') {
    parts[parts.length - 1] = op
  } else {
    parts[parts.length - 1] = op + parts[parts.length - 1]
  }

  return parts.join('/')
}

module.exports = appendOp

function scaleCropResize (url, width, height) {
  return appendOp(url, '-/scale_crop/' + (width * 2) + 'x' + (height * 2) + '/center/-/quality/lighter/')
}

module.exports.scaleCropResize = scaleCropResize

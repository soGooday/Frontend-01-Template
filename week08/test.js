let csss = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
  </style>
</head>
<body>
  <div id="id">
  </div>
</body>
</html>
`
function match(selector, element) {
    if(!element.attributes || !selector) {
      return false
    }
    if(selector.charAt(0) === '#') {
      let attr = element.attributes.filter(attr => attr.name === 'id')[0]
      if (attr && attr.value === selector.replace('#', '')) {
        return true
      }
    } else if(selector.charAt(0) === '.') {
      let attr = element.attributes.filter(attr => attr.name === 'class')[0]
      // 处理带空格的
      let flag = attr && attr.value.split(/\s+/).some(attrClassName => attrClassName === selector.replace('.', ''))
      if (flag) {
        return true
      }
    } else {
      if (element.tagName === selector) {
        return true
      }
    }
  }
  
  
  match("div #id.class", document.getElementById("id"));
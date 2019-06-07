# Hello Worl

Below shows the smallest react app you can make

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Hello World</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div id="react-target">
        </div>
    </div>
</body>

<script src="https://fb.me/react-0.14.6.js"></script>
<script src="https://fb.me/react-dom-0.14.6.js"></script>

<script>
    var displayHtml = React.createElement('h1', {}, 'Hello World');
    ReactDOM.render(displayHtml, document.getElementById('react-target'))
</script>
</html>
```  
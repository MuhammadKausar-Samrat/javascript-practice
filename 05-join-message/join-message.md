# Join Message

Create a function that takes a username as an argument and returns the username followed by `" has joined!"`.

### Examples

```javascript
joinMessage("Mr.X") // "Mr.X has joined!"

joinMessage("Pixel_900") // "Pixel_900 has joined!"

joinMessage("x") // "x has joined!"
```

### Solution

```javascript
function joinMessage(username) {
  return `${username} has joined!`;
}
```
## This is the simplest popup ever (Este es el popup más sencillo)
### How to use it? (¿Cómo se usa?)
#### 1. Requires (Requiere)
```HTML
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/popup.js"></script>
<link rel="stylesheet" type="text/css" href="css/popup.css">
```
#### 2. Show Popup (Mostrar popup)
* Script
```javascript
  lanzarPopup('#popup_ejemplo');
```
* HTML
```html
<div class="popup" id="popup_ejemplo">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

	<button onclick="cerrarPopup('#popup_ejemplo')">Cerrar popup</button>
</div>
```
#### 3. Close Popup (Cerrar Popup)
* Script
```javascript
  cerrarPopup('#popup_ejemplo');
```
* HTML
```HTML
<button onclick="cerrarPopup('#popup_ejemplo')">Cerrar popup</button>
```
## want to see de <a target="_blank" href="http://rawgit.com/linzero/simplest-popup/master/index.html">LIVE DEMO</a>?
## ¿Quieres ver el <a target="_blank" href="http://rawgit.com/linzero/simplest-popup/master/index.html">DEMO</a>?
## And that's it! (Y eso es todo)


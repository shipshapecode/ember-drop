# Ember-Drop

Ember-Drop is an Ember addon that wraps the [Drop.js](https://github.com/HubSpot/drop) library.

It is mostly just a wrapper, but does provide a few extra features, to make common tasks easier. Please feel free to 
implement other Drop.js functionality, that I missed, and submit a PR!

## Demo
[![Ember-Drop](http://i.imgur.com/fdTobay.png)](http://rwwagner90.github.io/ember-drop/)
http://rwwagner90.github.io/ember-drop/

## Getting started

To start, if you are using Ember CLI, simply run:
```bash
ember install:addon ember-drop
```

After installing, just include the component in the template for the page you would like to attach the drop to.

```hbs
{{ember-drop
classes='drop-theme-arrows-bounce-dark'
content=content
openOn='hover'
position='top center'
targetSelector='.hover-element'}}
```

### classes
**classes** are extra classes to add to the drop. You'll want to add classes here for themes, if you are using them.

### content
**content** is an array of objects that denote the text, buttons, events, etc. that you want in your drop

```js
var content = [
      {
        classes: 'button-class',
        type: 'button',
        text: 'Change name',
        events: {
          click: function() {
            if (this.get('name') !== 'Thomas Jefferson') {
              this.set('name', 'Thomas Jefferson');
            }
            else {
              this.set('name', 'George Washington');
            }
          }.bind(controller)
        }
      },
      {
        classes: 'text-class',
        text: 'Click to change the name in the greeting',
        type: 'div'
      }
    ];
```

Each object in the content array has the following options:
- **classes**: Extra classes to add to the DOM element you are appending, mostly for styling purposes.
- **text**: A string of text to display in the element
- **type**: The type of element you would like to create: 'button', 'div', and 'span' are supported. You can pass in 
any other element types like 'p', 'a', etc. but others have not been tested.
- **events**: events is an object containing functions to be executed on a given event for the element you appended
  - **click**: A function to execute on click of the element you appended to the drop
  - **(More events coming soon)**

### openOn
**openOn** is one of the following strings 'hover', 'click' or 'always'. These are pretty self explanatory.

### position
**position** is a string denoting the positioning of the drop, relative to the target it's attached to.

Possible options:
```
'top left'
'left top'
'left middle'
'left bottom'
'bottom left'
'bottom center'
'bottom right'
'right bottom'
'right middle'
'right top'
'top right'
'top center'
```

### targetSelector
**targetSelector** is the css selector of the element you want to attach the drop to.


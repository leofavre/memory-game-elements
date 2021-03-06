# Flip Card

A flip card web component. The card starts facing down and can be flipped by applying the `revealed` attribute.

The component is not clickable. Any click behaviour must be implemented by the application.


## Usage

```html
<flip-card>Content</flip-card>
<flip-card revealed>Content</flip-card>
```

```javascript
import '@leofavre/flip-card-component';
```


## Attributes / Properties

#### `revealed` (Boolean)
Controls whether the content is shown. The default is to show the back of the card.


## CSS custom properties

#### `--flip-card-proportion`
- Default: 1/1

A fraction of the width of the card divided by its height.

#### `--flip-card-perspective`
- Default: 1200px

Controls the CSS property with the same name.

#### `--flip-card-background`
- Default: grey

Set the background of the back of the card.

#### `--flip-card-border-radius`
- Default: 0px

Controls the CSS property with the same name.

#### `--flip-card-border`
- Default: none

Controls the CSS property with the same name.

#### `--flip-card-speed`
- Default: 0.32s

Controls the animation speed.

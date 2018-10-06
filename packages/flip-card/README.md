# Flip Card

A web component of a card that can be flipped. First, the back of the card is shown, and it can be flipped by applying the `revealed` attribute.

The card is not clickable. Any click behaviour must be implemented by the application.


## Usage

```html
<flip-card>Content</flip-card>
<flip-card revealed>Content</flip-card>
```


## Attributes / Properties

#### `revealed` (Boolean)
Controls whether the content is shown. The default is to show the back of the card.


## CSS properties

#### `--proportion`
- Default: 1/1

A fraction of the width of the card divided by its height.

#### `--perspective`
- Default: 1200px

Controls the CSS property with the same name.

#### `--background`
- Default: grey

Set the background of the back of the card.

#### `--boreder-radius`
- Default: 0px

Controls the CSS property with the same name.

#### `--boreder`
- Default: none

Controls the CSS property with the same name.

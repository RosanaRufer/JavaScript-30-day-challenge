# JavaScript-30-day-challenge
I am following this fun challenge by Wes Bos.

# Coolest part of each JS30 day

## Day 1

## Day 2

## Day 3 - CSS Variables

* `:root` is the document's root element, the `<html></html>`, and is where we define CSS variables.

* A CSS variable is defined as: `--<varName>: <value><unit>`

* We can set a CSS variable **from JavaScript** using: `document.documentElement.style.setProperty('--<variableName>', '<value>')`

* **Improvement:** We can use the HTML `onInput` attribute for detecting changes on the `<input>` element. For example when moving the 'range' bar or changing  the 'color' when it's color type.

* The `filter` CSS property applied to an image is very cool, we used it together with the `blur` function.

## Day 4 - Array Cardio Day 1

* Just exercises on array prototype methods: `filter`, `map`, `sort`, 

* We also remember the fact we can't use these methods after using a `document.querySelector` or document.querySelectAll, because they return a NodeList. We convert it using Array.from(NodeList) or using the ES6 spread as: [...NodeList]

* Mind blow when seeing `console.table()`  💥 💥 💥

* JavaScript Array `reduce` method is also very cool and I like the syntax a lot. `array.reduce( function(obj,next), <initial value>)`;

## Day 5 - Flex Panel Gallery

* Wes Bos has another series with only flexbox exercises and that's gonna be my next entertainment after I end this one.

* Remember: (I already knew this but just for the record) We apply the `display: flex;` attribute in the container of our template in order to use flexbox. This will make the child elements to display inline with a width as big as their content. Later, we tell each child which fraction of the remaining space they should take.

* Justify content: aligns a flexible container in the X-Axis, align-items: same but in the Y-Axis, also in a flexible container.

* `>` Selects immediate children. These are called CSS **Combinators** || Asterisk selector: selects all elements.

## Day 6 - Type Ahead
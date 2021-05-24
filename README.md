# Velocity Scroll

<br/>

## What is it? 
### Just a Javascript module that I made to add that velocity scrolling effect to my webpages.

<br/>

## How to use it ?
* Download velocity.scroll.js
* Import it in to your javascript file
```javascript
import VelocityScroll from './src/velocity.scroll.js'
let scroll = new VelocityScroll('body') //Pass in any selector like classes and id as arguement
scroll.addEffect()
```
* Now the body of your webpage has this effect

<br/>

## Error Prevention
* It is loaded as a module so you need to specify 'type="module"' in your javascript file
Eg: If you are loading it to your main.js , make sure to use like this
```html
<script src="main.js" type="module"></script>
```
<br/>

## Properties and Parameters
| Methods        | Arguemets     | Values   |
| -------------  | ------------- | -------- |
| addEffect()    | None          | None     |
| setSkew()      | Maximum Skew  | 0 to 360 |
| removeEffect() | None          | None     |
| setSpeedRate() | Speed Rate    | 0 to 1   | 0 to 1 is recommended you can set to anything

## Properties Explained
* addEffect() is used to add this scrolling effect to the element you initialized.
* removeEffect() is used to remove this scrolling effect to the element you initialized.
* setSkew() is used to set the maximum skew that should be assigned to element in degree.
  * Default value is 40 degress , for more subtle experience i recommend 10
* setSpeedRate() is used to set the rate of increase in speed.
  * Default value is 0.35 , you can experiment from 0 to 1 recommended (Going above 1 may not look good)

## Thank You

### Contact Me
[<img src='https://img.icons8.com/fluent/50/000000/instagram-new.png' alt='instagram' height='40'>](https://www.instagram.com/ajmal_mohad)  
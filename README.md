# Open Link With \<a> tag

- Open link by creating \<a> tag and simulate click it
- Support [\<a> tag attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes)

## Install

```
npm i open-link-with-a-tag
```

## Usage

```javascript
import open from "open-with-a-tag";

open('https://www.google.com/', {
  rel: 'noreferrer noopener',
  target: '_blank'
})
```

## Browser compatibility

- Chrome 60+

Use Babel for better browser support
# chartist-plugin-animation

Implements some default animations for [Chartist](https://github.com/gionkunz/chartist-js) charts.

## Install

Install with npm. Then add this to your require.js config file:

```js
'shim': {
    'chartist-plugin-animation': {
        'deps': ['chartist', 'jquery']
    }
}
```

## Usage

In an example chart:

```js
ChartistAnimation = require('chartist-plugin-animation');

new Chartist.Bar('.ct-chart', data, {
        stackBars: true,
    },
    plugins: [
        new ChartistAnimation({
            duration: 2000
        })
    ]
});
```

| __Option__ | __Description__ | __Type__ | __Default__ |
| ---        | ---             | ---      | ---         |
| `duration` | Length of duration in `ms`. | `integer` | `1000` |


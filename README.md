# chartist-plugin-animation

Implements some default animations for [Chartist](https://github.com/gionkunz/chartist-js) charts.

Currently has animations for:

- Linechart
- Barchart

Animation of piecharts is possible after [#204](https://github.com/gionkunz/chartist-js/pull/204) on Chartist is merged.

## Usage

In an example chart:

```js
new Chartist.Bar('.ct-chart', data, {
        stackBars: true,
        plugins: [
            Chartist.plugins.animation({
                duration: 2000
            })
        ]
    }
});
```

| __Option__ | __Description__ | __Type__ | __Default__ |
| ---        | ---             | ---      | ---         |
| `duration` | Length of duration in `ms`. | `integer` | `1000` |


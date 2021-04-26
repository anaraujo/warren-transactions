const colors = {
    'transparent': 'transparent',
    'white': '#FFFFFF',
    'black': '#000000',
};

const spacing = {
    px: '1px',
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px',
    '7': '56px',
    '8': '64px',
    '9': '72px',
    '10': '80px',
    '11': '88px',
    '12': '96px',
    '13': '104px',
    '14': '112px',
    '15': '120px',
    '16': '128px',
    '17': '136px',
    '18': '144px',
    '19': '152px',
    '20': '160px',
    '21': '168px',
    '22': '176px',
    '23': '184px',
    '24': '192px',
    '25': '200px',
};

const sizing = {
    auto: 'auto',
    px: '1px',
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px',
    '7': '56px',
    '8': '64px',
    '9': '72px',
    '10': '80px',
    '11': '88px',
    '12': '96px',
    '13': '104px',
    '14': '112px',
    '15': '120px',
    '16': '128px',
    '17': '136px',
    '18': '144px',
    '19': '152px',
    '20': '160px',
    '21': '168px',
    '22': '176px',
    '23': '184px',
    '24': '192px',
    '25': '200px',
};

const inset = {
    px: '1px',
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px',
    '7': '56px',
    '8': '64px',
    '9': '72px',
    '10': '80px',
    '11': '88px',
    '12': '96px',
    '13': '104px',
    '14': '112px',
    '15': '120px',
    '16': '128px',
    '17': '136px',
    '18': '144px',
    '19': '152px',
    '20': '160px',
    '21': '168px',
    '22': '176px',
    '23': '184px',
    '24': '192px',
    '25': '200px',
};

const negativeSpacing = {
    '-px': '-1px',
    '-1': '-8px',
    '-2': '-16px',
    '-3': '-24px',
    '-4': '-32px',
    '-5': '-40px',
    '-6': '-48px',
    '-7': '-56px',
    '-8': '-64px',
    '-9': '-72px',
    '-10': '-80px',
    '-11': '-88px',
    '-12': '-96px',
    '-13': '-104px',
    '-14': '-112px',
    '-15': '-120px',
    '-16': '-128px',
    '-17': '-136px',
    '-18': '-144px',
    '-19': '-152px',
    '-20': '-160px',
    '-21': '-168px',
    '-22': '-176px',
    '-23': '-184px',
    '-24': '-192px',
    '-25': '-200px',
};

const theme = {
    colors: colors,

    screens: {
        'sm-up': { 'min': '576px' },
        'md-up': { 'min': '768px' },
        'lg-up': { 'min': '992px' },
        'xl-up': { 'min': '1200px' },
        'xs-down': { 'max': '575.98px' },
        'sm-down': { 'max': '767.98px' },
        'md-down': { 'max': '991.98px' },
        'lg-down': { 'max': '1199.98px' },
        'xs-only': { 'max': '575.98px' },
        'sm-only': { 'min': '576px', 'max': '767.98px' },
        'md-only': { 'min': '768px', 'max': '991.98px' },
        'lg-only': { 'min': '992px', 'max': '1199.98px' },
        'xl-only': { 'min': '1200px' },
    },

    fontSize: {
        '2xs': '10px',
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
    },

    fontWeights: {
        medium: 400,
        semibold: 600,
        bold: 700,
    },


    fontFamily: {
        sans: [
            'Montserrat',
            'system-ui',
            'BlinkMacSystemFont',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
        ],
        serif: [
            'Source Sans Pro',
            'Constantia',
            'Lucida Bright',
            'Lucidabright',
            'Lucida Serif',
            'Lucida',
            'DejaVu Serif',
            'Bitstream Vera Serif',
            'Liberation Serif',
            'Georgia',
            'serif',
        ],
        mono: [
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation Mono',
            'Courier New',
            'monospace',
        ],
    },


    boxShadow: {
        'none': 'none',
    },

    leading: {
        none: 1,
        normal: 1.5,
        relaxed: 1.75,
    },

    tracking: {
        tight: '0.05em',
        normal: '0',
        loose: '0.1em',
    },

    textColors: colors,

    backgroundColors: colors,

    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
    },

    borderWidth: global.Object.assign({
        default: '1px',
        '0': '0',
        '2px': '2px',
    }, spacing),

    borderColors: global.Object.assign({
        default: 'currentColor',
    }, colors),

    borderRadius: global.Object.assign({
        none: '0',
        '2px': '2px',
        'full': '9999px',
    }, spacing),

    width: global.Object.assign({
        'full': '100%',
        'half': '50%',
        '25': '25%',
        'screen': '100vw',
    }, sizing),

    height: global.Object.assign({
        'full': '100%',
        'half': '50%',
        'screen': '100vh',
    }, sizing),

    minWidth: global.Object.assign({
        'full': '100%',
        'half': '50%',
        'screen': '100vh',
    }, sizing),

    minHeight: global.Object.assign({
        '0': '0',
        'full': '100%',
        'half': '50%',
        'screen': '100vh',
    }, sizing),

    maxWidth: global.Object.assign({
        'full': '100%',
        'half': '50%',
        'screen': '100vw',
    }, sizing),

    maxHeight: global.Object.assign({
        'full': '100%',
        'half': '50%',
        'screen': '100vh',
    }, sizing),

    inset: inset,

    gap: global.Object.assign({}, spacing),

    padding: global.Object.assign({}, spacing),

    margin: global.Object.assign({
        'auto': 'auto',
    }, spacing, negativeSpacing),

    negativeMargin: global.Object.assign({}, spacing),

    shadows: {
        'none': 'none',
    },

    zIndex: {
        auto: 'auto',
        '1': -1,
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
    },

    opacity: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '100': '1',
    },

    svgFill: {
        current: 'currentColor',
    },

    svgStroke: {
        current: 'currentColor',
    },

    transitionProperty: { // defaults to these values
        'none': 'none',
        'all': 'all',
        'color': 'color',
        'bg': 'background-color',
        'border': 'border-color',
        'colors': ['color', 'background-color', 'border-color'],
        'opacity': 'opacity',
        'transform': 'transform',
    },

    transitionDuration: { // defaults to these values
        'default': '250ms',
        '0': '0ms',
        '100': '100ms',
        '250': '250ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
    },

    transitionTimingFunction: { // defaults to these values
        'default': 'ease',
        'linear': 'linear',
        'ease': 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
    },

    transitionDelay: { // defaults to these values
        'default': '0ms',
        '0': '0ms',
        '100': '100ms',
        '250': '250ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
    },

    willChange: { // defaults to these values
        'auto': 'auto',
        'scroll': 'scroll-position',
        'contents': 'contents',
        'opacity': 'opacity',
        'transform': 'transform',
    },

    /*
    |-----------------------------------------------------------------------------
    | Modules                  https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants:
    |   - responsive
    |   - hover
    |   - focus
    |   - focus-within
    |   - active
    |   - group-hover
    |
    | To disable a module completely, use `false` instead of an array.
    |
    */

    modules: {
        appearance: ['responsive'],
        backgroundAttachment: false,
        backgroundColors: ['responsive', 'hover', 'focus', 'active'],
        backgroundPosition: false,
        backgroundRepeat: false,
        backgroundSize: false,
        borderCollapse: [],
        borderColors: [],
        borderRadius: false,
        borderStyle: false,
        borderWidths: [],
        cursor: [],
        display: ['responsive'],
        flexbox: ['responsive'],
        float: false,
        fonts: [],
        fontWeights: [],
        height: ['responsive'],
        leading: ['responsive'],
        tracking: ['responsive'],
        lists: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        negativeMargin: ['responsive'],
        objectFit: false,
        objectPosition: false,
        opacity: [],
        outline: ['focus'],
        overflow: [],
        padding: ['responsive'],
        pointerEvents: [],
        position: ['responsive'],
        resize: false,
        shadows: false,
        svgFill: [],
        svgStroke: [],
        tableLayout: false,
        textAlign: ['responsive'],
        textColors: ['responsive', 'hover'],
        textSizes: ['responsive'],
        textStyle: [],
        userSelect: false,
        verticalAlign: false,
        visibility: false,
        whitespace: [],
        width: ['responsive'],
        zIndex: [],
    },

    /*
    |-----------------------------------------------------------------------------
    | Plugins                                https://tailwindcss.com/docs/plugins
    |-----------------------------------------------------------------------------
    |
    | Here is where you can register any plugins you'd like to use in your
    | project. Tailwind's built-in `container` plugin is enabled by default to
    | give you a Bootstrap-style responsive container component out of the box.
    |
    | Be sure to view the complete plugin documentation to learn more about how
    | the plugin system works.
    |
    */

    plugins: [
        // require('tailwindcss/plugins/container')({
        //   center: true,
        //   padding: '1rem',
        // }),
    ],

    /*
    |-----------------------------------------------------------------------------
    | Advanced Options         https://tailwindcss.com/docs/configuration#options
    |-----------------------------------------------------------------------------
    |
    | Here is where you can tweak advanced configuration options. We recommend
    | leaving these options alone unless you absolutely need to change them.
    |
    */

    options: {
        prefix: '',
        important: false,
        separator: ':',
    },
};

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    important: true,
    theme,
    variants: {},
    plugins: [],
}

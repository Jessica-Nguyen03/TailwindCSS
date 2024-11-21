/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            columns: {
                '4xs': '14rem',

            },
            gridAutoColumns: {
                '2fr': 'minmax(0, 2fr)',
            }
        },
    },
    plugins: [],
}
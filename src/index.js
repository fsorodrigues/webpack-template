import * as d3 from 'd3';

import './style/main.css';

const msg = 'webpack template running';

d3.select('body')
    .append('div')
    .append('p')
    .text(msg);

console.log(msg);

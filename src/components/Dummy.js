import VisualizationComponent from './../resplendent';

var d3 = require('d3');

class Dummy extends VisualizationComponent {
  constructor (div, data) {
    super(div);

    d3.select(this.div)
      .append('ul');

    if (data) {
      this.refresh(data);
    }
  }

  refresh (data) {
    let d = d3.select(this.div)
      .select('ul')
      .selectAll('li')
      .data(data);

    d.enter()
      .append('li');

    d.text((d) => d.text)
      .style('color', (d) => d.color);
  }
}

export default Dummy;

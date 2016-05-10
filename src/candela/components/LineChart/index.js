import VisComponent from '../../VisComponent';
import vega from '../../util/vega';
import spec from './spec.json';

export default class LineChart extends VisComponent {
  static get spec () {
    return {
      options: [
        {
          name: 'data',
          type: 'table',
          format: 'objectlist'
        },
        {
          name: 'x',
          type: 'string',
          format: 'text',
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['date', 'number', 'integer', 'boolean']
          }
        },
        {
          name: 'y',
          type: 'string_list',
          format: 'string_list',
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['date', 'number', 'integer', 'boolean']
          }
        }
      ]
    };
  }

  constructor (el, options) {
    super(el);
    this.options = options;
  }

  render () {
    vega.parseChart(spec, this.el, this.options);
  }
}
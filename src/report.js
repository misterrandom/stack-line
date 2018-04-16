import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, ReferenceLine,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList } from 'recharts';
import styles from './main.css';
import ProductDetail from './product-detail';
import sales from './mock.json';
import Tags from './tags';
import SummaryTable from './summary-table';

class Report extends Component {

    constructor() {
        super();

    }
    render() {
        return (
            <div className="container">
                <div className="leftNav">
                    <ProductDetail sales={sales} />
                    <div className="tag-list"><Tags tags={sales.tags} /></div>
                </div>
                <div className="report-panel">
                    <div class="chart">
                        <h2>Retail Sales</h2>
                        <LineChart width={900} height={500} data={sales.sales} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
                            <Line type="monotone" dataKey="unitsSold" />
                        </LineChart>
                    </div>
                    <SummaryTable sales={sales.sales} />
                </div>
            </div>
        );
    }
}

export default Report;
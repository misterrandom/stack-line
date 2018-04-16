import React from 'react';

export default ({sales}) => {

    let summaryList = [];
    
    summaryList.push(<div className="header-summary-row">
                            <div className="first-summary-cell">WEEK ENDING</div>
                            <div className="summary-cell">RETAIL SALES</div>
                            <div className="summary-cell">WHOLESALE SALES</div>
                            <div className="summary-cell">UNITS SOLD</div>
                            <div className="summary-cell">RETAILER MARGIN</div>
                        </div>);

    sales.map((sale) => {
        summaryList.push(<div className="summary-row" key={sale.weekEnding}>
                            <div className="first-summary-cell">{sale.weekEnding}</div>
                            <div className="summary-cell">{sale.retailSales}</div>
                            <div className="summary-cell">{sale.wholesaleSales}</div>
                            <div className="summary-cell">{sale.unitsSold}</div>
                            <div className="summary-cell">{sale.retailerMargin}</div>
                        </div>);
    });

    return (
        <div class="summary-table">
            {summaryList}
        </div>
    );

}
import BTC from '/images/BTC.png';
import ETH from '/images/ETH.png';
import Visa from '/images/Visa.png';
import CardChip from '/images/card_chip.png';
import MasterCard from '/images/master_card.png';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);


const dataCards = [
    {
        img: BTC,
        title: 'BTC',
        imgFlag: Visa,
        amount: '$1,321',
        cardchip: CardChip,
    },
    {
        img: ETH,
        title: 'ETH',
        imgFlag: MasterCard,
        amount: '$374,28',
        cardchip: CardChip,
    },
    {
        img: BTC,
        title: 'BTC',
        imgFlag: Visa,
        amount: '$102,38',
        cardchip: CardChip,
    }
]

const reportData = [
    {
        title: 'Income',
        amount: '$1,321',
        percent: 3.5,
        compared: 'Compared to $26, 938 last month',
    },
    {
        title: 'Expenses',
        amount: '$1,321',
        percent: -6.5,
        compared: 'Compared to $26, 938 last month',
    },
    {
        title: 'Cashback',
        amount: '$1,321',
        percent: 3.5,
        compared: 'Compared to $26, 938 last month',
    },
    {
        title: 'Turnover',
        amount: '$1,321',
        percent: 3.5,
        compared: 'Compared to $26, 938 last month',
    },
]

const badgesData = [
    {
        title: 'Training',
        amount: 50,
    },
    {
        title: 'Internet',
        amount: 50,
    },
    {
        title: 'Gas',
        amount: 50,
    },
    {
        title: 'Food',
        amount: 50,
    },
    {
        title: 'Electricity',
        amount: 50,
    },
]

const state = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    options: {
        responsive: true,
    },
    datasets: [
        {
            label: 'BTC',
            data: [3812, 312, 123, 3772, 319238, 3812, 9812, 5412, 4928, 1874, 5231],
            borderColor: 'red',
            borderWidth: 2,
        },
        {
            label: 'ETH',
            data: [8523, 312, 1223, 3772, 3512, 3812, 7642, 5412, 77412, 1874, 9912],
            borderColor: 'blue',
            borderWidth: 2,
        },
    ]
}

export const SectionMiddle = () => {
    return (
        <section className="middle">
            <div className="header">
                <h1>Overview</h1>
                <input type="date" />
            </div>

            <div className="cards">
                {dataCards.map((item, index) => (
                    <div key={index} className="card">
                        <div className="top">
                            <div className="left">
                                <img src={item.img} alt="image btc" />
                                <h2>{item.title}</h2>
                            </div>
                            <img className='right' src={item.imgFlag} alt="image visa" />
                        </div>

                        <div className="middle">
                            <h1>{item.amount}</h1>
                            <img className='chip' src={item.cardchip} alt="card chip" />
                        </div>

                        <div className="bottom">
                            <div className="left">
                                <small>Card Holder</small>
                                <h5>JOHN DOE</h5>
                            </div>

                            <div className="right">
                                <div className="expiry">
                                    <small>Expiry</small>
                                    <h5>08/23</h5>
                                </div>
                                <div className='cvv'>
                                    <small>CVV</small>
                                    <h5>123</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="monthly-report">
                {reportData.map((item, index) =>
                    <div key={index} className="report">
                        <h3>{item.title}</h3>
                        <div>
                            <details>
                                <h1>{item.amount}</h1>
                                <h6
                                    className={item.percent > 0 ? 'success' : 'danger'}>
                                    {item.percent}%
                                </h6>
                                <p className="text-muted">
                                    {item.compared}
                                </p>
                            </details>
                        </div>
                    </div>
                )}
            </div>

            <div className="fast-payment">
                <h2>Fast Payment</h2>
                <div className="badges">
                    <div className="badge">
                        <span class="material-symbols-sharp">
                            add
                        </span>
                    </div>

                    {badgesData.map((item, index) =>
                        <div key={index} className="badge">
                            <span className="bg-primary"></span>
                            <div>
                                <h5>{item.title}</h5>
                                <h4>${item.amount}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div id="chart">
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </section>
    );
}
import iconUnilever from '/images/uniliver.png';
import iconTesla from '/images/tesla.png';
import iconMonster from '/images/monster.png';
import iconMcdonalds from '/images/mcdonalds.png';

const brands = [
    {
        name: 'Unilever',
        image: iconUnilever,
    },
    {
        name: 'Tesla',
        image: iconTesla,
    },
    {
        name: 'Monster',
        image: iconMonster,
    },
    {
        name: 'McDonalds',
        image: iconMcdonalds,
    }
]

const transactions = [
    {
        type: 'Music',
        icon: 'headset_mic'
    },
    {
        type: 'Shopping',
        icon: 'shopping_cart'
    },
    {
        type: 'Restaurant',
        icon: 'storefront'
    },
    {
        type: 'Games',
        icon: 'stadia_controller'
    },
    {
        type: 'Pharmacy',
        icon: 'medication'
    },
    {
        type: 'Fitness',
        icon: 'fitness_center'
    }
]

export const SectionRight = () => {
    return (
        <section className="right">
            <div className="investiments">
                <div className="header">
                    <h2>Investiments</h2>
                    <a href="#">More <span class="material-symbols-sharp">
                        chevron_right
                    </span></a>
                </div>

                {brands.map((brand, index) => (
                    <div key={index} className="investiment">
                        <img src={brand.image} alt={brand.name} />
                        <h4>{brand.name}</h4>
                        <div className="date-time">
                            <p>26 May, 2022</p>
                            <small className='text-muted'>
                                17:59
                            </small>
                        </div>
                        <div className="bonds">
                            <p>1402</p>
                            <small className="text-muted">
                                Bonds
                            </small>
                        </div>
                        <div className="amount">
                            <h4>$20,033</h4>
                            <small className='danger'>
                                -4.27%
                            </small>
                        </div>
                    </div>
                ))}
            </div>

            <div className="transactions">
                <div className="header">
                    <h2>Recent Transations</h2>
                    <a href="#">More <span class="material-symbols-sharp">
                        chevron_right
                    </span></a>
                </div>


                {transactions.map((item, index) => (
                    <div className="transaction">
                        <div className='info'>
                            <div className="icon">
                                <span class="material-symbols-sharp">
                                    {item.icon}
                                </span>
                            </div>

                            <div className="type">
                                <h4>{item.type}</h4>
                                <p className="text-muted">26.05.2022</p>
                            </div>
                        </div>

                        <div className="brandCard">
                            <h4>Visa</h4>
                            <div>
                                <span>2321</span>
                                <p>Credit Card</p>
                            </div>
                        </div>

                        <div className="val">
                            <p>-$20</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
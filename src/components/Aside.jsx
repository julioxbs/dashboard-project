const items = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        isActive: 'active',
    },
    {
        title: 'Exchange',
        icon: 'currency_exchange',
    },
    {
        title: 'Wallet',
        icon: 'wallet',
    },
    {
        title: 'Transactions',
        icon: 'credit_card',
    },
    {
        title: 'Analytics',
        icon: 'pie_chart',
    },
    {
        title: 'Message',
        icon: 'sms',
    },
    {
        title: 'Help Center',
        icon: 'help_center',
    },
    {
        title: 'Settings',
        icon: 'settings',
    },
]

export const Aside = () => {
    return (
        <aside>
            <button id="close-btn">
                <span className="material-symbols-sharp">
                    close
                </span>
            </button>

            <div className="sidebar">
                {items.map((item, index) => (
                    <a key={index} href="#" className={item.isActive}>
                        <span className="material-symbols-sharp">
                            {item.icon}
                        </span>
                        <h4>{item.title}</h4>
                    </a>
                ))}
            </div>

            <div className="updates">
                <span className="material-symbols-sharp">
                    update
                </span>
                <h4>Updates Available</h4>
                <p>Security Updates</p>
                <p>General Updates</p>
                <a href="#">Update Now</a>
            </div>
        </aside>
    );
}
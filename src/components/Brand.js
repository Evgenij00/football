export function Brand({logo, name}) {
    return (
        <div className='brand'>
            <div className='brand-icon'>
                <img src={logo} alt={name} />
            </div>
            <div className='brand-name'>
                {name}
            </div>
        </div>
    );
}
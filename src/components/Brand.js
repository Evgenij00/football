// import react from 'react'

export const Brand = ({logo, name}) => {
    return (
        <div class="brand">
            <div class="brand-icon">
                <img src={logo} alt={name} />
            </div>
            <div class="brand-name">
                {name}
            </div>
        </div>
    );
}
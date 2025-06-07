import "./styles/main.scss";

document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.order__container__form__slider-track');
    const sliderThumb = document.querySelector('.order__container__form__slider-thumb');
    const sliderPercentage = document.querySelector('.order__container__form__slider-percentage');
    let isDragging = false;

    const PADDING = 20;

    sliderTrack.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateThumbPosition(e);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            updateThumbPosition(e);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    function updateThumbPosition(e) {
        const rect = sliderTrack.getBoundingClientRect();

        const x = Math.min(
            Math.max(e.clientX - rect.left, 0),
            rect.width - PADDING
        );

        const percentage = ((x - PADDING) / (rect.width - PADDING * 2)) * 100;

        const clampedPercentage = Math.min(Math.max(Math.round(percentage), 0), 100);

        sliderThumb.style.left = `${x}px`;
        sliderPercentage.textContent = `${clampedPercentage}%`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.order__container__form__select');
    const options = ['option1', 'option2', 'option3', 'option4'];

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.footer__nav-list');
    const items = [
        {icon: '/src/images/networks/qiwi.svg', alt: 'Qiwi', link: '#', text: 'Qiwi wallet'},
        {icon: '/src/images/networks/yandex-money.svg', alt: 'Yandex Money', link: '#', text: 'Yandex Money'},
        {icon: '/src/images/networks/web-money.svg', alt: 'Web Money', link: '#', text: 'Web Money'},
        {
            icon: '/src/images/networks/mail.svg',
            alt: 'Mail',
            link: 'mailto:info@ipsum228.com',
            text: 'info@ipsum228.com'
        },
        {icon: '/src/images/networks/vk.svg', alt: 'VK', link: '#', text: 'Мы вконтакте'}
    ];

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'footer__nav-item';

        const img = document.createElement('img');
        img.src = item.icon;
        img.alt = item.alt;
        img.className = 'footer__nav-icon';

        const link = document.createElement('a');
        link.href = item.link;
        link.className = 'footer__nav-link';
        link.textContent = item.text;

        listItem.appendChild(img);
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const possibilitiesContainer = document.querySelector('.order__possibilities');
    const possibilities = [
        {icon: '/src/images/possibilities/search.svg', alt: 'search', text: 'Lorem ipsum dolorsit amet'},
        {icon: '/src/images/possibilities/percent.svg', alt: 'percent', text: 'Сonsecteturadipiscing elit'},
        {icon: '/src/images/possibilities/list.svg', alt: 'list', text: 'Sed do eiusmod tempor'},
        {icon: '/src/images/possibilities/mail.svg', alt: 'mail', text: 'Esse cillum doloreeu fugiat'},
        {
            icon: '/src/images/possibilities/currency.svg',
            alt: 'currency',
            text: 'Excepteur sint occaecat cupidatat non proident'
        }
    ];

    possibilities.forEach((possibility, index) => {
        const container = document.createElement('div');
        container.className = 'order__possibilities__container__icon';

        const wrapper = document.createElement('div');
        wrapper.className = 'order__possibilities__wrapper__icon';

        const img = document.createElement('img');
        img.src = possibility.icon;
        img.alt = possibility.alt;
        img.className = 'order__possibilities__icon';

        const text = document.createElement('p');
        text.className = 'order__possibilities__text';
        text.textContent = possibility.text;

        wrapper.appendChild(img);
        container.appendChild(wrapper);
        container.appendChild(text);

        possibilitiesContainer.appendChild(container);

        if (index < possibilities.length - 1) {
            for (let i = 0; i < 5; i++) {
                const point = document.createElement('span');
                point.className = 'order__possibilities__point';
                point.textContent = '•';
                possibilitiesContainer.appendChild(point);
            }
        }
    });
});

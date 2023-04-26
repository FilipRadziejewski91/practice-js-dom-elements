console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const parent = document.querySelector('.parent-for-button')
const newBtn = document.createElement('button');
parent.appendChild(newBtn);

newBtn.innerText = buttonSettings.text

for (const key in buttonSettings.attr) {
    const value = buttonSettings.attr[key];
    newBtn[key] = value;
}

for (const key in buttonSettings.css) {
    const value = buttonSettings.css[key];
    newBtn.style[key] = value;
}

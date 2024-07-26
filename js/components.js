// js/components.js

// 动态调整页面布局
function adjustLayout() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    const headerHeight = header.offsetHeight;
    const windowHeight = window.innerHeight;

    // 设置 main 的最小高度以确保内容区域占满整个视口高度
    main.style.minHeight = `${windowHeight - headerHeight}px`;
}

// 在页面加载时调整布局
window.addEventListener('load', adjustLayout);

// 在窗口大小改变时调整布局
window.addEventListener('resize', adjustLayout);

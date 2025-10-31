// 购物车功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const cartIcon = document.querySelector('.iconfont.icon-gouwuche');
    const cartContainer = document.getElementById('J_block_car_container');
    const overlay = document.getElementById('overlay');
    
    // 检查必要元素是否存在
    if (!cartIcon || !cartContainer || !overlay) {
        console.warn('购物车相关元素未找到');
        return;
    }
    
    // 添加关闭按钮
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.id = 'close-cart';
    
    // 添加标题到car-top
    const carTop = cartContainer.querySelector('.car-top');
    if (carTop) {
        const title = document.createElement('h3');
        title.textContent = '购物车';
        carTop.appendChild(title);
        carTop.appendChild(closeBtn);
    }
    
    // 打开/关闭购物车侧拉框
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (cartContainer.classList.contains('show')) {
            // 关闭购物车
            cartContainer.classList.remove('show');
            overlay.classList.remove('active');
            
            // 延迟重置背景滚动，等动画完成
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 300);
        } else {
            // 打开购物车
            document.body.style.overflow = 'hidden'; // 防止背景滚动
            cartContainer.classList.add('show');
            overlay.classList.add('active');
        }
    });
    
    // 关闭购物车侧拉框
    function closeCartPanel() {
        cartContainer.classList.remove('show');
        overlay.classList.remove('active');
        
        // 延迟重置背景滚动，等动画完成
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    }
    
    // 点击关闭按钮关闭
    closeBtn.addEventListener('click', closeCartPanel);
    
    // 点击遮罩层关闭
    overlay.addEventListener('click', closeCartPanel);
    
    // 按ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cartContainer.classList.contains('show')) {
            closeCartPanel();
        }
    });
});
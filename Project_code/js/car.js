// 购物车功能
document.addEventListener('DOMContentLoaded', function() {

    const cartIcon = document.querySelector('.iconfont.icon-gouwuche');
    const cartContainer = document.getElementById('J_block_car_container');
    const overlay = document.getElementById('overlay');
    
    // !!!检查必要元素是否存在_如果任何一个必要元素不存在，则输出警告并退出函数
    if (!cartIcon || !cartContainer || !overlay) {
        console.warn('购物车相关元素未找到');
        return;
    }
    
    // 使用现有的关闭按钮元素
    const closeBtn = document.querySelector('.top-back.iconfont.icon-right');
    
    // 创建清空购物车按钮
    const clearCartBtn = document.createElement('span');
    clearCartBtn.className = 'btn-clean-all';
    clearCartBtn.innerHTML = '<span class="iconfont icon-gouwuche"></span>清空购物车';
    clearCartBtn.style.cursor = 'pointer';
    
    // 添加到顶栏
    const carTop = cartContainer.querySelector('.car-top');
        // !!!安全检查：检查是否找到了该元素，避免出现错误
    if (carTop) {
        carTop.appendChild(clearCartBtn);
    }
    
    // 打开/关闭购物车侧拉框
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();// !阻止元素的默认行为
        
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
            cartContainer.classList.add('show');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // !禁止背景滚动
        }
    });
    
    // 关闭购物车侧拉框函数
    function closeCartPanel() {
        cartContainer.classList.remove('show');
        overlay.classList.remove('active');
        
        // 延迟重置背景滚动，等动画完成
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    }

    // 清空购物车函数
    function clearCart() {
        // 获取购物车内容容器
        const iconsContainer = cartContainer.querySelector('.icons-container');
        if (iconsContainer) {
            // 清空购物车内容
            iconsContainer.innerHTML = '<div class="no-result"><div class="no-result-message">购物车为空</div></div>';
        }
        console.log('购物车已清空');// 日志
    }
    
    // 点击清空购物车按钮
    clearCartBtn.addEventListener('click', function(e) {
        e.stopPropagation();// !防止点击清空购物车按钮时触发其他父级元素的点击事件
        clearCart();
    });
    
    // 点击现有的关闭按钮关闭
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCartPanel);
    }
    
    // 点击遮罩层关闭
    overlay.addEventListener('click', closeCartPanel);
    
    // 按ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cartContainer.classList.contains('show')) {
            closeCartPanel();
        }
    });
});
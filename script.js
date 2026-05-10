const overlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const confirmBtn = document.getElementById('confirmBtn');

/**
 * 处理导航点击
 * @param {string} type - 平台类型 ('bili' 或 'music')
 * @param {string} user - 用户名
 * @param {string} url - 目标链接
 */
function handleNavigation(type, user, url) {
    if (type === 'bili') {
        modalTitle.innerText = "确认前往";
        modalBody.innerHTML = `你是否前往哔哩哔哩关注 <b>${user}</b>？`;
    } else {
        modalTitle.innerText = "汽水音乐提示";
        modalBody.innerHTML = `进入汽水歌曲界面后，点击关注即可。<br><br>若已在抖音关注「${user}」，系统将自动同步。`;
    }

    // 绑定跳转事件
    confirmBtn.onclick = () => {
        executeRedirect(url);
    };

    // 显示弹窗
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('show'), 10);
}

function closeModal() {
    overlay.classList.remove('show');
    setTimeout(() => overlay.style.display = 'none', 300);
}

function executeRedirect(url) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 400);
}

// 点击遮罩层关闭弹窗
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});

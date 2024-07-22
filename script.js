document.addEventListener('DOMContentLoaded', function () {
    const switchButton = document.getElementById('switchButton');
    switchButton.addEventListener('click', function () {
        const currentPage = window.location.pathname;
        if (currentPage.endsWith('late.php')) {
            window.location.href = 'date.php';
        } else {
            window.location.href = 'late.php';
        }
    });
});
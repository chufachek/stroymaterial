// Мобильное меню
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
    this.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : 
        '<i class="fas fa-bars"></i>';
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Закрываем мобильное меню если оно открыто
            const nav = document.getElementById('mainNav');
            const mobileBtn = document.getElementById('mobileMenuBtn');
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Обработка формы
document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // Простая валидация
    if(!name.trim() || !phone.trim()) {
        alert('Пожалуйста, заполните обязательные поля: Имя и Телефон');
        return;
    }
    
    // Здесь обычно отправка данных на сервер
    // В данном случае просто покажем сообщение
    alert(`Спасибо, ${name}! Ваша заявка принята. Мы перезвоним вам по номеру ${phone} в ближайшее время.`);
    
    // Сброс формы
    this.reset();
});

// Добавляем класс при прокрутке для шапки
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
// Translation system
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.menu": "Menu",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        
        // Hero
        "hero.subtitle": "Batumi's Home of Craft Beer, Gourmet Burgers & Live Sport",
        "hero.view_menu": "View Our Menu",
        "hero.book_table": "Book a Table",
        
        // About
        "about.title": "Our Story",
        "about.text1": "Welcome to Creatoria Pub, Batumi's premier destination for exceptional food, curated craft beers, and unforgettable experiences. Nestled in the heart of the city, we've become the go-to spot for locals and visitors alike.",
        "about.text2": "Our passion for quality is evident in every dish we serve, especially our legendary burgers that have been called \"the best in Georgia.\" Paired with an extensive selection of Belgian and craft beers, we offer a dining experience that satisfies all senses.",
        "about.text3": "Whether you're here to catch the big game on our multiple screens, enjoy a casual meal with friends, or experience our vibrant atmosphere during live events, Creatoria Pub promises an exceptional time.",
        "about.feature1.title": "Gourmet Food",
        "about.feature1.text": "From our famous burgers to European classics, every dish is crafted with premium ingredients.",
        "about.feature2.title": "Craft Beer Selection",
        "about.feature2.text": "An extensive range of Belgian drafts and local craft beers to satisfy every palate.",
        "about.feature3.title": "Live Sports",
        "about.feature3.text": "Catch all the major games on our big screens with the best atmosphere in town.",
        "about.feature4.title": "Live Events",
        "about.feature4.text": "Regular live music and special events to enhance your pub experience.",
        
        // Menu
        "menu.title": "Our Menu",
        "menu.all": "All",
        "menu.burgers": "Burgers",
        "menu.mains": "Main Courses",
        "menu.snacks": "Snacks & Shareables",
        "menu.drinks": "Drinks",
        "menu.show_more": "Show More Menu Items",
        "menu.show_less": "Show Less Menu Items",
        
        // Gallery
        "gallery.title": "Gallery",
        
        // Contact
        "contact.title": "Contact Us",
        "contact.address": "Address",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.hours": "Opening Hours",
        "contact.hours_text": "Monday - Sunday: 12:00PM - 1:00 AM",
        "contact.book_title": "Book a Table",
        "contact.form.name": "Your Name",
        "contact.form.email": "Email",
        "contact.form.phone": "Phone",
        "contact.form.date": "Date",
        "contact.form.time": "Time",
        "contact.form.guests": "Number of Guests",
        "contact.form.message": "Special Requests",
        "contact.form.submit": "Book Now",
        
        // Footer
        "footer.about": "Batumi's premier destination for craft beer, gourmet burgers, and unforgettable experiences. Join us for great food, drinks, and atmosphere.",
        "footer.links": "Quick Links",
        "footer.hours": "Opening Hours",
        "footer.weekdays": "Monday - Thursday:",
        "footer.weekend": "Friday - Saturday:",
        "footer.sunday": "Sunday:",
        "footer.copyright": "© 2023 Creatoria Pub. All Rights Reserved.",
        
        // Page title
        "title": "Creatoria Pub | Batumi's Premier Beer & Burger Experience"
    },
    ka: {
        // Navigation
        "nav.home": "მთავარი",
        "nav.about": "ჩვენ შესახებ",
        "nav.menu": "მენიუ",
        "nav.gallery": "გალერეა",
        "nav.contact": "კონტაქტი",
        
        // Hero
        "hero.subtitle": "ბათუმის სახლი კრაფტ ლუდის, გურმეტული ბურგერების და სპორტის ჩვენებებისთვის",
        "hero.view_menu": "იხილეთ ჩვენი მენიუ",
        "hero.book_table": "დაიჯავშნეთ სტოლი",
        
        // About
        "about.title": "ჩვენი ისტორია",
        "about.text1": "კეთილი იყოს თქვენი მობრძანება Creatoria Pub-ში, ბათუმის წამყვან დესტინაციაში განსაკუთრებული საკვების, შერჩეული კრაფტ ლუდების და დაუვიწყარი გამოცდილებისთვის. ქალაქის ცენტრში მდებარე, ჩვენ გავხდით საყვარელი ადგილი ადგილობრივებისა და სტუმრებისთვის.",
        "about.text2": "ხარისხის მიმართ ჩვენი ვნება შესამჩნევია ყველა კერძში, რომელსაც ვმართავთ, განსაკუთრებით ჩვენ ლეგენდარულ ბურგერებში, რომლებსაც \"საქართველოში საუკეთესოს\" უწოდებენ. ბელგიური და კრაფტ ლუდების ფართო არჩევანთან ერთად, ჩვენ გთავაზობთ სასადილო გამოცდილებას, რომელიც აკმაყოფილებს ყველა გრძნობას.",
        "about.text3": "არ აქვს მნიშვნელობა აქ ხართ რათა ნახოთ მნიშვნელოვანი თამაში ჩვენ მრავალ ეკრანზე, ისიამოვნოთ არაფორმალური ვახშამით მეგობრებთან ერთად თუ განიცადოთ ჩვენი ცოცხალი ატმოსფერო ცოცხალი ღონისძიებების დროს, Creatoria Pub-ი გპირდებით განსაკუთრებულ დროს.",
        "about.feature1.title": "გურმეტული საკვები",
        "about.feature1.text": "ჩვენი ცნობილი ბურგერებიდან ევროპულ კლასიკამდე, ყველა კერძი მზადდება პრემიუმი ინგრედიენტებით.",
        "about.feature2.title": "კრაფტ ლუდის არჩევანი",
        "about.feature2.text": "ბელგიური დრაფტის და ადგილობრივი კრაფტ ლუდების ფართო სპექტრი ყველა გემოს დასაკმაყოფილებლად.",
        "about.feature3.title": "ცოცხალი სპორტი",
        "about.feature3.text": "ნახეთ ყველა მნიშვნელოვანი თამაში ჩვენ დიდ ეკრანებზე ქალაქის საუკეთესო ატმოსფეროში.",
        "about.feature4.title": "ცოცხალი ღონისძიებები",
        "about.feature4.text": "რეგულარული ცოცხალი მუსიკა და სპეციალური ღონისძიებები თქვენი პაბის გამოცდილების გასაუმჯობესებლად.",
        
        // Menu
        "menu.title": "ჩვენი მენიუ",
        "menu.all": "ყველა",
        "menu.burgers": "ბურგერები",
        "menu.mains": "მთავარი კერძები",
        "menu.snacks": "სნექები და გასაზიარებელი",
        "menu.drinks": "სასმელები",
        "menu.show_more": "მეტი პროდუქტის ჩვენება",
        "menu.show_less": "ნაკლები პროდუქტის ჩვენება",
        
        // Gallery
        "gallery.title": "გალერეა",
        
        // Contact
        "contact.title": "დაგვიკავშირდით",
        "contact.address": "მისამართი",
        "contact.phone": "ტელეფონი",
        "contact.email": "ელ. ფოსტა",
        "contact.hours": "სამუშაო საათები",
        "contact.hours_text": "ორშაბათი - კვირა: 12:00 - 01:00",
        "contact.book_title": "დაიჯავშნეთ სტოლი",
        "contact.form.name": "თქვენი სახელი",
        "contact.form.email": "ელ. ფოსტა",
        "contact.form.phone": "ტელეფონი",
        "contact.form.date": "თარიღი",
        "contact.form.time": "დრო",
        "contact.form.guests": "სტუმრების რაოდენობა",
        "contact.form.message": "განსაკუთრებული მოთხოვნები",
        "contact.form.submit": "დაჯავშნა",
        
        // Footer
        "footer.about": "ბათუმის წამყვანი დესტინაცია კრაფტ ლუდის, გურმეტული ბურგერების და დაუვიწყარი გამოცდილებისთვის. შემოგვიერთდით კარგი საკვების, სასმელების და ატმოსფეროსთვის.",
        "footer.links": "სწრაფი ბმულები",
        "footer.hours": "სამუშაო საათები",
        "footer.weekdays": "ორშაბათი - ხუთშაბათი:",
        "footer.weekend": "პარასკევი - შაბათი:",
        "footer.sunday": "კვირა:",
        "footer.copyright": "© 2023 Creatoria Pub. ყველა უფლება დაცულია.",
        
        // Page title
        "title": "Creatoria Pub | ბათუმის წამყვანი ლუდის და ბურგერების გამოცდილება"
    },
    ru: {
        // Navigation
        "nav.home": "Главная",
        "nav.about": "О нас",
        "nav.menu": "Меню",
        "nav.gallery": "Галерея",
        "nav.contact": "Контакты",
        
        // Hero
        "hero.subtitle": "Дом крафтового пива, гурме бургеров и спортивных трансляций в Батуми",
        "hero.view_menu": "Посмотреть меню",
        "hero.book_table": "Забронировать стол",
        
        // About
        "about.title": "Наша история",
        "about.text1": "Добро пожаловать в Creatoria Pub, ведущее место в Батуми для изысканной еды, отборного крафтового пива и незабываемых впечатлений. Расположенный в самом сердце города, мы стали любимым местом как для местных жителей, так и для гостей.",
        "about.text2": "Наша страсть к качеству очевидна в каждом блюде, которое мы подаем, особенно в наших легендарных бургерах, которые называют \"лучшими в Грузии\". В сочетании с широким выбором бельгийского и крафтового пива мы предлагаем гастрономический опыт, который удовлетворяет все чувства.",
        "about.text3": "Будь вы здесь, чтобы посмотреть важный матч на наших многочисленных экранах, насладиться неформальным ужином с друзьями или испытать нашу живую атмосферу во время мероприятий, Creatoria Pub обещает исключительное времяпрепровождение.",
        "about.feature1.title": "Гурме еда",
        "about.feature1.text": "От наших знаменитых бургеров до европейской классики - каждое блюдо готовится из премиальных ингредиентов.",
        "about.feature2.title": "Выбор крафтового пива",
        "about.feature2.text": "Широкий ассортимент бельгийского разливного и местного крафтового пива для удовлетворения любого вкуса.",
        "about.feature3.title": "Спортивные трансляции",
        "about.feature3.text": "Смотрите все важные матчи на наших больших экранах в лучшей атмосфере города.",
        "about.feature4.title": "Мероприятия",
        "about.feature4.text": "Регулярная живая музыка и специальные мероприятия для улучшения вашего опыта в пабе.",
        
        // Menu
        "menu.title": "Наше меню",
        "menu.all": "Все",
        "menu.burgers": "Бургеры",
        "menu.mains": "Основные блюда",
        "menu.snacks": "Закуски",
        "menu.drinks": "Напитки",
        "menu.show_more": "Показать больше позиций",
        "menu.show_less": "Показать меньше позиций",
        
        // Gallery
        "gallery.title": "Галерея",
        
        // Contact
        "contact.title": "Свяжитесь с нами",
        "contact.address": "Адрес",
        "contact.phone": "Телефон",
        "contact.email": "Эл. почта",
        "contact.hours": "Часы работы",
        "contact.hours_text": "Понедельник - Воскресенье: 12:00 - 01:00",
        "contact.book_title": "Забронировать стол",
        "contact.form.name": "Ваше имя",
        "contact.form.email": "Эл. почта",
        "contact.form.phone": "Телефон",
        "contact.form.date": "Дата",
        "contact.form.time": "Время",
        "contact.form.guests": "Количество гостей",
        "contact.form.message": "Особые пожелания",
        "contact.form.submit": "Забронировать",
        
        // Footer
        "footer.about": "Ведущее место в Батуми для крафтового пива, гурме бургеров и незабываемых впечатлений. Присоединяйтесь к нам за хорошей едой, напитками и атмосферой.",
        "footer.links": "Быстрые ссылки",
        "footer.hours": "Часы работы",
        "footer.weekdays": "Понедельник - Четверг:",
        "footer.weekend": "Пятница - Суббота:",
        "footer.sunday": "Воскресенье:",
        "footer.copyright": "© 2023 Creatoria Pub. Все права защищены.",
        
        // Page title
        "title": "Creatoria Pub | Ведущий опыт пива и бургеров в Батуми"
    }
};

// Current language
let currentLanguage = 'en';

// Language Switcher
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Special case for page title
    if (translations[lang] && translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }
    
    // Update dropdown button text
    const dropdownBtn = document.querySelector('.dropdown-btn span');
    if (dropdownBtn && dropdownBtn.getAttribute('data-translate') === 'menu.show_more') {
        if (dropdownBtn.classList.contains('active')) {
            dropdownBtn.textContent = translations[lang]['menu.show_less'];
        } else {
            dropdownBtn.textContent = translations[lang]['menu.show_more'];
        }
    }
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Load preferred language from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
    
    // Set active button
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === savedLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Mobile Menu Toggle
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a, .cta-buttons a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('active');
        });
    });

    // Header Background on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(44, 44, 44, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--primary)';
        }
    });

    // ========== MENU FUNCTIONALITY ==========
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const allMenuItems = document.querySelectorAll('.menu-item');
    
    // Initially show only first 6 items
    hideExtraItems();
    
    // Dropdown button click
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function() {
            const isExpanded = this.classList.contains('active');
            
            if (isExpanded) {
                // Show less - hide items beyond first 6
                hideExtraItems();
                this.querySelector('span').textContent = translations[currentLanguage]['menu.show_more'];
                this.classList.remove('active');
                
                // Scroll to top of menu section when showing less
                setTimeout(() => {
                    document.querySelector('#menu').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
                
            } else {
                // Show more - show all items in current category
                showAllItemsInCategory(currentCategory);
                this.querySelector('span').textContent = translations[currentLanguage]['menu.show_less'];
                this.classList.add('active');
            }
        });
    }
    
    // Category filter
    let currentCategory = 'all';
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.getAttribute('data-category');
            
            // Reset dropdown state
            if (dropdownBtn) {
                dropdownBtn.classList.remove('active');
                dropdownBtn.querySelector('span').textContent = translations[currentLanguage]['menu.show_more'];
            }
            
            // Filter items by category - USE ONLY CLASSES
            allMenuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (currentCategory === 'all' || itemCategory === currentCategory) {
                    item.classList.remove('filtered-out');
                } else {
                    item.classList.add('filtered-out');
                }
            });
            
            // Hide extra items
            hideExtraItems();
        });
    });
    
    function hideExtraItems() {
        const visibleItems = Array.from(document.querySelectorAll('.menu-item:not(.filtered-out)'));
        
        visibleItems.forEach((item, index) => {
            if (index >= 6) {
                item.classList.add('hidden');
            } else {
                item.classList.remove('hidden');
            }
        });
    }
    
    function showAllItemsInCategory(category) {
        const itemsToShow = Array.from(document.querySelectorAll('.menu-item')).filter(item => {
            const itemCategory = item.getAttribute('data-category');
            return (category === 'all' || itemCategory === category) && !item.classList.contains('filtered-out');
        });
        
        itemsToShow.forEach(item => {
            item.classList.remove('hidden');
        });
    }
});
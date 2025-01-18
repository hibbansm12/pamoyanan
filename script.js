// Tunggu sampai dokumen sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            document.querySelector(".navbar").classList.add("scrolled");
        } else {
            document.querySelector(".navbar").classList.remove("scrolled");
        }
    });

    // Update konfigurasi ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 100,
        reset: true,
        mobile: true,
        viewFactor: 0.2
    });

    // Konfigurasi animasi untuk setiap section tetap sama
    sr.reveal('#home .carousel-caption', {});
    sr.reveal('#about h2', {});
    sr.reveal('#about .col-md-6:first-child', { delay: 200 });
    sr.reveal('#about .col-md-6:last-child', { delay: 300 });

    sr.reveal('#profil h2', {});
    sr.reveal('#profil .card:nth-child(1)', { delay: 200 });
    sr.reveal('#profil .card:nth-child(2)', { delay: 300 });
    sr.reveal('#profil .card:nth-child(3)', { delay: 400 });

    sr.reveal('#fasilitas h2', {});
    sr.reveal('#fasilitas .card', { interval: 150 });

    sr.reveal('#berita h2', {});
    sr.reveal('#berita .card', { interval: 150 });

    sr.reveal('#galeri h2', {});
    sr.reveal('#galeri .col-md-4', { interval: 150 });

    sr.reveal('#kontak h2', {});
    sr.reveal('#kontak form', { delay: 200 });
    sr.reveal('#kontak .col-md-6:last-child', { delay: 300 });

    sr.reveal('footer .col-md-4', { interval: 150 });

    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('mobile-open');
    });

    // Fungsi untuk highlight navbar sesuai section
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function highlightNavbar() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Panggil fungsi saat scroll
    window.addEventListener('scroll', highlightNavbar);
    highlightNavbar(); // Panggil sekali saat halaman dimuat

    // Animasi smooth scroll saat klik navbar link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });

            // Tutup navbar mobile jika terbuka
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    });
});

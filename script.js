//About section toggler
var about_nav_links = document.querySelectorAll('.about-section-side-nav-link');
var about_contents = document.querySelectorAll('.about-section-side-content-text');

for(var i = 0; i<about_nav_links.length; i++)
{
    about_nav_links[i].addEventListener('click', function(e)
    {
        //Si le ien est déjà actif, on ne fait rien 
        if(this.classList.contains('active-link'))
        {
            return false
            
        }
        //on desactive le lien et le contenu actifs
        document.querySelector('.about-section-side-nav-link.active-link').classList.remove('active-link')
        document.querySelector('.about-section-side-content-text.active-content').classList.remove('active-content')

        //on active le lien cliqué et le contenu correspondant
        
        this.classList.add('active-link')
        
        document.querySelector('#'+this.getAttribute('section')).classList.add('active-content')
        
    });
}

/* Navbar wrapper*/
var nav_wrapper= document.querySelector('.nav-wrapper')
nav_wrapper.addEventListener('click', function(e)
{
    var links=document.querySelector('.nav-links')
    console.log(links.classList.contains("opened"))
    if(links.classList.contains('opened'))
    {
        links.classList.remove("opened")
        document.querySelector('.nav-wrapper i').classList.remove('fa-xmark')
        document.querySelector('.nav-wrapper i').classList.add('fa-bars')
        return false
    }
    
    links.classList.add('opened')
    document.querySelector('.nav-wrapper i').classList.remove('fa-bars')
    document.querySelector('.nav-wrapper i').classList.add('fa-xmark')
})

/* Navbar closer*/
var nav_closer= document.querySelector('.nav-closer')
nav_closer.addEventListener('click', function(e)
{
    var links=document.querySelector('.nav-links')
    console.log(links.classList.contains("opened"))
    if(links.classList.contains('opened'))
    {
        links.classList.remove("opened")
        document.querySelector('.nav-wrapper i').classList.remove('fa-xmark')
        document.querySelector('.nav-wrapper i').classList.add('fa-bars')
        return false
    }
})
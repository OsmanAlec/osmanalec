//Show achievements

const achievements = document.querySelectorAll('.achievement');
window.addEventListener('scroll', checkAchievements);

checkAchievements();

function checkAchievements () {
    const triggerBottom = window.innerHeight / 5 * 4;

    achievements.forEach((achievement) => {
        const achievementTop = achievement.getBoundingClientRect().top;
    
        if(achievementTop < triggerBottom){
            achievement.classList.add('show');
        }
        else {
            achievement.classList.remove('show');
        }
    });
}


//Hamburger menu
const hamMenu = document.querySelector('.ham-menu');

const topNavMenu = document.querySelector('.topnav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    topNavMenu.classList.toggle('active');
})
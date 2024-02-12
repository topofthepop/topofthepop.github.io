const quoteDisplay = document.getElementById('quote');
const cookieDisplay = document.getElementById('cookie');

let quotes = `Delight the world with compassion, kindness and grace.
The early bird gets the worm, but the second mouse gets the cheese.
Some days you are pigeon, some days you are statue. Today, bring umbrella.
The fortune you seek is in another cookie.
Experience is what you have left when everything else gone.
A closed mouth gathers no feet.
A conclusion is simply the place where you got tired of thinking.
A cynic is only a frustrated optimist.
A foolish man listens to his heart. A wise man listens to cookies.
Your road to glory will be rocky but fulfilling.
Courage is not simply one of the virtues, but the form of every virtue at the testing point.
Patience is your alley at the moment. Don’t worry!
Nothing is impossible to a willing heart.
Don’t worry about money. The best things in life are free.
Don’t pursue happiness – create it.
`;

let quotesArr = quotes.split('\n');

let cookieArr = ['https://i.imgur.com/Sn8MMSC.png', 'https://i.imgur.com/NYWpwAz.png', 'https://i.imgur.com/dz5VHVK.png', 'https://i.imgur.com/hMGFvsD.png', 'https://i.imgur.com/MkClHQC.png', 'https://i.imgur.com/aRPW9mf.png'];
const retryButton = document.querySelector('.button');
const buttonPaper = document.querySelector('.buttonPaper');

window.onload = function init(){
    showFortune();
};

function showFortune(){
    const cookie = cookieArr[Math.floor(Math.random() * cookieArr.length)];

    cookieDisplay.setAttribute('src', cookie);
    cookieDisplay.addEventListener('click', () => {
        //blur background effect
        const randomIndex = Math.floor(Math.random() * quotesArr.length);
    

        const blurBg = document.createElement('div');
        blurBg.className = 'blurBg';
        blurBg.id = 'blurBg';

        document.body.append(blurBg);

        cookieDisplay.style.display = 'none';
        
        //paper
        const paper = document.createElement('div');
        paper.className = 'paper';
        paper.id = 'paper';
  
        quoteDisplay.append(paper);

        const fortune = document.getElementById('fortune');
        fortune.style.animation = 'typing 1s linear';

        setTimeout(() => {
            paper.style.animation = 'rotate 1s linear';
            paper.style.animationFillMode = 'forwards'}, 500);

        setTimeout(move, 1700);

        setTimeout(() => {
            document.body.style.backgroundImage = 'url()';
            fortune.style.whiteSpace = 'normal';
            blurBg.style.filter = `blur(1px)`;
            paper.style.boxShadow = '0px 4px 80px 1px #212121';

        }, 2900);

        setTimeout(() => {

            retryButton.style.animation = 'appearButton 1s linear';
            retryButton.style.animationFillMode = 'forwards';

            buttonPaper.style.left = '56%';
            buttonPaper.style.top = '39%';

            retryButton.addEventListener('animationend', () => buttonPaper.style.width = '90%');

        }, 4700)

    });
}

function move(){
    const paper = document.getElementById('paper');
    const blurBg = document.querySelector('.blurBg');
    const span = document.getElementById('fortune');

    paper.style.width = 100 + '%';
    blurBg.style.opacity = '1';
    span.style.opacity = '1';
}

const retry = () => {
    quoteDisplay.removeChild(document.getElementById('paper'));
    document.body.removeChild(document.getElementById('blurBg'));

    const cookie = cookieArr[Math.floor(Math.random() * cookieArr.length)];
    cookieDisplay.setAttribute('src', cookie);
    cookieDisplay.style.display = 'flex';
};

retryButton.addEventListener('click', () => {
    retry();
    document.body.style.backgroundImage = 'url(https://i.imgur.com/ltypNpZ.png)';

    buttonPaper.style.width = '20%';

    retryButton.addEventListener('transitionend', () => {
        retryButton.style.animation = 'disappearButton 1s linear';
        retryButton.style.animationFillMode = 'forwards';
    });

  

});

//Fix extra messages array
let fortune2split = fortune2.split('\n');

for(let i = 0; i < fortune2split.length; i++){
    if(!quotes.includes(fortune2split[i])){
        quotesArr.push(fortune2split[i])
    }
}
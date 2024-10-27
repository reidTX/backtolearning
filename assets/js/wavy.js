const letters = document.querySelectorAll(".wavy-text span");
letters.forEach((letter, index) =>{
                letter.style.animationDelay = `${index * 0.1}s`;
                })
let text = document.getElementById("text");

function AnimateText()
{
    text.removeEventListener('click', AnimateText);
    text.style.animationName = 'scale';
    text.style.cursor = 'default';
    setInterval(() => setAnimationText(), 1000)
}


export function setAnimationText()
{
    text.addEventListener('click', AnimateText);
    text.style.animationName = 'none';
    text.style.cursor = 'pointer';
}
//আমরা যে কাজ টি if else দিয়ে করতাম সেই কাজ টি switch case দিয়ে খুব সহজে করা যায়। if else দিয়ে করতে গেলে javascript -if else condition block e ঢুকে একটা একটা চেক করে তার পর যেটা সত্য হয় ওই টা ই আউটপুট দেয় কিন্তু switch case এ সরাসরি ঢুকে পরে অর্থাৎ একটা একটা চেক না করে condition ঢুকে পরে সরাসরি এবং আউটপুট দেয়।

const color='magenta';
//if else diye dibugging
if (color=='red') {
    console.log('The color is red')
} 
else if (color=='green') {
    console.log('The color is green')
}
else if (color=='blue') {
    console.log('The color is blue')
}
else if (color=='yellow') {
    console.log('The color is yellow')
}
else if (color=='white') {
    console.log('The color is white')
}
else {
    console.log('The color is black')
}
//switch diye debugging
switch (color) {
    case 'red':
        console.log('The color is red')
        break;
    case 'green':
        console.log('The color is green')
        break;
    case 'blue':
        console.log('The color is blue')
        break;
    case 'yellow':
        console.log('The color is yellow')
        break;
    case 'white':
        console.log('The color is white')
        break;

    default:
        console.log('The color is black')
        break;
}
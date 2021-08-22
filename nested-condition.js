const up=80;
const under=79;
const total=up+under;
if (up>under) {
    if (total!=up+under) {
        console.log('Nested condition executed')
    }else{
        console.log('nested else condition executed')
    }
} else {
    console.log('Else condition executed')
}
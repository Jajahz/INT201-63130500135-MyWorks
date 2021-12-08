zodiac = (year) => {
    zod = ['monkey', 'rooster', 'dog', 
            'pig', 'rat', 'ox',
            'tiger', 'rabbit', 'dragon', 
            'snake', 'horse', 'sheep']
    return zod[(year%12)];
}
console.log(zodiac(2001));
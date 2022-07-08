const axios = require('axios');
const { Recipe, Diet } = require('../db');
const { YOUR_API_KEY } = process.env;

const getAllDiet = async () => {
    try {
        let diet = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
        );
        let types = await diet.data.results.map((e) => e.diets);
        // console.log(types, 'Prueba---');
        let otro = types.flat();
        // console.log(otro, 'Otro----');
        let Tipodieta = [
            ...new Set(otro),
            'vegetarian',
            'lacto vegetarian',
            'ovo vegatarian',
        ];
        // console.log(Tipodieta);
        Tipodieta.forEach(async (e) => {
            await Diet.findOrCreate({
                where: { name: e },
            });
        });
        const allDiets = await Diet.findAll();
        console.log('Todas las dietas  en DB');
        return allDiets;
    } catch (error) {
        console.log('Tuvimos un error');
    }
};
module.exports = { getAllDiet };

const axios = require('axios');
const { Recipe, Diet } = require('../db');
const { YOUR_API_KEY } = process.env;
const getApiInfo = async () => {
    try {
        let json = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
        );
        let data = json.data.results;
        // console.log(data);

        let all = data.map((e) => {
            return {
                id: e.id,
                image: e.image,
                name: e.title.toLowerCase(),
                diets: e.diets.map((e) => {
                    return { name: e };
                }),
                summary: e.summary,
                health_score: e.healthScore,
                dishtypes: e.dishTypes,
                step_by_step: e.analyzedInstructions[0]?.steps.map((e) => {
                    return {
                        number: e.number,
                        step: e.step,
                    };
                }),
            };
        });

        // console.log(all);
        return all;
    } catch (error) {
        console.log(`Tuvimos un ${error}`);
    }
};

const getDBInfo = async () => {
    const db = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });
    return db;
};

const getAllRecipe = async () => {
    const api = await getApiInfo();
    const db = await getDBInfo();
    const all = api.concat(db);
    return all;
};

module.exports = { getApiInfo, getDBInfo, getAllRecipe };

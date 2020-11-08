const axios = require('axios');
const cheerio = require('cheerio');
const page_url = 'https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D1%83%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8';


async function getRusRegions() {
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    const table = $('table.standard:nth-child(4)');
    const regions = [];
    table.find('tbody tr').each((i, element) => {
        const $element = $(element);
        const region = {};
        region.name = $element.find('td').text().split(' ', 2).slice(1);
        console.log(region);
    });
}

getRusRegions(); 
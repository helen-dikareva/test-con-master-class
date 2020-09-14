import { RequestMock, Selector } from 'testcafe';

const weatherData = require('./weather.json');

const mock = RequestMock()
    .onRequestTo(new RegExp('https://api.openweathermap.org/data/2.5/weather'))
    .respond(weatherData, 200, { 'Access-Control-Allow-Origin': '*' });

fixture `Fixture`
    .page('https://rawfour.github.io/weather-app-react/')
    .requestHooks(mock);

test('test', async t => {
    const temperatureElement = Selector('h3');
    const descriptionElement = Selector('h4').nth(1);

    await t
        .typeText('input[type=text]', 'New York')
        .pressKey('enter')
        .expect(temperatureElement.textContent).contains('30')
        .expect(descriptionElement.textContent).eql('Clear sky');
});

import Route from '@ember/routing/route';

export default class ListOfCountriesRoute extends Route {

    async model(params) {
        let response = await fetch('/api/countries-list.json');
        let countryList = await response.json();
        return countryList;
      }
}

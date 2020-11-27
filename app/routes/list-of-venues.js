import Route from '@ember/routing/route';

export default class ListOfVenuesRoute extends Route {
    async model(params) {
        let venueResponse = await fetch('/api/summit-venues.json');
        let venueList = await venueResponse.json();
        return venueList;
      }
}

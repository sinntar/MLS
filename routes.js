const routes = require("next-routes")();

routes
  .add("/reService/new", "/reService/new")
  .add(
    "/reService/:address/listings/listingNew",
    "/reService/listings/listingNew"
  )
  .add(
    "/reService/:address/listings/listingsSummary",
    "/reService/listings/listingsSummary"
  )
  .add(
    "/reService/:address/listings/media/:propertyId/listingImages",
    "/reService/listings/media/listingImages"
  );

module.exports = routes;

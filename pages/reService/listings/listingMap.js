const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
import REService from "../../../ethereum/reService";

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker, index) => (
        <Marker
          key={marker.propertyId}
          position={{ lat: marker.latitude , lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);
class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props.address);
    this.state = {
      address: this.props.address
    }
  }
  componentWillMount() {
    this.setState({ markers: [] })
  }

  async componentDidMount() {
    console.log(this.state.address);
    const reService = REService(this.state.address);

    console.log(reService);

    var result = [];
    //var locationCount = 1;
    var locationCount = await reService.methods
      .getPropertyLocationCount()
      .call();

    for(var i = 0; i < locationCount; i ++)
    {
      await reService.methods.propertyLocationData(i).call(function(err, res){
          //do something with res here
          console.log(res); //for example
          result.push({
            propertyId : res.propertyId,
            longitude : parseFloat(res.longitude),
            latitude : parseFloat(res.latitude)
          });
        });
    }


      this.setState({ markers: result });

    console.log("Media Count -> " + result);
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}

export default Map;

pragma solidity ^0.4.19;


contract REServiceFactory {

    address[] public deployedREServices;

    function CreateREService(uint minContr) public {
        address newREService = new REService(minContr, msg.sender);
        deployedREServices.push(newREService);
    }

    function deployedREServices() public view returns (address[]) {
        return deployedREServices;
    }


}


contract REService {

    struct BasicPropertyInfo {
        string propertyId;
        address brokerId;
        string propertyType;
        string saleType; // Lease/Sale
        string zipCode;
        uint size;
        uint price;
    }

    struct BrokerInfo {
        address brokerId;
        string name;
        string phone;
        string email;
        string description;
    }

    struct PropertyMedia {
       string propertyId;
       string mediaURL;
   }

    BasicPropertyInfo[] public propertyListings;
    BrokerInfo[] public brokersInfo;
    PropertyMedia[] public propertyMediaData;
    uint public minContribution;
    address public broker;
    mapping(address => bool) public brokers;
    string ipfsHash;

    modifier restricted() {

        require(msg.sender == broker);
        _;
    }

    function REService(uint minContr, address creator) public {
        broker = creator;
        brokers[msg.sender] = true;
        minContribution = minContr;
    }

    function createBrokerProfile(string name,
                                    string phone,
                                    string email,
                                    string description) public restricted {


        BrokerInfo memory newBrokerInfo =  BrokerInfo({
            brokerId: msg.sender,
            name: name,
            phone: phone,
            email: email,
            description: description
        });
        brokersInfo.push(newBrokerInfo);
    }

    function uploadPropertyMedia(string propertyId, string mediaURL) public {
        PropertyMedia memory newPropertyMedia = PropertyMedia ({
            propertyId: propertyId,
            mediaURL:mediaURL
        });
        propertyMediaData.push(newPropertyMedia);
    }

    function createListing (string propertyId,
                            string propertyType,
                            string saleType,
                            string zipCode,
                            uint size,
                            uint price) public {

        BasicPropertyInfo memory newBasicPropertyInfo = BasicPropertyInfo({
            propertyId: propertyId,
            brokerId: msg.sender,
            propertyType: propertyType,
            saleType: saleType,
            zipCode: zipCode,
            size: size,
            price: price
        });
        propertyListings.push(newBasicPropertyInfo);
    }

    function getBasicPropertyInfoCount() public view returns(uint) {
        return propertyListings.length;
    }

    function getPropertyMediaCount() public view returns(uint) {
        return propertyMediaData.length;
    }
    function sendHash(string x) public {
        ipfsHash = x;
    }

    function getHash() public view returns (string x) {
        return ipfsHash;
    }

}

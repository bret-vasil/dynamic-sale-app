module.exports = {
  //url : 'mongodb://<user>:<pass>@mongo.onmodulus.net:27017/uw45mypu'
  url : 'mongodb://localhost:27017/sales'
}

var mongoose = require('mongoose');
var Grid = require('gridfs-stream');

mongoose.connect('mongodb://localhost/sales');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  var gfs = Grid(db, mongoose);
  console.log("opened sesame!");
  var saleSchema = mongoose.Schema({ 
    CustomerID: String,
    Transaction: String,
    time: String,
    PurchaseAmount: Number,
    Cost: Number,
    ItemType: String,
    date: String
    },
    { collection : 'sales_data' });

    var Sale = mongoose.model('Sale', saleSchema);

    var mySale = new Sale({});
    
    // Sale.find(function (err, sales) {
    //     if (err) 
    //       return console.error(err);
    //     console.log(sales);
    //   });
   
    Sale.find({date: "3/25/2014"}, function (err, dates) {
          if (err)
            return console.error(err);
          console.log('fine');
      });
    
        // Sale.find({CustomerID: "NA14SF00002"}, function (err, customer) {
        //   if (err)
        //     return console.error(err); 
        //   var JSONObject = JSON.parse(customer);
        //   });

    });

        //console.log(sales);
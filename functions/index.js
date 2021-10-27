// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();


/* 
Check and retrieve data on a specific user using their Email as their ID
 Example user below
{
    "id": "volutpat.nunc@tellusfaucibusleo.edu",
	"name": "Jeanette Rich",
	"email": "volutpat.nunc@tellusfaucibusleo.edu",
    "city": "Monterrey",
    "area": "Centro",
    "type": "Customer"
  }
*/
exports.getUser = functions.https.onRequest(async (req, res)=>{
    const email = req.query.email;
    const userRef = db.collection('users').doc(email);
    const doc = await userRef.get();

    //check if user exists
    if(!doc.exists){
        res.json({res: 'user ' + email + ' does not exist'})
    }
    else{
        res.json(doc.data());
    }
});

//update a users information by inputting any fields to update
exports.updateUser = functions.https.onRequest(async(req, res)=>{
    
    //user fields
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;
    const area = req.body.area;
    const type = req.body.type;
    const data = {};

    //create dynamic data set to update
    if(name!= null){data['name'] = name;}
    if(city!= null){data['city'] = city;}
    if(area!= null){data['area'] = area;}
    if(type!= null){data['type'] = type;}

    const userRef = db.collection('users').doc(email);
    const doc = await userRef.get();
    if(!doc.exists){
        res.json({res: 'user ' + email + ' does not exist'})
    }
    else{
        userRef.update(data)
        res.json({res: req.body});
    }

});


/*
EXAMPLE ORDER
[
	{
		"id": 1,
		"user": 10,
		"pharmacy": 1,
		"order_datetime": "2021-10-26T16:26:00",
		"sent_datetime": "",
		"status": "waiting",
		"content": ["Tylenol"],
		"total": 12.5
	}

*/

//Get the orders associated with a specific pharmacy using as input the pharmacy ID
exports.getOrdersByPharmacy = functions.https.onRequest(async(req, res)=>{
    
    const pharmacyID = req.query.pharmacyID;
    const orderRef = db.collection('orders');

    const snapshot = await orderRef.where('pharmacy', '==', parseInt(pharmacyID)).get();
    if(snapshot.empty){
        res.json({res: 'could not find any orders for pharmacy ' + pharmacyID});
        return
    }
    //create data set to return
    data = {}
    snapshot.forEach(doc =>{
        data[doc.id] = doc.data();
    })
    res.json(data);
});

// getUser <-- done 
// updateUser() <-- done
// getOrdersByPharmacy() <-- done
// getProductsByPhramacy(area)
// getProductsByWarehouse()
// createOrder()
// updateOrder() //change order status
// requestRestock(pharmacia, productos, cantidades)
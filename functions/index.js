// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

//modulo express para que este script pueda responder cosas a los usuarios
const express = require('express')
const app= express()

//funcion para comprobar la conexion
app.get('/hello-world', (req, res)=>{
    return res.status(200).json({message:'Hello World!'})
});
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


//creates the order
exports.createOrder = functions.https.onRequest(async (req, res)=>{

    /*
    "id": 1,
		"user": 10,
		"pharmacy": 1,
		"order_datetime": "2021-10-26T16:26:00",
		"sent_datetime": "",
		"status": "waiting",
		"content": ["Tylenol"],
		"total": 12.5
    */
    const id = Number(req.query.id);
    const user = Number(req.query.user);
    const pharmacy = Number(req.query.pharmacy);
    const order_datetime =new Date();
    const sent_datetime=new Date(order_datetime.getTime() + 7200000)
    const status=req.query.status;
    const content= req.query.content;
    const total = req.query.total;

    //conecta con la coleccion 'order'
    const userRef = db.collection('order');
    //busca si existe algun doc con el id  recibido
    const queryRefU = await userRef.where('id', '==', id).get();

    if (queryRefU.empty){
        const writeResult = await userRef.doc().set({
            id: id,
            user:user,
            pharmacy:pharmacy,
            order_datetime:order_datetime,
            sent_datetime:sent_datetime,
            status:status,
            content:content,
            total:total
            });
        res.set('Access-Control-Allow-Origin', '*');
        return res.json({result: `Order con ID: ${id} ha sido añadido.`});
    }
    else{
        //si existe un doc con el id recibido devuelve un mensaje de error
        res.set('Access-Control-Allow-Origin', '*');
        return res.json({result: `El id de la orden  ya fue registrado`});
    }
});

exports.updateOrder = functions.https.onRequest(async(req, res)=>{
    //recibe la order id 
    const id = Number(req.query.id);

    //conecta con la coleccion 
    const userRef = db.collection('order');
    //busca el doc que coincide con el libro_id
    const snapshot = await userRef.where('id', '==', id).get()

    if (snapshot.empty) {
        //si ningun libro coincide manda mensaje de error
        res.set('Access-Control-Allow-Origin', '*');
        return res.json({result: `Ningúna orden coincide con el ID.`});
      }
        snapshot.forEach(doc => {
        //modifica el status de la orden segun el status recibido
        doc.ref.update({
            status: "sent",
            sent_datetime=new Date()
        });
      });
      //devuelve mensaje de exito
      res.set('Access-Control-Allow-Origin', '*');
      return res.json({result: `El id ha sido modificado.`});

});



exports.getProductsByWarehouse = functions.https.onRequest(async(req, res)=>{
    
    const warehouseID = req.query.warehouseID;
    const orderRef = db.collection('orders');

    const snapshot = await orderRef.where('warehouses', '==', parseInt(warehouseID)).get();
    if(snapshot.empty){
        res.json({res: 'could not find any products for warehouse ' + warehouseID});
        return
    }
    //create data set to return
    data = {}
    snapshot.forEach(doc =>{
        data[doc.id] = doc.data();
    })
    res.json(data);
});

exports.app=functions.https.onRequest(app);

// getUser <-- done 
// updateUser() <-- done
// getOrdersByPharmacy() <-- done
// getProductsByPhramacy(area)
// getProductsByWarehouse()
// createOrder() <-- done 
// updateOrder() //change order status <-- done 
// requestRestock(pharmacia, productos, cantidades)
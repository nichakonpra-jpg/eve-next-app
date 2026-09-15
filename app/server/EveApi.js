import express from 'express';

const app = express();
const port = 8406;

// Object array []
const myShop = [
    {
    shopId: 100,
    shopName: "Nike",
    shopContact: "admin.nike@mail.com",
    shopAddress: "Dindaeng, Bangkok, 10400",
    shopOpen: true
    },
    {
    shopId: 200,
    shopName: "Uniqlo",
    shopContact: "admin.uniqlo@mail.com",
    shopAddress: "Huai Khwang, Bangkok, 10400",
    shopOpen: true
    },
    {
    shopId: 300,
    shopName: "McShop",
    shopContact: "mc.shop@mail.com",
    shopAddress: "Bangyhai, Nontaburi, 10400",
    shopOpen: false
    }
];

// http://localhost:8406/
app.get('/', (req, res) => {
    res.send('Hello, Nichakon Prakong.');
});

// http://localhost:8406/shops/300
app.get('/shops{/:shopId}', (req, res, next) => {
    try{
    let shid = Number(req.params.shopId);
    if(isNaN(shid)){
        res.json(myShop)
      //  res.send("Please Provide the specific shop ID, please try again.")
      // throw new Error('Please provide the specific shop ID, Please Try again.')
    }
    const myRes = myShop.filter(
        myObj => {return (myObj.shopId === shid) }
    );

    const isEmptyArray = Array.isArray(myRes) && myRes.length === 0
    if(isEmptyArray){
        res.send("Shop ID not found, please try again.")
        throw new Error("Shop ID not found, please try again.")
    }

  //  let myText = '';
   // myText+= `<h1>Shop information:</h1><hr/>`;
   // myText+= `Shop ID: ${myRes[0].shopId}<br/>`;
   // myText+= `Shop Name: ${myRes[0].shopName}<br/>`;
   // myText+= `Contact: ${myRes[0].shopContact}<br/>`;
   // myText+= `Address: ${myRes[0].shopAddress}<br/>`;
   // myText+= `Shop Open: ${myRes[0].shopOpen}<br/>`;
   // res.send(myText);
    res.json(myRes[0]); // {..}
    } catch(error) {
        next(error);
    }
});


app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
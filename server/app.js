const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const { User, Collection, Lot, Transaction } = require("./models");
// Firebase //////////////////
var admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./mahakarya-e29e0-firebase-adminsdk-ytegx-7aa4bdcba2.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

// END      //////////////////

const db = getFirestore();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/collections/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lots = await Lot.findAll({
      where: { collectionId: id },
      include: [
        {
          model: User,
          attributes: ["id", "fullname"]
        },
        {
          model: Collection,
          attributes: ["id", "name"]
        }
      ]
    });
    res.status(200).json(lots);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.get("/lots/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lot = await Lot.findOne({
      where: { id },
      include: [
        {
          model: User,
          attributes: ["id", "fullname"]
        },
        {
          model: Collection,
          attributes: ["id", "name", "startDate", "endDate"]
        }
      ]
    });
    res.status(200).json(lot);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.post("/bid/:lotId", async (req, res) => {
  try {
    const { lotId } = req.params;
    const { userId, sum } = req.body;

    const highestBid = await db
      .collection("HighestBid")
      .doc(lotId)
      .get()
      .then((doc) => {
        return doc.get("bidID");
      });
    // console.log(highestBid);

    const user = await User.findOne({
      where: { id: userId },
      attributes: ["id", "fullname", "totalMoney", "totalSpended"]
    });

    console.log(user);
    const availableMoney =
      parseInt(user.totalMoney) - parseInt(user.totalSpended);
    console.log("sisa: ", availableMoney);

    if (highestBid) {
      const highestBidInfo = await db.collection("bid").doc(highestBid).get();
      const lastPrice = highestBidInfo.get("price");
      const previousUserId = highestBidInfo.get("userId");
      if (sum <= lastPrice) {
        throw new Error("USER_BID_MUST_HIGHER");
      }

      if (sum > availableMoney) {
        throw new Error("USER_MONEY_NOT_ENOUGH");
      }

      const lastUser = await User.findOne({
        where: { id: previousUserId },
        attributes: ["id", "fullname", "totalSpended"]
      });
      await lastUser.update({
        totalSpended: lastUser.totalSpended - lastPrice
      });
      console.log(lastUser.totalSpended);
    }

    await user.update({
      totalSpended: parseInt(user.totalSpended) + parseInt(sum)
    });

    const bidRef = db.collection("bid");
    const { id: bidID } = await bidRef.add({
      price: +sum,
      userId: +userId,
      lotId: +lotId,
      createdAt: new Date()
    });

    const highestRef = db.collection("HighestBid").doc(lotId);
    await highestRef.set({
      bidID
    });

    res.status(200).json({ msg: "Success Bid" });
  } catch (error) {
    console.log(error);
    let msg = "Internal Server Error";
    let code = 500;
    if (error.message === "USER_BID_MUST_HIGHER") {
      msg = "Bid Must Higher than previous bid";
      code = 400;
    } else if (error.message === "USER_MONEY_NOT_ENOUGH") {
      msg = "User doesnt have enough avalible money to bid";
      code = 400;
    }
    res.status(code).json({ msg });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

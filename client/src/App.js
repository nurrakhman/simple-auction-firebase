import "./App.css";
import { Route, Routes } from "react-router";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Countdown from "react-countdown";
import firebase from "./config/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import swal from "sweetalert";

function App() {
  return (
    <Routes>
      <Route path="lot/:id" element={<DetailView />} />
    </Routes>
  );
}

function DetailView() {
  const { id } = useParams();
  const [lot, setLot] = useState();
  const [dataBid, setdataBid] = useState({
    userId: null,
    sum: null
  });

  const dbref = firebase.collection("bid");
  const query = dbref.orderBy("createdAt", "desc").limit(25);
  const [bids] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: DetailLots } = await axios.get(
          "http://localhost:4000/lots/" + id
        );
        setLot(DetailLots);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const dataBidHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/bid/" + id, {
        userId: dataBid.userId,
        sum: dataBid.sum
      });
      swal("Success!", data.msg, "success");
      console.log(data);
    } catch (error) {
      swal("Success!", error.response.data.msg, "error");
      console.log(error.response.data.msg);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdataBid(() => {
      return {
        ...dataBid,
        [name]: value
      };
    });
  };

  return (
    <div style={{ margin: "40px" }}>
      {/* <p>
        {JSON.stringify(lot)} - {JSON.stringify(bids)}
      </p> */}
      {lot && (
        <>
          <h1>{lot.name}</h1>
          <p>Collections: {lot.Collection.name}</p>
          <p>Seller: {lot.User.fullname}</p>
          <p>Star Bid: {lot.startingBid}</p>

          {/* <Countdown date={new Date(lot.endDate)} /> */}
          <Countdown
            date={new Date(lot.Collection.endDate)}
            renderer={(props) => (
              <div>
                {props.hours} Jam, {props.minutes} Menit, {props.seconds} Detik
              </div>
            )}
          />

          <br />
          <form>
            <label>
              <b>ID User:</b>
            </label>
            <br />
            <input
              type="text"
              id="fname"
              name="userId"
              value={setdataBid.userId}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label>
              <b>Jumlah:</b>
            </label>
            <br />
            <input
              type="text"
              id="fname"
              name="sum"
              value={setdataBid.sum}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="submit"
              value="Bid"
              onClick={(e) => dataBidHandler(e)}
            />
          </form>
          <br />

          <b>List Bidders:</b>
          {bids &&
            bids.map((e, i) => {
              if (e.lotId == id) {
                return (
                  <p key={i}>
                    {" "}
                    - {e.price} || userID: {e.userId}
                  </p>
                );
              }
            })}
        </>
      )}
    </div>
  );
}

export default App;

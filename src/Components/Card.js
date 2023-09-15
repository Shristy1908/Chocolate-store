import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./Cardsdata";
import "./style.css";
import { useDispatch } from "react-redux";
import {Add} from "../Redux/Actions/action";
import { NavLink } from "react-router-dom";
import { Alert } from "bootstrap";
import "./Card.css";

function Cards() {

  const [data,setData]=useState(Cardsdata);
  var count=1;

  const dispatch=useDispatch();

    const send = (e) => {
       count++;
      dispatch(Add(e));
     
    }
  console.log(count);

  return (
    <div className="container mt-3">

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((data,id)=>{
          
             return (
               <>
                 <Card
                   style={{ width: "20rem", height: "25rem", border: "none" }}
                   className="mx-2 mt-4 card_style"
                   key={id}
                 >
                   <NavLink to={`/cardDetail/${data.id}`}>
                     <Card.Img
                       variant="top"
                       src={data.imgdata}
                       style={{ height: "13rem" }}
                       className="mt-3"
                     />
                   </NavLink>

                   <Card.Body>
                     <p>
                       <Card.Title>{data.title}</Card.Title>
                     </p>

                     <Card.Text>
                       <strong>Price:</strong> ₹{data.price}
                     </Card.Text>
                     <div className="button_div d-flex justify-content-center">
                       <Button
                         variant="primary"
                         onClick={() => send(data)}
                         className="col-lg-12"
                         id="btn"
                         style={{ backgroundColor: "#2f466b" }}
                       >
                         Add to Cart
                       </Button>   
                       <br />
                     </div>
                   </Card.Body>
                 </Card>
               </>
             );
          })
        }
       
      </div>
    </div>
  );
}

export default Cards;

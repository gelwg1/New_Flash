
import React from 'react';
import { Link } from "react-router-dom";


export default function Dashboard() {
  return (
      <div>
          <div className="container content">
              <div className="row">
                  <div className="col-sm-4 talk">
                      <h1>Flashcard </h1>
                      <h1>Học nhanh, nhớ nhanh</h1>
                      <br />
                      <h6 className="bold-four">
                          Tạo và sử dụng flashcard để học ngôn ngữ hiệu quả hơn 
                  </h6>
                      <br />
                      
                      <h6><Link className="btn btn-dark start start-two" to="/New_Flash/createcard">Get Started</Link></h6>
                  </div>
                  <div className="col-sm-8 showcase-img">
                      {/* <div className="circle"></div> */}
                  </div>
              </div>
          </div>         
      </div>
  );
}

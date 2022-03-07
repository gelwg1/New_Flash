
import React from 'react';


export default function Dashboard() {
  return (
      <div>
          <div className="container content">
              <div className="row">
                  <div className="col-sm-3 talk">
                      <h1>Learn</h1>
                      <h1>Japanese</h1>
                      <br />
                      <h6 className="bold-four">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt molestiae ex inventore quibusdam id architecto quos cupiditate nobis magnam eum voluptatem quas quis obcaecati dolor vero veritatis similique alias.
                  </h6>
                      <br />
                      <h6><a className="btn btn-dark start start-two" href="#">Get Started</a></h6>
                  </div>
                  <div className="col-sm-9 showcase-img">
                      {/* <div className="circle"></div> */}
                  </div>
              </div>
          </div>         
      </div>
  );
}

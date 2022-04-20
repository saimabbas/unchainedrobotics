import React, { useRef, useState } from "react";
import st from "../../../styles/components/Pages/HomePage/HowItWorks.module.css";

import { Form } from "react-bootstrap";
const HowItWorks = () => {
  const doIt = useRef();
  const ourSupport = useRef();
  const [showWorkGrid, setShowWorkGrid] = useState(true);
  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    setShowWorkGrid(false);
    if (checked) {
      doIt.current.style.opacity = 0.25;
      ourSupport.current.style.opacity = 1;
      setShowWorkGrid(false);
    } else {
      doIt.current.style.opacity = 1;
      ourSupport.current.style.opacity = 0.25;
      setShowWorkGrid(true);
    }
  };
  return (
    <div className={st.howitworks}>
      <div className={st.hiwleft}>
        <img src="/assets/img/howitworks.png" alt="" />
      </div>
      <div className={st.hiwright}>
        <h4>How it</h4>
        <h5>works</h5>
        <p>
          Whether you want to automate “Do it Yourself” or with our help, we
          have everything for you. Get your price quote in just a few clicks and
          a confirmation within 24 hours!
        </p>
        <div className={st.switchbox + " " + "switchbox-con"}>
          <h6 className="do-it-yourself" ref={doIt}>
            Do it yourself
          </h6>
          <Form.Check
            type="switch"
            id="work-switch"
            onClick={(e) => {
              selectShortlistedApplicant(e);
            }}
          />
          <h6 className="our-support" ref={ourSupport}>
            With our engineering support
          </h6>
        </div>
        {showWorkGrid ? (
          <div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Search for suitable solutions D</h6>
                <p>
                  Discover different products for your automation solution on
                  our website. If something is missing, contact us
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Get in touch with us</h6>
                <p>
                  Send us an inquiry through our website or book an appointment
                  for a meeting or consultation
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Find all requirements</h6>
                <p>
                  Together with you, we go into a deeper coordination and find
                  the detailed requirements for your solution together with you.
                  We will need pictures and videos of your use case. We might
                  need to visit you on site to discuss all the finer points of
                  the process on the robot
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Requirement catalog</h6>
                <p>
                  The result of the joint requirements analysis is the
                  requirements catalog, which serves as the basis for an order,
                  summarizing everything important for the joint project.
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>A visualization</h6>
                <p>
                  We create a 3D visualization to give you a full picture.{" "}
                  <br />
                  You get an overview of the solution, as well as a simulation
                  for your application.
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Shipping</h6>
                <p>Robot is shipped to your preferred location.</p>
              </div>
            </div>
            <span>Done. Time to reap benefits of automation</span>
          </div>
        ) : (
          <div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Search for suitable solutions O</h6>
                <p>
                  Discover different products for your automation solution on
                  our website. If something is missing, contact us
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Get in touch with us</h6>
                <p>
                  Send us an inquiry through our website or book an appointment
                  for a meeting or consultation
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Find all requirements</h6>
                <p>
                  Together with you, we go into a deeper coordination and find
                  the detailed requirements for your solution together with you.
                  We will need pictures and videos of your use case. We might
                  need to visit you on site to discuss all the finer points of
                  the process on the robot
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Requirement catalog</h6>
                <p>
                  The result of the joint requirements analysis is the
                  requirements catalog, which serves as the basis for an order,
                  summarizing everything important for the joint project.
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>A visualization</h6>
                <p>
                  We create a 3D visualization to give you a full picture.{" "}
                  <br />
                  You get an overview of the solution, as well as a simulation
                  for your application.
                </p>
              </div>
            </div>
            <div className={st.hiwgrid}>
              <div className={st.hiwlinecir}>
                <div className={st.hiwcir}>
                  <div className={st.hiwinnercir}></div>
                </div>
                <div className={st.hiwline}></div>
              </div>
              <div className={st.hiwghead}>
                <h6>Shipping</h6>
                <p>Robot is shipped to your preferred location.</p>
              </div>
            </div>
            <span>Done. Time to reap benefits of automation</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorks;

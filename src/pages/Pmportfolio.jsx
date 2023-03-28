import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Pmportfolio = () => {
  return (
    <div>
      <Link to="/">
        <h3 className="breadcrumb">Home</h3>
      </Link>
      <Container>
        <h2>LVmedia user dashboard</h2>
        <a href="https://lvmedia.ng/dashboard" target="_blank">
          Live Link
        </a>

        <p>
          The LVmedia user dashboard is a B2C platform that allows users to
          purchase social media services from the LVmedia platform. The platform
          was built based with connecting APIs to Social Media Services
          Providers and Payments providers. I served as the lead product manager
          on the team and product owner. I will speak about the project in 5
          buckets.
        </p>
        <ol>
          <li>
            Situation -The User Journey was simple. Users should be able to{" "}
            <ul>
              <li>Fund their wallets</li>
              <li>Purchase services</li>
              <li>View status of services/track their transactions</li>
            </ul>{" "}
          </li>
          <li>
            Problem - Users used to fund their wallets by bank or wire transfers
            which had to be manually confrimed and their wallets balance
            updated, so we needed to automate that by finding a Payments
            Provider that allowed local AND interntional users to fund their
            wallets with their cards(or transfers that could be verified in real
            time). But social media service selling sites are typically
            blacklisted by such Payment Providers in Nigeria.
          </li>
          <li>
            Solution - This meant extensive research into why Payment Providers
            blacklist such sites and which payment providers do not blacklist
            them. We reached out to the support teams of a number of providers
            and had extensive conversations before we found a provider which fit
            our requirements.
          </li>
          <li>
            Impact - We were able to deploy this solution which reduced use of
            physical manpower and cut down time used in making sure users got
            their wallets updated by almost 98%.
          </li>
          <li>
            Lessons - We could've saved time on development if we had reached
            out first to the support times instead of integrating APIs and
            waiting till they stopped working, simply put, better communication
            with stakeholders prevents problems down the road.
          </li>
        </ol>

        <p> </p>
      </Container>
    </div>
  );
};

export default Pmportfolio;

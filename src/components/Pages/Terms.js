import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "../Terms.css";

function Terms() {
  return (
    <div className='card-container'>
      <div className='card'>
        <FontAwesomeIcon icon={faFileContract} className='card-image' />
        <div className='card-title'>Website Terms and Conditions</div>
        <div className='card-text'>
          Our website is available for our customer's convenience. You are
          welcome to download the image on our website for your use in product
          sales and promotion. Please ensure that any image is suitable for nay
          purpose for which you intend to use it. Our images may not be used to
          misrepresent products being sold. Using our images to promote or sell
          a product not manufactured or supplied by C.D.P., Inc is strictly
          prohibited. We use all reasonable care and skill to ensure the
          accuracy, correctness, and reliability of our website. We request that
          you use your best endeavors to protect the image(s) you use
          unauthorized access and use.
        </div>
      </div>
      <div className='card'>
        <FontAwesomeIcon icon={faTruckMoving} className='card-image' />
        <div className='card-title'>Freight Terms and Conditions</div>
        <div className='card-text'>
          All non-U.S. shipments may require 50% deposit with balance paid prior
          to shipping. Our primary shipping method is UPS standard ground. We
          reserve the right to ship orders via LTL freight carrier to ensure a
          safe and cost-efficient delivery. We can accommodate special request
          to use a particular carrier for a shipment. Handling charge and/or
          carrier pick up fees are applicable to all shipments, including 3rd
          party freight billing. 3rd party billing and collect will be charged
          $1.00 per box, except for Fed-Ex ground which will be $3.00 per box.
          We reserve the right to pass on surcharges from carriers for shipments
          deemed incomplete or inaccurate. This includes incorrect street
          addresses, postal codes, custom documentation, account numbers and any
          receiver inaccuracies such as failure to inform of a residential
          address, receiving hours or refusal of a schedule delivery. We must be
          notified of claims for merchandise that is received damaged within 30
          days of receipt of shipment. All original packaging must be retained
          for inspection by carrier. A shipment that is moved from original
          destination will void any short shipment claim.
        </div>
      </div>
      <div className='card'>
        <FontAwesomeIcon icon={faDollarSign} className='card-image' />
        <div className='card-title'>Sales Terms and Conditions</div>
        <div className='card-text'>
          Net 30 days on accounts with approved credit rating. All prices are
          quotes FOB Las Vegas and in U.S. currency Requests for price quotes
          for product or shipping must be made in writing. All quote are for 30
          days. Although all information displayed in this price list has been
          carefully checked for accuracy, errors, and omissions occasionally
          occur therefore are subject to correction. We regret any
          inconvenience. No merchandise will be accepted for credit without
          prior authorization. Only unused, unmarked, and undamaged merchandise
          can be considered for credit. Please reference a purchase order number
          or invoice number when returning items for credit. Merchandise
          approved for return will be subject to a 15% restocking charge. All
          prices are subject to change.
        </div>
      </div>
    </div>
  );
}

export default Terms;

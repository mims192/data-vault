

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data, { DataItem } from './data'; 
import Navbar3 from './Navbar3';

function BuyingPage() {


  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<DataItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataset = data.find(item => item.id === parseInt(id || '', 10));
    if (dataset) {
      setDetails(dataset);
    } else {
      setError('Dataset not found');
    }
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  
  return (
    <div  >
   <Navbar3/>
    <div className="container mb-5 mt-0">
      
      <div className="py-5 text-center">
       
        <h2 className='text-3xl text-black text-center font-semibold  '>Checkout </h2>
        
      </div>

      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">1</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
              <h2 className="card-title text-black">{details?.title}</h2>
              <br/>
              <p className='text-black'> {details?.description}</p>
            
              </div>
              <span className="text-body-secondary">{details?.price}</span>
            </li>
           
           
   
             
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{details?.price}</strong>
            </li>
          </ul>

          
        </div>
        <div className="col-md-7 col-lg-8">
         
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              
                
        

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              

              
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required>
                  <option value="">Choose...</option>
                
                  <option>India</option>
                 
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required>
                  <option value="">Choose...</option>
                  
                  <option>Delhi</option>
                  <option>Karnataka</option>
                  <option>Punjab</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              
            </div>

    

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                <label className="form-check-label" htmlFor="credit">Google Pay</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="debit">Paypal</label>
              </div>
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="paypal">Others</label>
              </div>
            </div>

    

              

             

           
            <hr className="my-4" />

            <button className="w-100 btn bg-black text-white " type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BuyingPage

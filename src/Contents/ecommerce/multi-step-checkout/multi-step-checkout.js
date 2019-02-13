import React, { Component } from 'react';
import './costom.scss'

class MultiStepChecout extends Component {
  render() {
    return (
      <div className="multi-step-checkout-process">
        <div className="multi-step-checkout-process-step">
          <ul className="accordion" data-accordion>
            <li className="accordion-item is-active" data-accordion-item>
              <a href="#" className="accordion-title">1. Shipping <span className="multi-step-checkout-step-title-subheader">Step 1 of 3</span></a>
              <div className="accordion-content" data-tab-content>
                <form className="multi-step-checkout-form">
                  <div className="row">
                    <div className="small-12 medium-9 column">
                      <div className="shipping-address multi-step-checkout-step-section">
                        <h6 className="multi-step-checkout-step-subheader">Shipping Address</h6>
                        <p className="multi-step-checkout-step-subdesc">Please enter your shipping address. Only USPS ships to APO, FPO, or PO Boxes. <a href="#" className="text-link">Shipping Rates and Delivery Times</a></p>

                        <label>
                          <input type="text" placeholder="First Name" required />
                          <input type="text" placeholder="Last Name" required />
                          <input type="text" placeholder="Address" required />
                          <div className="row">
                            <div className="small-12 medium-7 column">
                              <input type="text" placeholder="City" required />
                            </div>
                            <div className="small-6 medium-2 column">
                              <select required >
                                <option value="state1">AL</option>
                                <option value="state2">AK</option>
                                <option value="state3">AZ</option>
                                <option value="state4">AR</option>
                                <option value="state5">CA</option>
                              </select>
                            </div>
                            <div className="small-6 medium-3 column">
                              <input type="text" placeholder="ZIP" required />
                            </div>
                          </div>

                          <div><hr className="multi-step-checkout-form-divider"></div>
                          <input type="text" placeholder="Email" required />
                          <input type="text" placeholder="Phone" required />
                        </label>
                      </div>
                      <div className="multi-step-checkout-shipping-options multi-step-checkout-step-section">
                        <h6 className="multi-step-checkout-step-subheader">Shipping Options</h6>

                        <div className="row multi-step-checkout-shipping-option">
                          <label>
                            <div className="small-10 column">
                              <input type="radio" name="multi-step-checkout-shipping-option" value="ups-ground-shipping" className="multi-step-checkout-shipping-option-selection" checked="checked"/> <span className="multi-step-checkout-shipping-option-title">UPS Ground (4–5 business days) - Recommended</span>
                              <div className="multi-step-checkout-shipping-option-desc">Same-day shipping of in-stock items for orders placed before 3pm EST. Realtime tracking included.</div>
                            </div>
                            <div className="small-2 column multi-step-checkout-shipping-cost">
                              $25.00
                            </div>
                          </label>
                        </div>

                        <div className="row multi-step-checkout-shipping-option">
                          <label>
                            <div className="small-10 column">
                              <input type="radio" name="multi-step-checkout-shipping-option" value="usps-shipping" className="multi-step-checkout-shipping-option-selection"/><span className="multi-step-checkout-shipping-option-title">USPS  (6–12 business days)</span>
                              <div className="multi-step-checkout-shipping-option-desc">Tracking is available after 48 hours.</div>
                            </div>
                            <div className="small-2 column multi-step-checkout-shipping-cost">
                              $15.00
                            </div>
                          </label>
                        </div>

                      </div>
                      <div className="multi-step-checkout-enews-sign-up">
                        <fieldset>
                          <input className="multi-step-checkout-enews-sign-up-checkbox" id="multi-step-checkout-enews-sign-up-checkbox" type="checkbox"/>
                          <label for="#multi-step-checkout-enews-sign-up-checkbox">Please add me to your eNewsletter list so I can receive special promotions and product updates.</label>
                        </fieldset>
                      </div>
                      <button className="primary button expanded">Continue to Payment</button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="accordion-item" data-accordion-item>
              <a href="#" className="accordion-title">2. Payment <span className="multi-step-checkout-step-title-subheader">Step 2 of 3</span></a>
              <div className="accordion-content" data-tab-content>
                <form className="multi-step-checkout-form">
                  <div className="row">
                    <div className="small-12 medium-9 column">
                      <div className="multi-step-checkout-billing-address">
                        <fieldset>
                          <input className="multi-step-checkout-billing-address-checkbox" id="multi-step-checkout-billing-address-checkbox" type="checkbox" checked/><label for="multi-step-checkout-billing-address-checkbox">My Billing Address is the same as my Shipping Address.</label>
                        </fieldset>
                        <ul className="multi-step-checkout-billing-address-list">
                          <li className="multi-step-checkout-billing-name">John Smith</li>
                          <li className="multi-step-checkout-billing-street">123 Market St.</li>
                          <li className="multi-step-checkout-billing-city-state">San Francisco, CA 94134</li>
                        </ul>
                      </div>
                      <div><hr className="multi-step-checkout-form-divider"></div>

                      <div className="multi-step-checkout-credit-card-info">
                        <h6 className="multi-step-checkout-step-subheader">Credit Card</h6>
                        <ul className="multi-step-checkout-payment-icons">
                          <li><img className="multi-step-checkout-payment-icon" src="https://placehold.it/50x50"/></li>
                          <li><img className="multi-step-checkout-payment-icon" src="https://placehold.it/50x50"/></li>
                          <li><img className="multi-step-checkout-payment-icon" src="https://placehold.it/50x50"/></li>
                          <li><img className="multi-step-checkout-payment-icon" src="https://placehold.it/50x50"/></li>
                        </ul>

                        <input type="text" placeholder="Card Name" required />
                        <input type="text" placeholder="Card Number" required />
                        <div className="row">
                          <div className="small-4 column">
                            <select required >
                              <option value="january">01</option>
                              <option value="february">02</option>
                              <option value="march">03</option>
                              <option value="april">04</option>
                            </select>
                          </div>
                          <div className="small-4 column">
                            <select required >
                              <option value="year1">2019</option>
                              <option value="year2">2018</option>
                              <option value="year3">2017</option>
                              <option value="year4">2016</option>
                            </select>
                          </div>
                          <div className="small-4 column">
                            <input type="text" placeholder="CVV" required >
                          </div>
                        </div>

                        <div><hr className="multi-step-checkout-form-divider"></div>

                        <label for="apply-gift-card-code"> Gift Card <span>(optional)</span>
                          <div className="input-group gift-card">
                             <input className="input-group-field" type="text" placeholder="Code"/>
                               <div className="input-group-button" placeholder="$">

                                <input type="submit" className="button primary" value="Apply" id="apply-gift-card-code"/>
                              </div>
                          </div>
                        </label>

                        <div><hr className="multi-step-checkout-form-divider"/></div>

                        <button className="primary button expanded">Continue to Review Order</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="accordion-item" data-accordion-item>
              <a href="#" className="accordion-title">3. Review Order <span className="multi-step-checkout-step-title-subheader">Step 3 of 3</span></a>
              <div className="accordion-content" data-tab-content>
               <hr className="show-for-small-only order-table-divider"/>
                <table className="order-table-content stack">
                  <thead>
                    <tr>
                      <th width="120">Order</th>
                      <th width="350"></th>
                      <th width="80">Quantity</th>
                      <th width="100">Price Each</th>
                      <th width="60">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="order-item">
                      <td><img className="order-product-image" src="https://placehold.it/100x100"/></td>
                      <td><span className="order-product-title">Product 1</span> <span className="order-product-vendor">Vendor 1</span>
                        <ul className="order-product-info">
                          <li>In Stock</li>
                          <li>Product SKU: 12345</li>
                          <li>A great Product</li>
                          <li>Details: You won't be sad</li>
                        </ul>
                      </td>
                      <td><span className="show-for-small-only">Qty:</span> 1</td>
                      <td><span className="show-for-small-only">Price Each: </span><span className="order-product-price">$25.00</span>
                      <span className="show-for-small-only">,</span>
                      <br className="hide-for-small-only"/>
                      <span className="order-product-price-saving">
                        You save:
                        <br className="hide-for-small-only"/>
                        $2.08 (5%)
                      </span>
                      </td>
                      <td><span className="show-for-small-only">Total: </span><span className="order-product-total">$25.00</span></td>
                    </tr>
                    <tr className="order-item">
                      <td><img className="order-product-image" src="https://placehold.it/100x100"/></td>
                      <td><span className="order-product-title">Product 2</span> <span className="order-product-vendor">Vendor 1</span>
                      <ul className="order-product-info">
                        <li>In Stock</li>
                        <li>Product SKU: 12345</li>
                        <li>A great Product</li>
                        <li>Details: You won't be sad</li>
                      </ul>
                      </td>
                      <td><span className="show-for-small-only">Qty:</span> 1</td>
                      <td><span className="show-for-small-only">Price Each: </span><span className="order-product-price">$25.00</span>
                      <span className="show-for-small-only">,</span>
                      <br className="hide-for-small-only"/>
                      <span className="order-product-price-saving">
                        You save:
                        <br className="hide-for-small-only"/>
                        $2.08 (5%)
                      </span>
                      </td>
                      <td><span className="show-for-small-only">Total: </span><span className="order-product-total">$25.00</span></td>
                    </tr>
                    <tr className="order-item">
                      <td><img className="order-product-image" src="https://placehold.it/100x100"/></td>
                      <td><span className="order-product-title">Product 3</span> <span className="order-product-vendor">Vendor 1</span>
                        <ul className="order-product-info">
                          <li>In Stock</li>
                          <li>Product SKU: 12345</li>
                          <li>A great Product</li>
                          <li>Details: You won't be sad</li>
                        </ul>
                      </td>
                      <td><span className="show-for-small-only">Qty:</span> 1</td>
                      <td><span className="show-for-small-only">Price Each: </span><span className="order-product-price">$25.00</span>
                      <span className="show-for-small-only">,</span>
                      <br className="hide-for-small-only"/>
                      <span className="order-product-price-saving">
                        You save:
                        <br className="hide-for-small-only"/>
                        $2.08 (5%)
                      </span>
                      </td>
                      <td><span className="show-for-small-only">Total: </span><span className="order-product-total">$25.00</span></td>
                    </tr>
                  </tbody>
                </table>
                <div className="">
                  <div className="row">
                    <div className="small-12 medium-9 column multi-step-checkout-create-account">
                      <h6 className="multi-step-checkout-step-subheader">Create an Account <span>(optional)</span></h6>
                      <p className="create-account-desc">Save and review your orders in your account.</p>
                      <form>
                        <div className="row">
                          <div className="small-12 medium-6 column">
                            <input type="text" placeholder="Password">
                          </div>
                          <div className="small-12 medium-6 column">
                            <input type="text" placeholder="Confirm Password">
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div><hr className="multi-step-checkout-form-divider"/></div>

                  <form>
                    <label for="">Comments
                      <textarea name="" id="" cols="30" rows="2"></textarea>
                    </label>
                    <button className="primary button expanded">Submit Order</button>
                  </form>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
)
}
}
export default MultiStepChecout;

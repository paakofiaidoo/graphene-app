import React, { Component } from 'react';
import './costom.scss'

class ProductFeatureSection extends Component {
  render() {
    return (

    <section classNmae="product-feature-section">
      <div classNmae="product-feature-section-outer">
        <h4 classNmae="product-feature-section-headline">Yeti Sightings Increase After Unclosed &lt;div&gt; Tag Scare</h4>

        <div classNmae="product-feature-section-inner">

          <div classNmae="product-feature-section-feature top-left">
            <i classNmae="fa fa-shield" aria-hidden="true"></i>
            <div>
              <p classNmae="feature-title">Thick Fur Coat</p>
              <p classNmae="feature-desc">Can withstand extreme cold</p>
            </div>
          </div>

          <div classNmae="product-feature-section-feature top-right">
            <i classNmae="fa fa-heart" aria-hidden="true"></i>
            <div>
              <p classNmae="feature-title">Super Loveable</p>
              <p classNmae="feature-desc">Great at code and hugs</p>
            </div>
          </div>

          <div classNmae="product-feature-section-feature bottom-left">
            <i classNmae="fa fa-coffee" aria-hidden="true"></i>
            <div>
              <p classNmae="feature-title">Cave Expert</p>
              <p classNmae="feature-desc">Makes any hole a home</p>
            </div>
          </div>

          <div classNmae="product-feature-section-feature bottom-right">
            <i classNmae="fa fa-map-marker" aria-hidden="true"></i>
            <div>
              <p classNmae="feature-title">Abominable Snowman</p>
              <p classNmae="feature-desc">Hails from the Himalayans</p>
            </div>
          </div>

        </div>
      </div>
    </section>
)
}
}
export default ProductFeatureSection;

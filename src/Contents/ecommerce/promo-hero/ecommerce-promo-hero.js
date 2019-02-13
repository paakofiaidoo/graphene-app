import React, { Component } from 'react';
import './costom.scss'

class PromoHero extends Component {
  render() {
    return (
      <div className="promo-hero promo-hero-bg-image">
        <div className="promo-hero-content">
          <h1 className="promo-hero-title">Promo Headline Will Display Here</h1>
          <p className="promo-hero-description hide-for-small-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor ante, varius eget lacinia porta, faucibus ut eros. Donec quis dui id felis pharetra fermentum.</p>
          <div className="promo-hero-ctas">
            <a href="#" className="promo-section-cta button primary">Shop Now</a>
            <a href="#" className="promo-section-cta button white-hollow">Learn More</a>
          </div>
        </div>
      </div>
)
}
}

export default PromoHero;

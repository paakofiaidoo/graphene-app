import React, { Component } from 'react';
import './costom.scss'

class HeroSliderSmall extends Component {
  render() {
    return (
      <div class="ecommerce-hero-slider-small orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
        <ul class="orbit-container">
          <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
          <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          <li class="is-active orbit-slide">
            <div class="hero-slider-slide">
             <div class="row">
               <div class="small-12 medium-3 columns">
                 <img src="https://placehold.it/300x300"/>
               </div>
               <div class="small-12 medium-9 columns">
                <div class="hero-slider-slide-content">
                  <h3>Title Will Display Here</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo consectetur arcu ut aliquam. Nullam rhoncus tellus dolor, eu mollis libero suscipit at. Mauris imperdiet aliquam consectetur. Curabitur ac massa dapibus, viverra neque eu, lacinia nisi.<a href="#"> Learn More</a></p>
                  <div>
                    <button class="hollow button" type="button"><img src="https://placehold.it/20x20"/> Watch Video</button>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </li>
          <li class="orbit-slide">
            <div class="hero-slider-slide">
             <div class="row">
               <div class="small-12 medium-3 columns">
                 <img src="https://placehold.it/300x300"/>
               </div>
               <div class="small-12 medium-9 columns">
                <div class="hero-slider-slide-content">
                  <h3>Title Will Display Here</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo consectetur arcu ut aliquam. Nullam rhoncus tellus dolor, eu mollis libero suscipit at. Mauris imperdiet aliquam consectetur. Curabitur ac massa dapibus, viverra neque eu, lacinia nisi.<a href="#"> Learn More</a></p>
                  <div>
                    <button class="hollow button" type="button"><img src="https://placehold.it/20x20"/> Watch Video</button>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </li>
          <li class="orbit-slide">
            <div class="hero-slider-slide">
             <div class="row">
               <div class="small-12 medium-3 columns">
                 <img src="https://placehold.it/300x300"/>
               </div>
               <div class="small-12 medium-9 columns">
                <div class="hero-slider-slide-content">
                  <h3>Title Will Display Here</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo consectetur arcu ut aliquam. Nullam rhoncus tellus dolor, eu mollis libero suscipit at. Mauris imperdiet aliquam consectetur. Curabitur ac massa dapibus, viverra neque eu, lacinia nisi.<a href="#"> Learn More</a></p>
                  <div>
                    <button class="hollow button" type="button"><img src="https://placehold.it/20x20"/> Watch Video</button>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </li>
        </ul>
        <nav class="orbit-bullets">
          <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
          <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
          <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
        </nav>
      </div>

)
}
}
export default HeroSliderSmall;

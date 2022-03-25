import React from 'react'

export default function IndividualFarmerTimeline() {
  return (
    <>
    <section>
  <div class="container">
    <h1 class="text-center">From Start to Finish with ACME Software</h1>
    <div class="timeline flex-container">

      <div class="timeline-item flex-items-default selected">
        <div class="timeline-content text-left animated bounceIn">
          <h2>Explore</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div class="hexagon"></div>
          <i class="material-icons">explore</i>
        </div>
      </div>
      <div class="timeline-item flex-items-default">
        <div class="timeline-content text-left">
          <h2>Plan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div class="hexagon"></div>
          <i class="material-icons">border_style</i>
        </div>
      </div>
      <div class="timeline-item flex-items-default">
        <div class="timeline-content text-left">
          <h2>Production</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div class="hexagon"></div>
          <i class="material-icons">format_shapes</i>
        </div>
      </div>
      <div class="timeline-item flex-items-default">
        <div class="timeline-content text-left">
          <h2>Review</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div class="hexagon"></div>
          <i class="material-icons">rate_review</i>
        </div>
      </div>
      <div class="timeline-item flex-items-default">
        <div class="timeline-content text-left">
          <h2>Ship</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div class="hexagon"></div>
          <i class="material-icons">important_devices</i>
        </div>
      </div>

      <div class="dropdown animated bounceIn" style="left: -88px;">
        <div class="inner">
          <div class="arrow-down"></div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

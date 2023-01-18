import React from 'react'

function weather() {
  return (
    <div>
        <div class="main container">
  <div class="row">
    <div class="col-xs-12">
      <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
        <div class="col-xs-6">
          <h2>Lucerne<>May 24, 2016</></h2>
          <p class="h3"><i class="mi mi-fw mi-lg mi-rain-heavy"></i> Rainy</p>
        </div>
        <div class="col-xs-6 text-center">
          <div class="h1 temperature">
            <span>12°</span>
            
            <small>8° / 13°</small>
          </div>
        </div>
        <div class="col-xs-12">
          <ul class="list-inline row forecast">
            <li class="col-xs-4 col-sm-2 text-center">
              <h3 class="h5">Wed</h3>
              <p><i class="mi mi-fw mi-2x mi-cloud-sun"></i>9°/18°</p>
            </li>
            <li class="col-xs-4 col-sm-2 text-center">
              <h3 class="h5">Thu</h3>
              <p><i class="mi mi-fw mi-2x mi-sun"></i>12°/23°</p>
            </li>
            <li class="col-xs-4 col-sm-2 text-center">
              <h3 class="h5">Fri</h3>
              <p><i class="mi mi-fw mi-2x mi-cloud-sun"></i>14°/24°</p>
            </li>
            <li class="col-xs-4 col-sm-2 text-center">
              <h3 class="h5">Sat</h3>
              <p><i class="mi mi-fw mi-2x mi-rain"></i>15°/23°</p>
            </li>
            <li class="col-xs-4 col-sm-2 text-center">
              <h3 class="h5">Sun</h3>
              <p><i class="mi mi-fw mi-2x mi-rain-heavy"></i>15°/22°</p>
            </li>
            <li class="col-xs-4 col-sm-2 text-center">
              <h3 class="h5">Mon</h3>
              <p><i class="mi mi-fw mi-2x mi-clouds"></i>12°/17°</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default weather
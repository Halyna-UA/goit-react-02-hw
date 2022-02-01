import React from 'react';
import './Feedback.css';

class Feedback extends React.Comment {
  render() {
    return (
      <div class="Feedback">
        <ul class="Feedback__list">
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button">
              Good
            </button>
          </li>
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button">
              Neutral
            </button>
          </li>
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button">
              Bad
            </button>
          </li>
        </ul>
        <p>Statistics</p>
        <ul class="Statistics__list">
          <li class="Statistics__item">Good: 3</li>
          <li class="Statistics__item">Neutral: 2</li>
          <li class="Statistics__item">Bad: 2</li>
        </ul>
      </div>
    );
  }
}

// const Feedback = () => {
//   <div>
//     <p>Please leave feedback</p>
//     <ul class="list filters__list">
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Good
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Neutral
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Bad
//         </button>{' '}
//       </li>
//     </ul>
//     <p>Statistics</p>
//     <ul class="list filters__list">
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Good: 3
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Neutral: 2
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Bad: 2
//         </button>{' '}
//       </li>
//     </ul>
//   </div>;
// };
export default Feedback;

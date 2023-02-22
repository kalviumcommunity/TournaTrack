import React from 'react';
import Detail from './Detail';

function PlayerRegister() {
  return (
    <div>
      <form>
        <h3>Register Your team </h3>
        <div>
            <h4>Team name</h4> <input type="text" />
        </div>
        <div>
            <h4>Captain</h4> <input type="text" />
        </div>
        <div>
            <h4>Contact</h4> <input type="number" />
        </div>
        <div>
            <h3>Players name</h3>
        <textarea name="paragraph_text" cols="50" rows="10"></textarea>
        </div>
        <div>
            <h4>Online payment</h4> <input type="radio" />
            <h4>Cash payment</h4> <input type="radio" />
        </div>
        <button>Proceed to payment</button>
        <button>Back</button>
      </form>
    </div>
  );
}

export default PlayerRegister;

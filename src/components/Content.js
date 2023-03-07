
import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home Page</h1>
      <p>Princess just wants a new car.<br />
        I have told her that hers will go far.<br />
        'Oh, it's really not cool<br />
        driving this crap to school.'<br />
        'Do I need that emotional scar? '<br /><br />
        'The kids will all laugh at the rust.<br />
        When we race, I'll be left in the dust! <br />
        I will save up some cash<br />
        then we'll make a mad dash<br />
        to the car dealer surely you trust'.<br /><br />
        'He will make us a wonderful deal<br />
        and I'm sure you will know how I feel.<br />
        I will love you so much, <br />
        My siblings... I won't touch.<br />
        Just get me behind a new wheel'! <br /><br />
        Now she'll be cruisin in style.<br />
        She'll be happy for only awhile.<br />
        There will always be better<br />
        and we'll try hard to get her<br />
        a car that will make princess smile.
      </p>
    </div>
  );
}

function Cars() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Cars Page</h1>
      <img src="https://images.unsplash.com/photo-1542046272227-d247df21628a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZGElMjBjYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width="267" alt="CarImage" />
      <p>Car details:</p>
      <ul style={{ listStyle: 'none' }}>
        <li>Make: Honda</li>
        <li>Model: Civic</li>
        <li>Year: 2022</li>
        <li>Price: $20,000</li>
      </ul>
    </div>
  );
}

function ContactUs() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contact Us Page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" className="form-control" id="fullname" required />
    </div>
    <div className="form-group">
      <label htmlFor="inquiry">Inquiry:</label>
      <textarea className="form-control" id="inquiry" rows="5" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
 );
}

export { Home, Cars, ContactUs };

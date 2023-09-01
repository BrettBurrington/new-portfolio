export default function Contact() {
  return (
    <div>
      <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Your Username</span>
  </div>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2">Your Email</span>
  </div>
</div>

<label htmlFor="basic-url">Your Email</label>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
  </div>
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">Message Subject Here</span>
  </div>
  <input type="text" className="form-control" aria-label="Amount"/>
  <div className="input-group-append">
    <span className="input-group-text"></span>
  </div>
</div>

<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">Message Content Here</span>
    <button type="submit">Submit</button>
  </div>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
    </div>
    
  );
}

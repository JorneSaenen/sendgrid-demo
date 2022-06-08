import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [val, setVal] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const submitEmail = async (e) => {
    e.preventDefault();
    await axios.post("/api/hello", val);
    setVal({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  return (
    <form className='needs-validation shadow p-5' id='contact-form' onSubmit={submitEmail}>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email*
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          onChange={(e) => setVal({ ...val, email: e.target.value })}
          placeholder='naam@voorbeeld.be'
          required
          value={val.email}
        />
        <div className='valid-feedback'>Mooi zo!</div>
        <div className='invalid-feedback'>Gelieve het invulveld correct in te vullen.</div>
      </div>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Naam*
        </label>
        <input type='text' className='form-control' id='name' placeholder='Kevin Dillaerts' required onChange={(e) => setVal({ ...val, name: e.target.value })} value={val.name} />
        <div className='valid-feedback'>Mooi zo!</div>
        <div className='invalid-feedback'>Gelieve het invulveld correct in te vullen.</div>
      </div>
      <div className='mb-3'>
        <label htmlFor='phone' className='form-label'>
          Telefoon
        </label>
        <input type='text' className='form-control' id='phone' onChange={(e) => setVal({ ...val, phone: e.target.value })} value={val.phone} />
      </div>
      <div className='mb-3'>
        <label htmlFor='message' className='form-label'>
          Je bericht*
        </label>
        <textarea className='form-control' id='message' rows='3' required onChange={(e) => setVal({ ...val, message: e.target.value })} val={val.message}></textarea>
        <div className='valid-feedback'>Mooi zo!</div>
        <div className='invalid-feedback'>Gelieve het invulveld correct in te vullen.</div>
      </div>
      <div className='col-12'>
        <button className='btn btn-primary' type='submit' id='btn'>
          Verzenden
        </button>
        <button className='btn btn-primary d-none' type='button' id='btn-loading' disabled>
          <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
          zenden...
        </button>
      </div>
    </form>
  );
}

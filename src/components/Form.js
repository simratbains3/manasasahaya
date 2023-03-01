import { useState } from 'react';
import { send } from 'emailjs-com';

function WebForm(){

    const [toSend, setToSend] = useState({
        phone: '',
        email: '',
        age: '',
        place: '',
        issue: '',
      });

    const onSubmit = (e) => {
       
        e.preventDefault();
        send(
              'service_6limytg',
              'template_8wjybc6',
              toSend,
              'Q85IGBhJm6E3FXw_g'
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setToSend({ phone: '',email: '', age: '', place: '', issue: '',});
                window.alert("We have received your information. Please sit back and wait comfortably as we will be in touch with you shortly.")
                var frm = document.getElementsByName('form')[0];
                frm.reset(); 
              })
              .catch((err) => {
                console.log('FAILED...', err);
                window.alert("Oops something seems to be wrong. Please try again later.")
                var frm = document.getElementsByName('form')[0];
                frm.reset(); 
              });
              
      };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };


    return(
        <div className="card shadow-xl p-2 bg-[#f0b43c]">
           
  <form className="bg-white shadow-md rounded p-5" onSubmit={ onSubmit } name="form">
  <h2 className="mb-6 text-xl font-bold text-center">Drop in your issues and we will contact you!</h2>
    <div className="mb-5">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Phone number
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="phone" type="number" placeholder="Phone number" onChange={handleChange}></input>
      
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Email" onChange={handleChange}></input>
      
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Age
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="age" type="number" placeholder="Age" onChange={handleChange}></input>
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Place
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="place" type="text" placeholder="Place" onChange={handleChange}></input>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Issue
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="issue" type="textarea" placeholder="Issue" onChange={handleChange}></input>
      
    </div>
    <div className="flex place-content-center">
      <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Submit
      </button>
      
    </div>
  </form>
 
</div>
    );
}

export default WebForm;